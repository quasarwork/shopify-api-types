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
  /**
   * The capture status.
   * @deprecated Deprecated in API Version 2022-04. Use `state` instead.
   */
  status: CaptureSessionStatus;
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

/** The status of a finalized capture transaction. */
export type CaptureSessionStatus = {
  __typename?: 'CaptureSessionStatus';
  /** The capture status code. */
  code: CaptureSessionStatusCode;
  /** The capture status reason (if applicable). */
  reason?: Maybe<CaptureSessionStatusReason>;
};

/** The possible values that can be used to describe the status of a capture transaction. */
export enum CaptureSessionStatusCode {
  /** Capture rejected. */
  Rejected = 'REJECTED',
  /** Capture resolved. */
  Resolved = 'RESOLVED'
}

/** The reason why the capture was rejected. */
export type CaptureSessionStatusReason = {
  __typename?: 'CaptureSessionStatusReason';
  /** The reason code. */
  code: CaptureSessionStatusReasonRejectionCode;
  /** The custom, localized message for the merchant. */
  merchantMessage?: Maybe<Scalars['String']['output']>;
};

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
export type MutationRootPaymentSessionPendingArgs = {
  id: Scalars['ID']['input'];
  pendingExpiresAt: Scalars['DateTime']['input'];
  reason: PaymentSessionStatePendingReason;
};


/** The schema's entry point for all mutation operations. */
export type MutationRootPaymentSessionRejectArgs = {
  id: Scalars['ID']['input'];
  reason: PaymentSessionRejectionReasonInput;
};


/** The schema's entry point for all mutation operations. */
export type MutationRootPaymentSessionResolveArgs = {
  authorizationExpiresAt?: InputMaybe<Scalars['DateTime']['input']>;
  id: Scalars['ID']['input'];
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
  /**
   * The payment status. For pending status, use `state`.
   * @deprecated Deprecated in API Version 2022-04. Use `state` instead.
   */
  status: PaymentSessionStatus;
};

/** The payload required to redirect the customer to the shop after payment is finalized. */
export type PaymentSessionActionsRedirect = {
  __typename?: 'PaymentSessionActionsRedirect';
  /** The URL of the checkout that's used to redirect the customer. */
  redirectUrl: Scalars['URL']['output'];
};

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
  PendingInvalidState = 'PENDING_INVALID_STATE'
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
  code: PaymentSessionStatusReasonRejectionCode;
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
  /** Payment pending. */
  Pending = 'PENDING',
  /** Payment rejected. */
  Rejected = 'REJECTED',
  /** Payment resolved. */
  Resolved = 'RESOLVED'
}

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
  /** Awaiting action from the network. */
  NetworkActionRequired = 'NETWORK_ACTION_REQUIRED',
  /** Awaiting action from the Partner. */
  PartnerActionRequired = 'PARTNER_ACTION_REQUIRED'
}

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
export type PaymentSessionStates = PaymentSessionStatePending | PaymentSessionStateRejected | PaymentSessionStateResolved;

/** The status of a payment transaction. */
export type PaymentSessionStatus = {
  __typename?: 'PaymentSessionStatus';
  /** The payment status code. */
  code: PaymentSessionStatusCode;
  /** The payment status reason (if applicable). */
  reason?: Maybe<PaymentSessionStatusReason>;
};

/** The possible values that can be used to describe the status of a payment. */
export enum PaymentSessionStatusCode {
  /** Payment pending. */
  Pending = 'PENDING',
  /** Payment rejected. */
  Rejected = 'REJECTED',
  /** Payment resolved. */
  Resolved = 'RESOLVED'
}

/** The reason why the payment was rejected. */
export type PaymentSessionStatusReason = {
  __typename?: 'PaymentSessionStatusReason';
  /** The reason code. */
  code: PaymentSessionStatusReasonRejectionCode;
  /** The custom, localized message for the merchant. */
  merchantMessage?: Maybe<Scalars['String']['output']>;
};

/** The possible values that can be used to describe why a payment transaction was rejected. */
export enum PaymentSessionStatusReasonRejectionCode {
  /** The payment instrument was declined by the payment processor. */
  PaymentInstrumentDeclined = 'PAYMENT_INSTRUMENT_DECLINED',
  /** Payment processing failure. */
  ProcessingError = 'PROCESSING_ERROR',
  /** Rejected by risk control. */
  Risky = 'RISKY'
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
  /**
   * The refund status.
   * @deprecated Deprecated in API Version 2022-04. Use `state` instead.
   */
  status: RefundSessionStatus;
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

/** The status of a finalized refund transaction. */
export type RefundSessionStatus = {
  __typename?: 'RefundSessionStatus';
  /** The refund status code. */
  code: RefundSessionStatusCode;
  /** The refund status reason (if applicable). */
  reason?: Maybe<RefundSessionStatusReason>;
};

/** The possible values that can be used to describe the status of a refund. */
export enum RefundSessionStatusCode {
  /** Refund rejected. */
  Rejected = 'REJECTED',
  /** Refund resolved. */
  Resolved = 'RESOLVED'
}

/** The reason why the refund was rejected. */
export type RefundSessionStatusReason = {
  __typename?: 'RefundSessionStatusReason';
  /** The reason code. */
  code: RefundSessionStatusReasonRejectionCode;
  /** The custom, localized message for the merchant. */
  merchantMessage?: Maybe<Scalars['String']['output']>;
};

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
  /**
   * The void status.
   * @deprecated Deprecated in API Version 2022-04. Use `state` instead.
   */
  status: VoidSessionStatus;
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

/** The status of a finalized void transaction. */
export type VoidSessionStatus = {
  __typename?: 'VoidSessionStatus';
  /** The void status code. */
  code: VoidSessionStatusCode;
  /** The void status reason (if applicable). */
  reason?: Maybe<VoidSessionStatusReason>;
};

/** The possible values that can be used to describe the status of a void transaction. */
export enum VoidSessionStatusCode {
  /** Void rejected. */
  Rejected = 'REJECTED',
  /** Void resolved. */
  Resolved = 'RESOLVED'
}

/** The reason why the void transaction was rejected. */
export type VoidSessionStatusReason = {
  __typename?: 'VoidSessionStatusReason';
  /** The reason code. */
  code: VoidSessionStatusReasonRejectionCode;
  /** The custom, localized message for the merchant. */
  merchantMessage?: Maybe<Scalars['String']['output']>;
};

/** The possible values that can be used to describe the reason why a void transaction is rejected. */
export enum VoidSessionStatusReasonRejectionCode {
  /** Void processing failure. */
  ProcessingError = 'PROCESSING_ERROR'
}
