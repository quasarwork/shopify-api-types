export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  URL: { input: any; output: any; }
};

/**
 * A version of the API, as defined by [Shopify API versioning](https://shopify.dev/api/usage/versioning).
 * Versions are commonly referred to by their handle (for example, `2021-10`).
 *
 */
export type ApiVersion = {
  __typename?: 'ApiVersion';
  /** The human-readable name of the version. */
  displayName: Scalars['String']['output'];
  /** The unique identifier of an ApiVersion. All supported API versions have a date-based (YYYY-MM) or `unstable` handle. */
  handle: Scalars['String']['output'];
  /** Whether the version is actively supported by Shopify. Supported API versions are guaranteed to be stable. Unsupported API versions include unstable, release candidate, and end-of-life versions that are marked as unsupported. For more information, refer to [Versioning](https://shopify.dev/api/usage/versioning). */
  supported: Scalars['Boolean']['output'];
};

/** Represents a unique capture transaction. */
export type CaptureSession = {
  __typename?: 'CaptureSession';
  /** A globally-unique ID. */
  id: Scalars['ID']['output'];
  /** Details about the capture state. */
  state: CaptureSessionStates;
};

/** Return type for `captureSessionReject` mutation. */
export type CaptureSessionRejectPayload = {
  __typename?: 'CaptureSessionRejectPayload';
  /** The updated capture session. */
  captureSession?: Maybe<CaptureSession>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<CaptureSessionRejectUserError>;
};

/** An error that occurs during the execution of `CaptureSessionReject`. */
export type CaptureSessionRejectUserError = DisplayableError & {
  __typename?: 'CaptureSessionRejectUserError';
  /** The error code. */
  code?: Maybe<CaptureSessionRejectUserErrorCode>;
  /** The path to the input field that caused the error. */
  field?: Maybe<Array<Scalars['String']['output']>>;
  /** The error message. */
  message: Scalars['String']['output'];
};

/** Possible error codes that can be returned by `CaptureSessionRejectUserError`. */
export enum CaptureSessionRejectUserErrorCode {
  /** Capture session has already been resolved or has already been rejected with a different reason. */
  CaptureSessionInvalidState = 'CAPTURE_SESSION_INVALID_STATE',
  /** Capture session not found. */
  CaptureSessionNotFound = 'CAPTURE_SESSION_NOT_FOUND'
}

/** The input fields to use for the reason why the capture was rejected. */
export type CaptureSessionRejectionReasonInput = {
  /** The reason code. */
  code: CaptureSessionStatusReasonRejectionCode;
  /** A custom, localized message for the merchant. */
  merchantMessage?: InputMaybe<Scalars['String']['input']>;
};

/** Return type for `captureSessionResolve` mutation. */
export type CaptureSessionResolvePayload = {
  __typename?: 'CaptureSessionResolvePayload';
  /** The updated capture session. */
  captureSession?: Maybe<CaptureSession>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<CaptureSessionResolveUserError>;
};

/** An error that occurs during the execution of `CaptureSessionResolve`. */
export type CaptureSessionResolveUserError = DisplayableError & {
  __typename?: 'CaptureSessionResolveUserError';
  /** The error code. */
  code?: Maybe<CaptureSessionResolveUserErrorCode>;
  /** The path to the input field that caused the error. */
  field?: Maybe<Array<Scalars['String']['output']>>;
  /** The error message. */
  message: Scalars['String']['output'];
};

/** Possible error codes that can be returned by `CaptureSessionResolveUserError`. */
export enum CaptureSessionResolveUserErrorCode {
  /** Capture session has already been rejected. */
  CaptureSessionInvalidState = 'CAPTURE_SESSION_INVALID_STATE',
  /** Capture session not found. */
  CaptureSessionNotFound = 'CAPTURE_SESSION_NOT_FOUND'
}

/** The state of a finalized capture transaction. */
export type CaptureSessionState = {
  /** The capture state code. */
  code: CaptureSessionStateCode;
};

/**
 * The possible values that can be used to describe
 * the state of a finalized capture transaction.
 *
 */
export enum CaptureSessionStateCode {
  /** Capture rejected. */
  Rejected = 'REJECTED',
  /** Capture resolved. */
  Resolved = 'RESOLVED'
}

/** Additional details about a capture's rejected state. */
export type CaptureSessionStateRejected = CaptureSessionState & {
  __typename?: 'CaptureSessionStateRejected';
  /** The capture state code. */
  code: CaptureSessionStateCode;
  /** The custom, localized message for the merchant. */
  merchantMessage?: Maybe<Scalars['String']['output']>;
  /** The reason the capture is rejected. */
  reason: CaptureSessionStateRejectedReason;
};

/**
 * The possible values that can be used to describe
 * the reason why the capture transaction is rejected.
 *
 */
export enum CaptureSessionStateRejectedReason {
  /** Authorization expired. */
  AuthorizationExpired = 'AUTHORIZATION_EXPIRED',
  /** Capture processing failure. */
  ProcessingError = 'PROCESSING_ERROR'
}

/** Additional details about a capture's resolved state. */
export type CaptureSessionStateResolved = CaptureSessionState & {
  __typename?: 'CaptureSessionStateResolved';
  /** The capture state code. */
  code: CaptureSessionStateCode;
};

/** The possible values that can be used to describe the state of a finalized capture transaction. */
export type CaptureSessionStates = CaptureSessionStateRejected | CaptureSessionStateResolved;

/**
 * The possible values that can be used to describe
 * the reason why a capture transaction is rejected.
 *
 */
export enum CaptureSessionStatusReasonRejectionCode {
  /** Authorization expired. */
  AuthorizationExpired = 'AUTHORIZATION_EXPIRED',
  /** Capture processing failure. */
  ProcessingError = 'PROCESSING_ERROR'
}

/** Represents an error in the input of a mutation. */
export type DisplayableError = {
  /** The path to the input field that caused the error. */
  field?: Maybe<Array<Scalars['String']['output']>>;
  /** The error message. */
  message: Scalars['String']['output'];
};

/** The schema's entry point for all mutation operations. */
export type MutationRoot = {
  __typename?: 'MutationRoot';
  /**
   * Rejects an open capture session.
   *
   * After the `captureSessionReject` mutation completes on a given capture session, any
   * `captureSessionResolve` mutation attempts will fail. Subsequent `captureSessionReject`
   * mutation attempts will succeed, but the `reason` argument will be ignored.
   *
   */
  captureSessionReject?: Maybe<CaptureSessionRejectPayload>;
  /**
   * Resolves an open capture session.
   *
   * After the `captureSessionResolve` mutation completes on a given capture session, any
   * `captureSessionReject` mutation attempts will fail. Subsequent `captureSessionResolve`
   * mutation attempts will succeed.
   *
   */
  captureSessionResolve?: Maybe<CaptureSessionResolvePayload>;
  /**
   * Initiates the confirmation process of the given payment_session.
   *
   * Shopify will start confirming the payment. According to its business logic, Shopify determines if the
   * payment can be authorized and sends a POST request to the payments app, delivering the confirmation result.
   *
   */
  paymentSessionConfirm?: Maybe<PaymentSessionConfirmPayload>;
  /**
   * Change a payment session status to pending.
   *
   * Upon receiving the response from the `PaymentSessionPending` mutation,
   * you must redirect the customer back to Shopify, using `redirectUrl` in `nextAction`.
   *
   * Upon completion, pending payments must be finalized into either a successful or failed state using
   * the `paymentSessionResolve` or `paymentSessionReject` mutations.
   * Both `sale` and `authorization` payments can be marked as pending.
   *
   */
  paymentSessionPending?: Maybe<PaymentSessionPendingPayload>;
  /**
   * Redirects the buyer to the given URL for the payment session.
   * For example, Shopify will redirect the buyer to the URL where the 3DS authentication will take place
   * for onsite payment with `credit_card` payment method.
   *
   */
  paymentSessionRedirect?: Maybe<PaymentSessionRedirectPayload>;
  /**
   * Rejects an open payment session.
   * After the `paymentSessionReject` mutation completes on a given payment session, any
   * `paymentSessionResolve` mutation attempts will fail. Subsequent `paymentSessionReject`
   * mutation attempts will succeed, but the `RejectionReasonInput` argument will be ignored.
   *
   */
  paymentSessionReject?: Maybe<PaymentSessionRejectPayload>;
  /**
   * Resolves an open payment session.
   * After the `paymentSessionResolve` mutation completes on a given payment session, any
   * `paymentSessionReject` mutation attempts will fail. Subsequent `paymentSessionResolve`
   * mutation attempts will succeed, but the `Details` argument will be ignored.
   *
   */
  paymentSessionResolve?: Maybe<PaymentSessionResolvePayload>;
  /**
   * Configures the partner-managed payments gateway to work on the merchant's store. For an example of how to use the `paymentsAppConfigure` mutation, refer to the [Onboard a merchant payments app](https://shopify.dev/apps/payments/getting-started/onboard-a-merchant-payments-apps) tutorial.
   *
   */
  paymentsAppConfigure?: Maybe<PaymentsAppConfigurePayload>;
  /**
   * Rejects an open refund session.
   * After the `refundSessionReject` mutation completes on a given refund session, any
   * `refundSessionResolve` mutation attempts will fail. Subsequent `refundSessionReject`
   * mutation attempts will succeed, but the `RejectionReasonInput` argument will be ignored.
   *
   */
  refundSessionReject?: Maybe<RefundSessionRejectPayload>;
  /**
   * Resolves an open refund session.
   * After the `refundSessionResolve` mutation completes on a given refund session, any
   * `refundSessionReject` mutation attempts will fail. Subsequent `refundSessionResolve`
   * mutation attempts will succeed, but the `Details` argument will be ignored.
   *
   */
  refundSessionResolve?: Maybe<RefundSessionResolvePayload>;
  /**
   * Rejects an open void session.
   * After the `voidSessionReject` mutation completes on a given void session, any
   * `voidSessionResolve` mutation attempts will fail. Subsequent `voidSessionReject`
   * mutation attempts will succeed, but the `RejectionReasonInput` argument will be ignored.
   *
   */
  voidSessionReject?: Maybe<VoidSessionRejectPayload>;
  /**
   * Resolves an open void session.
   * After the `voidSessionResolve` mutation completes on a given void session, any
   * `voidSessionReject` mutation attempts will fail. Subsequent `voidSessionResolve`
   * mutation attempts will succeed, but the `Details` argument will be ignored.
   *
   */
  voidSessionResolve?: Maybe<VoidSessionResolvePayload>;
};


/** The schema's entry point for all mutation operations. */
export type MutationRootCaptureSessionRejectArgs = {
  id: Scalars['ID']['input'];
  reason: CaptureSessionRejectionReasonInput;
};


/** The schema's entry point for all mutation operations. */
export type MutationRootCaptureSessionResolveArgs = {
  id: Scalars['ID']['input'];
};


/** The schema's entry point for all mutation operations. */
export type MutationRootPaymentSessionConfirmArgs = {
  id: Scalars['ID']['input'];
};


/** The schema's entry point for all mutation operations. */
export type MutationRootPaymentSessionPendingArgs = {
  id: Scalars['ID']['input'];
  pendingExpiresAt: Scalars['DateTime']['input'];
  reason: PaymentSessionStatePendingReason;
};


/** The schema's entry point for all mutation operations. */
export type MutationRootPaymentSessionRedirectArgs = {
  id: Scalars['ID']['input'];
  redirectUrl: Scalars['URL']['input'];
};


/** The schema's entry point for all mutation operations. */
export type MutationRootPaymentSessionRejectArgs = {
  authentication?: InputMaybe<PaymentSessionThreeDSecureAuthentication>;
  id: Scalars['ID']['input'];
  reason: PaymentSessionRejectionReasonInput;
};


/** The schema's entry point for all mutation operations. */
export type MutationRootPaymentSessionResolveArgs = {
  authentication?: InputMaybe<PaymentSessionThreeDSecureAuthentication>;
  authorizationExpiresAt?: InputMaybe<Scalars['DateTime']['input']>;
  id: Scalars['ID']['input'];
  networkTransactionId?: InputMaybe<Scalars['String']['input']>;
};


/** The schema's entry point for all mutation operations. */
export type MutationRootPaymentsAppConfigureArgs = {
  externalHandle?: InputMaybe<Scalars['String']['input']>;
  ready: Scalars['Boolean']['input'];
};


/** The schema's entry point for all mutation operations. */
export type MutationRootRefundSessionRejectArgs = {
  id: Scalars['ID']['input'];
  reason: RefundSessionRejectionReasonInput;
};


/** The schema's entry point for all mutation operations. */
export type MutationRootRefundSessionResolveArgs = {
  id: Scalars['ID']['input'];
};


/** The schema's entry point for all mutation operations. */
export type MutationRootVoidSessionRejectArgs = {
  id: Scalars['ID']['input'];
  reason: VoidSessionRejectionReasonInput;
};


/** The schema's entry point for all mutation operations. */
export type MutationRootVoidSessionResolveArgs = {
  id: Scalars['ID']['input'];
};

/** A unique payment transaction. */
export type PaymentSession = {
  __typename?: 'PaymentSession';
  /** The date and time when an authorized payment session expires. */
  authorizationExpiresAt?: Maybe<Scalars['DateTime']['output']>;
  /** A globally-unique ID. */
  id: Scalars['ID']['output'];
  /** The next action expected of the partner. */
  nextAction?: Maybe<PaymentSessionNextAction>;
  /** The date and time when a pending payment session expires. */
  pendingExpiresAt?: Maybe<Scalars['DateTime']['output']>;
  /** Details about the payment state. */
  state: PaymentSessionStates;
};

/** The payload required to redirect the customer to the shop after payment is finalized. */
export type PaymentSessionActionsRedirect = {
  __typename?: 'PaymentSessionActionsRedirect';
  /** The URL of the checkout that's used to redirect the customer. */
  redirectUrl: Scalars['URL']['output'];
};

/** Return type for `paymentSessionConfirm` mutation. */
export type PaymentSessionConfirmPayload = {
  __typename?: 'PaymentSessionConfirmPayload';
  /** The updated payment session. */
  paymentSession?: Maybe<PaymentSession>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<PaymentSessionConfirmUserError>;
};

/** An error that occurs during the execution of `PaymentSessionConfirm`. */
export type PaymentSessionConfirmUserError = DisplayableError & {
  __typename?: 'PaymentSessionConfirmUserError';
  /** The error code. */
  code?: Maybe<PaymentSessionConfirmUserErrorCode>;
  /** The path to the input field that caused the error. */
  field?: Maybe<Array<Scalars['String']['output']>>;
  /** The error message. */
  message: Scalars['String']['output'];
};

/** Possible error codes that can be returned by `PaymentSessionConfirmUserError`. */
export enum PaymentSessionConfirmUserErrorCode {
  /** Confirmation flow requirements are not configured completely for this payment app. */
  ConfirmationNotSupported = 'CONFIRMATION_NOT_SUPPORTED',
  /** The state transition is invalid. */
  InvalidStateTransition = 'INVALID_STATE_TRANSITION',
  /** Payment session not found. */
  PaymentSessionNotFound = 'PAYMENT_SESSION_NOT_FOUND'
}

/** The next action that is expected of the Partner after the payment is finalized. */
export type PaymentSessionNextAction = {
  __typename?: 'PaymentSessionNextAction';
  /** The action expected by the partner. */
  action: PaymentSessionNextActionAction;
  /** The context required to perform an action. */
  context: PaymentSessionNextActionContext;
};

/**
 * The possible values that can be used to describe the next
 * action that a Partner should do after a payment is finalized.
 *
 */
export enum PaymentSessionNextActionAction {
  /** Redirect the customer to the next checkout step. */
  Redirect = 'REDIRECT'
}

/** The context required to perform an action. */
export type PaymentSessionNextActionContext = PaymentSessionActionsRedirect;

/** Return type for `paymentSessionPending` mutation. */
export type PaymentSessionPendingPayload = {
  __typename?: 'PaymentSessionPendingPayload';
  /** The updated payment session. */
  paymentSession?: Maybe<PaymentSession>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<PaymentSessionPendingUserError>;
};

/**
 * Represents a payment session custom error.
 *
 */
export type PaymentSessionPendingUserError = DisplayableError & {
  __typename?: 'PaymentSessionPendingUserError';
  /** The error code. */
  code?: Maybe<PaymentSessionPendingUserErrorCode>;
  /** The path to the input field that caused the error. */
  field?: Maybe<Array<Scalars['String']['output']>>;
  /** The error message. */
  message: Scalars['String']['output'];
};

/** Possible error codes that can be returned by `PaymentSessionPendingUserError`. */
export enum PaymentSessionPendingUserErrorCode {
  /** Pending expiry date can't be a time in the past. */
  ExpiredPendingExpiresAt = 'EXPIRED_PENDING_EXPIRES_AT',
  /** Payment session doesn't exist. */
  NotFound = 'NOT_FOUND',
  /** Pending expiry date has exceeded the default pending expiry limit. */
  OutOfRangePendingExpiresAt = 'OUT_OF_RANGE_PENDING_EXPIRES_AT',
  /** Payment session has already been resolved or rejected. */
  PendingInvalidState = 'PENDING_INVALID_STATE',
  /** Pending is not supported for credit card payment methods. */
  UnsupportedPaymentMethod = 'UNSUPPORTED_PAYMENT_METHOD'
}

/** Return type for `paymentSessionRedirect` mutation. */
export type PaymentSessionRedirectPayload = {
  __typename?: 'PaymentSessionRedirectPayload';
  /** The updated payment session. */
  paymentSession?: Maybe<PaymentSession>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<PaymentSessionRedirectUserError>;
};

/** An error that occurs during the execution of `PaymentSessionRedirect`. */
export type PaymentSessionRedirectUserError = DisplayableError & {
  __typename?: 'PaymentSessionRedirectUserError';
  /** The error code. */
  code?: Maybe<PaymentSessionRedirectUserErrorCode>;
  /** The path to the input field that caused the error. */
  field?: Maybe<Array<Scalars['String']['output']>>;
  /** The error message. */
  message: Scalars['String']['output'];
};

/** Possible error codes that can be returned by `PaymentSessionRedirectUserError`. */
export enum PaymentSessionRedirectUserErrorCode {
  /** Redirect request was received too late. The buyer has already been redirected by Shopify. */
  BuyerAlreadyRedirectedByShopify = 'BUYER_ALREADY_REDIRECTED_BY_SHOPIFY',
  /** The state transition is invalid. */
  InvalidStateTransition = 'INVALID_STATE_TRANSITION',
  /** Payment session not found. */
  PaymentSessionNotFound = 'PAYMENT_SESSION_NOT_FOUND',
  /** The credit card payments app extension is not configured properly to support redirection flow. */
  RedirectNotSupportedForCreditCard = 'REDIRECT_NOT_SUPPORTED_FOR_CREDIT_CARD',
  /** Redirect is not expected for offsite payments processing flow. */
  RedirectNotSupportedForOffsite = 'REDIRECT_NOT_SUPPORTED_FOR_OFFSITE',
  /** Redirect is not expected for onsite payments processing flow. */
  RedirectNotSupportedForOnsite = 'REDIRECT_NOT_SUPPORTED_FOR_ONSITE'
}

/** Return type for `paymentSessionReject` mutation. */
export type PaymentSessionRejectPayload = {
  __typename?: 'PaymentSessionRejectPayload';
  /** The updated payment session. */
  paymentSession?: Maybe<PaymentSession>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<UserError>;
};

/** The input fields for the reason why the payment was rejected. */
export type PaymentSessionRejectionReasonInput = {
  /** The reason code. */
  code: PaymentSessionStateRejectedReason;
  /** A custom, localized message for the merchant. */
  merchantMessage?: InputMaybe<Scalars['String']['input']>;
};

/** Return type for `paymentSessionResolve` mutation. */
export type PaymentSessionResolvePayload = {
  __typename?: 'PaymentSessionResolvePayload';
  /** The updated payment session. */
  paymentSession?: Maybe<PaymentSession>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<UserError>;
};

/** The state of a payment transaction. */
export type PaymentSessionState = {
  /** The payment state code. */
  code: PaymentSessionStateCode;
};

/** The possible values that can be used to describe the state of a payment transaction. */
export enum PaymentSessionStateCode {
  /** Confirming the payment. */
  Confirming = 'CONFIRMING',
  /** Payment pending. */
  Pending = 'PENDING',
  /** Redirecting buyer. */
  Redirecting = 'REDIRECTING',
  /** Payment rejected. */
  Rejected = 'REJECTED',
  /** Payment resolved. */
  Resolved = 'RESOLVED'
}

/** Additional details about a payment's confirming state. */
export type PaymentSessionStateConfirming = PaymentSessionState & {
  __typename?: 'PaymentSessionStateConfirming';
  /** The payment state code. */
  code: PaymentSessionStateCode;
};

/** Additional details about a payment's pending state. */
export type PaymentSessionStatePending = PaymentSessionState & {
  __typename?: 'PaymentSessionStatePending';
  /** The payment state code. */
  code: PaymentSessionStateCode;
  /** The reason the payment is pending. */
  reason?: Maybe<PaymentSessionStatePendingReason>;
};

/** Reasons the finalization of the payment is pending. */
export enum PaymentSessionStatePendingReason {
  /** Awaiting action from the buyer. */
  BuyerActionRequired = 'BUYER_ACTION_REQUIRED',
  /** Awaiting action from the merchant. */
  MerchantActionRequired = 'MERCHANT_ACTION_REQUIRED',
  /** Awaiting action from the network. */
  NetworkActionRequired = 'NETWORK_ACTION_REQUIRED',
  /** Awaiting action from the Partner. */
  PartnerActionRequired = 'PARTNER_ACTION_REQUIRED'
}

/** Additional details about a payment's redirecting state. */
export type PaymentSessionStateRedirecting = PaymentSessionState & {
  __typename?: 'PaymentSessionStateRedirecting';
  /** The payment state code. */
  code: PaymentSessionStateCode;
};

/** Additional details about a payment's rejected state. */
export type PaymentSessionStateRejected = PaymentSessionState & {
  __typename?: 'PaymentSessionStateRejected';
  /** The payment state code. */
  code: PaymentSessionStateCode;
  /** The custom, localized message for the merchant. */
  merchantMessage?: Maybe<Scalars['String']['output']>;
  /** The reason the payment is rejected. */
  reason: PaymentSessionStateRejectedReason;
};

/** The possible values that can be used to describe the reasons why a payment is rejected. */
export enum PaymentSessionStateRejectedReason {
  /** Credit card only. 3DS authentication failed. This Reason should be only used when the payments app does not want to proceed and confirm the payment after the 3DS authentication step. */
  AuthenticationFailed = 'AUTHENTICATION_FAILED',
  /** Credit card only. Credit card declined. */
  CardDeclined = 'CARD_DECLINED',
  /** The payments app called the 'Confirm' mutation and Shopify rejected the confirmation. */
  ConfirmationRejected = 'CONFIRMATION_REJECTED',
  /** Credit card only. Credit card expired. */
  ExpiredCard = 'EXPIRED_CARD',
  /** Credit card only. The provided address is valid but does not match the card's provider record. */
  IncorrectAddress = 'INCORRECT_ADDRESS',
  /** Credit card only. The provided CVC is valid but does not match the card's provider record. */
  IncorrectCvc = 'INCORRECT_CVC',
  /** Credit card only. The provided card number is valid but couldn't be processed. */
  IncorrectNumber = 'INCORRECT_NUMBER',
  /** Credit card only. The provided PIN is valid but does not match the card's provider record. */
  IncorrectPin = 'INCORRECT_PIN',
  /** Credit card only. The provided ZIP is valid but does not match the card's provider record. */
  IncorrectZip = 'INCORRECT_ZIP',
  /** Credit card only. The provided CVC does not match the expected format. */
  InvalidCvc = 'INVALID_CVC',
  /** Credit card only. The expiry date does not match the date format. */
  InvalidExpiryDate = 'INVALID_EXPIRY_DATE',
  /** Credit card only. The provided card number does not match the expected format. */
  InvalidNumber = 'INVALID_NUMBER',
  /** Payment processing failure. */
  ProcessingError = 'PROCESSING_ERROR',
  /** Rejected by risk control. */
  Risky = 'RISKY'
}

/** Additional details about a payment's resolved state. */
export type PaymentSessionStateResolved = PaymentSessionState & {
  __typename?: 'PaymentSessionStateResolved';
  /** The payment state code. */
  code: PaymentSessionStateCode;
};

/** The possible values that can be used to describe the state of a payment transaction. */
export type PaymentSessionStates = PaymentSessionStateConfirming | PaymentSessionStatePending | PaymentSessionStateRedirecting | PaymentSessionStateRejected | PaymentSessionStateResolved;

/** The 3D Secure authentication data from the partner. One and only one of authentication_data and partner_error must be present. */
export type PaymentSessionThreeDSecureAuthentication = {
  /** The 3D Secure authentication data from the partner. */
  authenticationData?: InputMaybe<PaymentSessionThreeDSecureAuthenticationData>;
  /** The error that occurred in the partner environment while requesting the 3D Secure authentication or processing its result. Cannot be present if authentication_data is present. */
  partnerError?: InputMaybe<PaymentSessionThreeDSecurePartnerError>;
};

/** The input fields for the 3D Secure authentication data from the partner. */
export type PaymentSessionThreeDSecureAuthenticationData = {
  /** The Authentication Flow. */
  authenticationFlow: PaymentSessionThreeDSecureAuthenticationFlow;
  /** Indicates if the liability for chargebacks has shifted away from the merchant. */
  chargebackLiability: PaymentSessionThreeDSecureChargebackLiability;
  /** The 3D Secure transaction id. */
  dsTransactionId?: InputMaybe<Scalars['String']['input']>;
  /** The Transaction Status. */
  transStatus: PaymentSessionThreeDSecureTransStatus;
  /** The Transaction Status Reason, as documented by the EMVCo 2.x specification. Must match the "A(0[1-9]|1[0-9]|2[0-6]|[89][0-9])z" regular expression. Provides information on why the trans_status field has the specified value. Required if trans_status is one of [N, U, R]. */
  transStatusReason?: InputMaybe<Scalars['String']['input']>;
  /** The 3D Secure version. */
  version: PaymentSessionThreeDSecureVersion;
};

/** The 3D Secure Authentication Flow. */
export enum PaymentSessionThreeDSecureAuthenticationFlow {
  /** The Challenge Flow does requires some Cardholder interaction. */
  Challenge = 'CHALLENGE',
  /** The Frictionless Flow does not require a Cardholder interaction. */
  Frictionless = 'FRICTIONLESS',
  /** Use this value for 3DS version 1 or when an error makes it impossible to establish what the flow is. */
  Unknown = 'UNKNOWN'
}

/** Indicates if the liability for chargebacks has shifted away from the merchant. */
export enum PaymentSessionThreeDSecureChargebackLiability {
  /** The merchant remains liable for chargebacks. This can be the case when a Strong Customer Authentication exemption is requested by the payments app on behalf of the merchant, for instance. */
  Merchant = 'MERCHANT',
  /** The merchant may not remain liable for chargebacks. This can be the case when no Strong Customer Authentication exemption is requested by the payments app on behalf of the merchant and when the authentication is successful, for instance. Cannot be used if trans_status is "N" or "R". */
  Unknown = 'UNKNOWN'
}

/** The error that occurred in the partner environment while requesting the 3D Secure authentication or processing its result. */
export enum PaymentSessionThreeDSecurePartnerError {
  /** Error while requesting the 3D Secure authentication or processing its result. */
  ProcessingError = 'PROCESSING_ERROR'
}

/** Indicates whether a transaction qualifies as an authenticated transaction. For 3DS version 2, the EMV 3D Secure transaction status from the last of the Authentication Response (ARes) or Results Request (RReq) messages. For 3DS version 1, the 3D Secure PARes Status. */
export enum PaymentSessionThreeDSecureTransStatus {
  /** Attempts Processing Performed; Not Authenticated/Verified, but a proof of attempted authentication/verification is provided. */
  A = 'A',
  /** I = Informational Only; 3DS Requestor challenge preference acknowledged. */
  I = 'I',
  /** Not Authenticated /Account Not Verified; Transaction denied. */
  N = 'N',
  /** Authentication/ Account Verification Rejected; Issuer is rejecting authentication/verification and request that authorisation not be attempted. */
  R = 'R',
  /** Authentication/ Account Verification Could Not Be Performed; Technical or other problem. */
  U = 'U',
  /** Authentication Verification Successful. */
  Y = 'Y'
}

/** The 3D Secure version. */
export enum PaymentSessionThreeDSecureVersion {
  /** Unknown version. */
  Unknown = 'UNKNOWN',
  /** Version 1.0. */
  V1_0 = 'V1_0',
  /** Version 2.1. */
  V2_1 = 'V2_1',
  /** Version 2.2. */
  V2_2 = 'V2_2',
  /** Version 2.3. */
  V2_3 = 'V2_3'
}

/**
 * The [production configuration](https://shopify.dev/apps/payments/onboarding-a-merchant-payments-apps)
 * of the payments app.
 *
 */
export type PaymentsAppConfiguration = {
  __typename?: 'PaymentsAppConfiguration';
  /** A username or identifier associated with the account that the merchant has used with the partner. It displays in the Payments section in the Shopify admin. The `externalHandle` enables the merchant to identify the connected payment provider account. */
  externalHandle?: Maybe<Scalars['String']['output']>;
  /** Whether the provider is ready to process the merchant's payments. */
  ready: Scalars['Boolean']['output'];
};

/** Return type for `paymentsAppConfigure` mutation. */
export type PaymentsAppConfigurePayload = {
  __typename?: 'PaymentsAppConfigurePayload';
  /** The production configuration of the payments app. */
  paymentsAppConfiguration?: Maybe<PaymentsAppConfiguration>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<UserError>;
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRoot = {
  __typename?: 'QueryRoot';
  /** The list of public Payments Apps API versions, including supported, release candidate and unstable versions. */
  publicApiVersions: Array<ApiVersion>;
};

/** A unique refund transaction. */
export type RefundSession = {
  __typename?: 'RefundSession';
  /** A globally-unique ID. */
  id: Scalars['ID']['output'];
  /** Details about the refund state. */
  state: RefundSessionStates;
};

/** Return type for `refundSessionReject` mutation. */
export type RefundSessionRejectPayload = {
  __typename?: 'RefundSessionRejectPayload';
  /** The updated refund session. */
  refundSession?: Maybe<RefundSession>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<RefundSessionRejectUserError>;
};

/** An error that occurs during the execution of `RefundSessionReject`. */
export type RefundSessionRejectUserError = DisplayableError & {
  __typename?: 'RefundSessionRejectUserError';
  /** The error code. */
  code?: Maybe<RefundSessionRejectUserErrorCode>;
  /** The path to the input field that caused the error. */
  field?: Maybe<Array<Scalars['String']['output']>>;
  /** The error message. */
  message: Scalars['String']['output'];
};

/** Possible error codes that can be returned by `RefundSessionRejectUserError`. */
export enum RefundSessionRejectUserErrorCode {
  /** Refund session has already been resolved or has already been rejected with a different reason. */
  RefundSessionInvalidState = 'REFUND_SESSION_INVALID_STATE',
  /** Refund session not found. */
  RefundSessionNotFound = 'REFUND_SESSION_NOT_FOUND'
}

/** The input fields for the reason why the refund was rejected. */
export type RefundSessionRejectionReasonInput = {
  /** The reason code. */
  code: RefundSessionStatusReasonRejectionCode;
  /** A custom, localized message for the merchant. */
  merchantMessage?: InputMaybe<Scalars['String']['input']>;
};

/** Return type for `refundSessionResolve` mutation. */
export type RefundSessionResolvePayload = {
  __typename?: 'RefundSessionResolvePayload';
  /** The updated refund session. */
  refundSession?: Maybe<RefundSession>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<RefundSessionResolveUserError>;
};

/** An error that occurs during the execution of `RefundSessionResolve`. */
export type RefundSessionResolveUserError = DisplayableError & {
  __typename?: 'RefundSessionResolveUserError';
  /** The error code. */
  code?: Maybe<RefundSessionResolveUserErrorCode>;
  /** The path to the input field that caused the error. */
  field?: Maybe<Array<Scalars['String']['output']>>;
  /** The error message. */
  message: Scalars['String']['output'];
};

/** Possible error codes that can be returned by `RefundSessionResolveUserError`. */
export enum RefundSessionResolveUserErrorCode {
  /** Refund session has already been rejected. */
  RefundSessionInvalidState = 'REFUND_SESSION_INVALID_STATE',
  /** Refund session not found. */
  RefundSessionNotFound = 'REFUND_SESSION_NOT_FOUND'
}

/** The State of a finalized refund transaction. */
export type RefundSessionState = {
  /** The refund state code. */
  code: RefundSessionStateCode;
};

/** The possible values that can be used to describe the state of a finalized refund transaction. */
export enum RefundSessionStateCode {
  /** Refund rejected. */
  Rejected = 'REJECTED',
  /** Refund resolved. */
  Resolved = 'RESOLVED'
}

/** Additional details about a refund's rejected state. */
export type RefundSessionStateRejected = RefundSessionState & {
  __typename?: 'RefundSessionStateRejected';
  /** The refund state code. */
  code: RefundSessionStateCode;
  /** The custom, localized message for the merchant. */
  merchantMessage?: Maybe<Scalars['String']['output']>;
  /** The reason the refund is rejected. */
  reason: RefundSessionStateRejectedReason;
};

/** The possible values that can be used to describe the reason why the refund is rejected. */
export enum RefundSessionStateRejectedReason {
  /** Refund processing failure. */
  ProcessingError = 'PROCESSING_ERROR'
}

/** Additional details about a refund's resolved state. */
export type RefundSessionStateResolved = RefundSessionState & {
  __typename?: 'RefundSessionStateResolved';
  /** The refund state code. */
  code: RefundSessionStateCode;
};

/** The possible values that can be used to describe the state of a finalized refund transaction. */
export type RefundSessionStates = RefundSessionStateRejected | RefundSessionStateResolved;

/**
 * The possible values that can be used to describe
 * the reason why a refund transaction was rejected.
 *
 */
export enum RefundSessionStatusReasonRejectionCode {
  /** Refund processing failure. */
  ProcessingError = 'PROCESSING_ERROR'
}

/** Represents an error in the input of a mutation. */
export type UserError = DisplayableError & {
  __typename?: 'UserError';
  /** The path to the input field that caused the error. */
  field?: Maybe<Array<Scalars['String']['output']>>;
  /** The error message. */
  message: Scalars['String']['output'];
};

/** A unique void transaction. */
export type VoidSession = {
  __typename?: 'VoidSession';
  /** A globally-unique ID. */
  id: Scalars['ID']['output'];
  /** Details about the void state. */
  state: VoidSessionStates;
};

/** Return type for `voidSessionReject` mutation. */
export type VoidSessionRejectPayload = {
  __typename?: 'VoidSessionRejectPayload';
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<VoidSessionRejectUserError>;
  /** The updated void session. */
  voidSession?: Maybe<VoidSession>;
};

/** An error that occurs during the execution of `VoidSessionReject`. */
export type VoidSessionRejectUserError = DisplayableError & {
  __typename?: 'VoidSessionRejectUserError';
  /** The error code. */
  code?: Maybe<VoidSessionRejectUserErrorCode>;
  /** The path to the input field that caused the error. */
  field?: Maybe<Array<Scalars['String']['output']>>;
  /** The error message. */
  message: Scalars['String']['output'];
};

/** Possible error codes that can be returned by `VoidSessionRejectUserError`. */
export enum VoidSessionRejectUserErrorCode {
  /** Void session has already been resolved or has already been rejected with a different reason. */
  VoidSessionInvalidState = 'VOID_SESSION_INVALID_STATE',
  /** Void session not found. */
  VoidSessionNotFound = 'VOID_SESSION_NOT_FOUND'
}

/** The input fields for the reason why the void transaction was rejected. */
export type VoidSessionRejectionReasonInput = {
  /** The reason code. */
  code: VoidSessionStatusReasonRejectionCode;
  /** A custom, localized message for the merchant. */
  merchantMessage?: InputMaybe<Scalars['String']['input']>;
};

/** Return type for `voidSessionResolve` mutation. */
export type VoidSessionResolvePayload = {
  __typename?: 'VoidSessionResolvePayload';
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<VoidSessionResolveUserError>;
  /** The updated void session. */
  voidSession?: Maybe<VoidSession>;
};

/** An error that occurs during the execution of `VoidSessionResolve`. */
export type VoidSessionResolveUserError = DisplayableError & {
  __typename?: 'VoidSessionResolveUserError';
  /** The error code. */
  code?: Maybe<VoidSessionResolveUserErrorCode>;
  /** The path to the input field that caused the error. */
  field?: Maybe<Array<Scalars['String']['output']>>;
  /** The error message. */
  message: Scalars['String']['output'];
};

/** Possible error codes that can be returned by `VoidSessionResolveUserError`. */
export enum VoidSessionResolveUserErrorCode {
  /** Void session has already been rejected. */
  VoidSessionInvalidState = 'VOID_SESSION_INVALID_STATE',
  /** Void session not found. */
  VoidSessionNotFound = 'VOID_SESSION_NOT_FOUND'
}

/** The state of a finalized void transaction. */
export type VoidSessionState = {
  /** The void state code. */
  code: VoidSessionStateCode;
};

/** The possible values that can be used to describe the state of a finalized void transaction. */
export enum VoidSessionStateCode {
  /** Void rejected. */
  Rejected = 'REJECTED',
  /** Void resolved. */
  Resolved = 'RESOLVED'
}

/** Additional details about a void's rejected state. */
export type VoidSessionStateRejected = VoidSessionState & {
  __typename?: 'VoidSessionStateRejected';
  /** The void state code. */
  code: VoidSessionStateCode;
  /** The custom, localized message for the merchant. */
  merchantMessage?: Maybe<Scalars['String']['output']>;
  /** The reason the void is rejected. */
  reason: VoidSessionStateRejectedReason;
};

/**
 * The possible values that can be used to describe
 * the reason why a void transaction is rejected.
 *
 */
export enum VoidSessionStateRejectedReason {
  /** Void processing failure. */
  ProcessingError = 'PROCESSING_ERROR'
}

/** Additional details about a void's resolved state. */
export type VoidSessionStateResolved = VoidSessionState & {
  __typename?: 'VoidSessionStateResolved';
  /** The void state code. */
  code: VoidSessionStateCode;
};

/** The possible values that can be used to describe the state of a finalized void transaction. */
export type VoidSessionStates = VoidSessionStateRejected | VoidSessionStateResolved;

/** The possible values that can be used to describe the reason why a void transaction is rejected. */
export enum VoidSessionStatusReasonRejectionCode {
  /** Void processing failure. */
  ProcessingError = 'PROCESSING_ERROR'
}
