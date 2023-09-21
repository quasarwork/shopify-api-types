"use strict";
exports.__esModule = true;
exports.VoidSessionStatusReasonRejectionCode = exports.VoidSessionStateRejectedReason = exports.VoidSessionStateCode = exports.VoidSessionResolveUserErrorCode = exports.VoidSessionRejectUserErrorCode = exports.RefundSessionStatusReasonRejectionCode = exports.RefundSessionStateRejectedReason = exports.RefundSessionStateCode = exports.RefundSessionResolveUserErrorCode = exports.RefundSessionRejectUserErrorCode = exports.PaymentSessionThreeDSecureVersion = exports.PaymentSessionThreeDSecureTransStatus = exports.PaymentSessionThreeDSecurePartnerError = exports.PaymentSessionThreeDSecureAuthenticationFlow = exports.PaymentSessionStateRejectedReason = exports.PaymentSessionStatePendingReason = exports.PaymentSessionStateCode = exports.PaymentSessionRedirectUserErrorCode = exports.PaymentSessionPendingUserErrorCode = exports.PaymentSessionNextActionAction = exports.PaymentSessionConfirmUserErrorCode = exports.CaptureSessionStatusReasonRejectionCode = exports.CaptureSessionStateRejectedReason = exports.CaptureSessionStateCode = exports.CaptureSessionResolveUserErrorCode = exports.CaptureSessionRejectUserErrorCode = void 0;
/** Possible error codes that can be returned by `CaptureSessionRejectUserError`. */
var CaptureSessionRejectUserErrorCode;
(function (CaptureSessionRejectUserErrorCode) {
    /** Capture session has already been resolved or has already been rejected with a different reason. */
    CaptureSessionRejectUserErrorCode["CaptureSessionInvalidState"] = "CAPTURE_SESSION_INVALID_STATE";
    /** Capture session not found. */
    CaptureSessionRejectUserErrorCode["CaptureSessionNotFound"] = "CAPTURE_SESSION_NOT_FOUND";
})(CaptureSessionRejectUserErrorCode = exports.CaptureSessionRejectUserErrorCode || (exports.CaptureSessionRejectUserErrorCode = {}));
/** Possible error codes that can be returned by `CaptureSessionResolveUserError`. */
var CaptureSessionResolveUserErrorCode;
(function (CaptureSessionResolveUserErrorCode) {
    /** Capture session has already been rejected. */
    CaptureSessionResolveUserErrorCode["CaptureSessionInvalidState"] = "CAPTURE_SESSION_INVALID_STATE";
    /** Capture session not found. */
    CaptureSessionResolveUserErrorCode["CaptureSessionNotFound"] = "CAPTURE_SESSION_NOT_FOUND";
})(CaptureSessionResolveUserErrorCode = exports.CaptureSessionResolveUserErrorCode || (exports.CaptureSessionResolveUserErrorCode = {}));
/**
 * The possible values that can be used to describe
 * the state of a finalized capture transaction.
 *
 */
var CaptureSessionStateCode;
(function (CaptureSessionStateCode) {
    /** Capture rejected. */
    CaptureSessionStateCode["Rejected"] = "REJECTED";
    /** Capture resolved. */
    CaptureSessionStateCode["Resolved"] = "RESOLVED";
})(CaptureSessionStateCode = exports.CaptureSessionStateCode || (exports.CaptureSessionStateCode = {}));
/**
 * The possible values that can be used to describe
 * the reason why the capture transaction is rejected.
 *
 */
var CaptureSessionStateRejectedReason;
(function (CaptureSessionStateRejectedReason) {
    /** Authorization expired. */
    CaptureSessionStateRejectedReason["AuthorizationExpired"] = "AUTHORIZATION_EXPIRED";
    /** Capture processing failure. */
    CaptureSessionStateRejectedReason["ProcessingError"] = "PROCESSING_ERROR";
})(CaptureSessionStateRejectedReason = exports.CaptureSessionStateRejectedReason || (exports.CaptureSessionStateRejectedReason = {}));
/**
 * The possible values that can be used to describe
 * the reason why a capture transaction is rejected.
 *
 */
var CaptureSessionStatusReasonRejectionCode;
(function (CaptureSessionStatusReasonRejectionCode) {
    /** Authorization expired. */
    CaptureSessionStatusReasonRejectionCode["AuthorizationExpired"] = "AUTHORIZATION_EXPIRED";
    /** Capture processing failure. */
    CaptureSessionStatusReasonRejectionCode["ProcessingError"] = "PROCESSING_ERROR";
})(CaptureSessionStatusReasonRejectionCode = exports.CaptureSessionStatusReasonRejectionCode || (exports.CaptureSessionStatusReasonRejectionCode = {}));
/** Possible error codes that can be returned by `PaymentSessionConfirmUserError`. */
var PaymentSessionConfirmUserErrorCode;
(function (PaymentSessionConfirmUserErrorCode) {
    /** The state transition is invalid. */
    PaymentSessionConfirmUserErrorCode["InvalidStateTransition"] = "INVALID_STATE_TRANSITION";
    /** Payment session not found. */
    PaymentSessionConfirmUserErrorCode["PaymentSessionNotFound"] = "PAYMENT_SESSION_NOT_FOUND";
})(PaymentSessionConfirmUserErrorCode = exports.PaymentSessionConfirmUserErrorCode || (exports.PaymentSessionConfirmUserErrorCode = {}));
/**
 * The possible values that can be used to describe the next
 * action that a Partner should do after a payment is finalized.
 *
 */
var PaymentSessionNextActionAction;
(function (PaymentSessionNextActionAction) {
    /** Redirect the customer to the next checkout step. */
    PaymentSessionNextActionAction["Redirect"] = "REDIRECT";
})(PaymentSessionNextActionAction = exports.PaymentSessionNextActionAction || (exports.PaymentSessionNextActionAction = {}));
/** Possible error codes that can be returned by `PaymentSessionPendingUserError`. */
var PaymentSessionPendingUserErrorCode;
(function (PaymentSessionPendingUserErrorCode) {
    /** Pending expiry date can't be a time in the past. */
    PaymentSessionPendingUserErrorCode["ExpiredPendingExpiresAt"] = "EXPIRED_PENDING_EXPIRES_AT";
    /** Payment session doesn't exist. */
    PaymentSessionPendingUserErrorCode["NotFound"] = "NOT_FOUND";
    /** Pending expiry date has exceeded the default pending expiry limit. */
    PaymentSessionPendingUserErrorCode["OutOfRangePendingExpiresAt"] = "OUT_OF_RANGE_PENDING_EXPIRES_AT";
    /** Payment session has already been resolved or rejected. */
    PaymentSessionPendingUserErrorCode["PendingInvalidState"] = "PENDING_INVALID_STATE";
    /** Pending is not supported for credit card payment methods. */
    PaymentSessionPendingUserErrorCode["UnsupportedPaymentMethod"] = "UNSUPPORTED_PAYMENT_METHOD";
})(PaymentSessionPendingUserErrorCode = exports.PaymentSessionPendingUserErrorCode || (exports.PaymentSessionPendingUserErrorCode = {}));
/** Possible error codes that can be returned by `PaymentSessionRedirectUserError`. */
var PaymentSessionRedirectUserErrorCode;
(function (PaymentSessionRedirectUserErrorCode) {
    /** Redirect request was received too late. The buyer has already been redirected by Shopify. */
    PaymentSessionRedirectUserErrorCode["BuyerAlreadyRedirectedByShopify"] = "BUYER_ALREADY_REDIRECTED_BY_SHOPIFY";
    /** The state transition is invalid. */
    PaymentSessionRedirectUserErrorCode["InvalidStateTransition"] = "INVALID_STATE_TRANSITION";
    /** Payment session not found. */
    PaymentSessionRedirectUserErrorCode["PaymentSessionNotFound"] = "PAYMENT_SESSION_NOT_FOUND";
    /** Redirect is not expected for offsite payments processing flow. */
    PaymentSessionRedirectUserErrorCode["RedirectNotSupportedForOffsite"] = "REDIRECT_NOT_SUPPORTED_FOR_OFFSITE";
})(PaymentSessionRedirectUserErrorCode = exports.PaymentSessionRedirectUserErrorCode || (exports.PaymentSessionRedirectUserErrorCode = {}));
/** The possible values that can be used to describe the state of a payment transaction. */
var PaymentSessionStateCode;
(function (PaymentSessionStateCode) {
    /** Confirming the payment. */
    PaymentSessionStateCode["Confirming"] = "CONFIRMING";
    /** Payment pending. */
    PaymentSessionStateCode["Pending"] = "PENDING";
    /** Redirecting buyer. */
    PaymentSessionStateCode["Redirecting"] = "REDIRECTING";
    /** Payment rejected. */
    PaymentSessionStateCode["Rejected"] = "REJECTED";
    /** Payment resolved. */
    PaymentSessionStateCode["Resolved"] = "RESOLVED";
})(PaymentSessionStateCode = exports.PaymentSessionStateCode || (exports.PaymentSessionStateCode = {}));
/** Reasons the finalization of the payment is pending. */
var PaymentSessionStatePendingReason;
(function (PaymentSessionStatePendingReason) {
    /** Awaiting action from the buyer. */
    PaymentSessionStatePendingReason["BuyerActionRequired"] = "BUYER_ACTION_REQUIRED";
    /** Awaiting action from the network. */
    PaymentSessionStatePendingReason["NetworkActionRequired"] = "NETWORK_ACTION_REQUIRED";
    /** Awaiting action from the Partner. */
    PaymentSessionStatePendingReason["PartnerActionRequired"] = "PARTNER_ACTION_REQUIRED";
})(PaymentSessionStatePendingReason = exports.PaymentSessionStatePendingReason || (exports.PaymentSessionStatePendingReason = {}));
/** The possible values that can be used to describe the reasons why a payment is rejected. */
var PaymentSessionStateRejectedReason;
(function (PaymentSessionStateRejectedReason) {
    /** Credit card only. 3DS authentication failed. This Reason should be only used when the payments app does not want to proceed and confirm the payment after the 3DS authentication step. */
    PaymentSessionStateRejectedReason["AuthenticationFailed"] = "AUTHENTICATION_FAILED";
    /** Credit card only. Credit card declined. */
    PaymentSessionStateRejectedReason["CardDeclined"] = "CARD_DECLINED";
    /** The payments app called the 'Confirm' mutation and Shopify rejected the confirmation. */
    PaymentSessionStateRejectedReason["ConfirmationRejected"] = "CONFIRMATION_REJECTED";
    /** Credit card only. Credit card expired. */
    PaymentSessionStateRejectedReason["ExpiredCard"] = "EXPIRED_CARD";
    /** Credit card only. The provided address is valid but does not match the card's provider record. */
    PaymentSessionStateRejectedReason["IncorrectAddress"] = "INCORRECT_ADDRESS";
    /** Credit card only. The provided CVC is valid but does not match the card's provider record. */
    PaymentSessionStateRejectedReason["IncorrectCvc"] = "INCORRECT_CVC";
    /** Credit card only. The provided card number is valid but couldn't be processed. */
    PaymentSessionStateRejectedReason["IncorrectNumber"] = "INCORRECT_NUMBER";
    /** Credit card only. The provided PIN is valid but does not match the card's provider record. */
    PaymentSessionStateRejectedReason["IncorrectPin"] = "INCORRECT_PIN";
    /** Credit card only. The provided ZIP is valid but does not match the card's provider record. */
    PaymentSessionStateRejectedReason["IncorrectZip"] = "INCORRECT_ZIP";
    /** Credit card only. The provided CVC does not match the expected format. */
    PaymentSessionStateRejectedReason["InvalidCvc"] = "INVALID_CVC";
    /** Credit card only. The expiry date does not match the date format. */
    PaymentSessionStateRejectedReason["InvalidExpiryDate"] = "INVALID_EXPIRY_DATE";
    /** Credit card only. The provided card number does not match the expected format. */
    PaymentSessionStateRejectedReason["InvalidNumber"] = "INVALID_NUMBER";
    /** Payment processing failure. */
    PaymentSessionStateRejectedReason["ProcessingError"] = "PROCESSING_ERROR";
    /** Rejected by risk control. */
    PaymentSessionStateRejectedReason["Risky"] = "RISKY";
})(PaymentSessionStateRejectedReason = exports.PaymentSessionStateRejectedReason || (exports.PaymentSessionStateRejectedReason = {}));
/** The 3D Secure Authentication Flow. */
var PaymentSessionThreeDSecureAuthenticationFlow;
(function (PaymentSessionThreeDSecureAuthenticationFlow) {
    /** The Challenge Flow does requires some Cardholder interaction. */
    PaymentSessionThreeDSecureAuthenticationFlow["Challenge"] = "CHALLENGE";
    /** The Frictionless Flow does not require a Cardholder interaction. */
    PaymentSessionThreeDSecureAuthenticationFlow["Frictionless"] = "FRICTIONLESS";
    /** Use this value for 3DS version 1 or when an error makes it impossible to establish what the flow is. */
    PaymentSessionThreeDSecureAuthenticationFlow["Unknown"] = "UNKNOWN";
})(PaymentSessionThreeDSecureAuthenticationFlow = exports.PaymentSessionThreeDSecureAuthenticationFlow || (exports.PaymentSessionThreeDSecureAuthenticationFlow = {}));
/** The error that occurred in the partner environment while requesting the 3D Secure authentication or processing its result. */
var PaymentSessionThreeDSecurePartnerError;
(function (PaymentSessionThreeDSecurePartnerError) {
    /** Error while requesting the 3D Secure authentication or processing its result. */
    PaymentSessionThreeDSecurePartnerError["ProcessingError"] = "PROCESSING_ERROR";
})(PaymentSessionThreeDSecurePartnerError = exports.PaymentSessionThreeDSecurePartnerError || (exports.PaymentSessionThreeDSecurePartnerError = {}));
/** Indicates whether a transaction qualifies as an authenticated transaction. For 3DS version 2, the EMV 3D Secure transaction status from the last of the Authentication Response (ARes) or Results Request (RReq) messages. For 3DS version 1, the 3D Secure PARes Status. */
var PaymentSessionThreeDSecureTransStatus;
(function (PaymentSessionThreeDSecureTransStatus) {
    /** Attempts Processing Performed; Not Authenticated/Verified, but a proof of attempted authentication/verification is provided. */
    PaymentSessionThreeDSecureTransStatus["A"] = "A";
    /** I = Informational Only; 3DS Requestor challenge preference acknowledged. */
    PaymentSessionThreeDSecureTransStatus["I"] = "I";
    /** Not Authenticated /Account Not Verified; Transaction denied. */
    PaymentSessionThreeDSecureTransStatus["N"] = "N";
    /** Authentication/ Account Verification Rejected; Issuer is rejecting authentication/verification and request that authorisation not be attempted. */
    PaymentSessionThreeDSecureTransStatus["R"] = "R";
    /** Authentication/ Account Verification Could Not Be Performed; Technical or other problem. */
    PaymentSessionThreeDSecureTransStatus["U"] = "U";
    /** Authentication Verification Successful. */
    PaymentSessionThreeDSecureTransStatus["Y"] = "Y";
})(PaymentSessionThreeDSecureTransStatus = exports.PaymentSessionThreeDSecureTransStatus || (exports.PaymentSessionThreeDSecureTransStatus = {}));
/** The 3D Secure version. */
var PaymentSessionThreeDSecureVersion;
(function (PaymentSessionThreeDSecureVersion) {
    /** Unknown version. */
    PaymentSessionThreeDSecureVersion["Unknown"] = "UNKNOWN";
    /** Version 1.0. */
    PaymentSessionThreeDSecureVersion["V1_0"] = "V1_0";
    /** Version 2.1. */
    PaymentSessionThreeDSecureVersion["V2_1"] = "V2_1";
    /** Version 2.2. */
    PaymentSessionThreeDSecureVersion["V2_2"] = "V2_2";
    /** Version 2.3. */
    PaymentSessionThreeDSecureVersion["V2_3"] = "V2_3";
})(PaymentSessionThreeDSecureVersion = exports.PaymentSessionThreeDSecureVersion || (exports.PaymentSessionThreeDSecureVersion = {}));
/** Possible error codes that can be returned by `RefundSessionRejectUserError`. */
var RefundSessionRejectUserErrorCode;
(function (RefundSessionRejectUserErrorCode) {
    /** Refund session has already been resolved or has already been rejected with a different reason. */
    RefundSessionRejectUserErrorCode["RefundSessionInvalidState"] = "REFUND_SESSION_INVALID_STATE";
    /** Refund session not found. */
    RefundSessionRejectUserErrorCode["RefundSessionNotFound"] = "REFUND_SESSION_NOT_FOUND";
})(RefundSessionRejectUserErrorCode = exports.RefundSessionRejectUserErrorCode || (exports.RefundSessionRejectUserErrorCode = {}));
/** Possible error codes that can be returned by `RefundSessionResolveUserError`. */
var RefundSessionResolveUserErrorCode;
(function (RefundSessionResolveUserErrorCode) {
    /** Refund session has already been rejected. */
    RefundSessionResolveUserErrorCode["RefundSessionInvalidState"] = "REFUND_SESSION_INVALID_STATE";
    /** Refund session not found. */
    RefundSessionResolveUserErrorCode["RefundSessionNotFound"] = "REFUND_SESSION_NOT_FOUND";
})(RefundSessionResolveUserErrorCode = exports.RefundSessionResolveUserErrorCode || (exports.RefundSessionResolveUserErrorCode = {}));
/** The possible values that can be used to describe the state of a finalized refund transaction. */
var RefundSessionStateCode;
(function (RefundSessionStateCode) {
    /** Refund rejected. */
    RefundSessionStateCode["Rejected"] = "REJECTED";
    /** Refund resolved. */
    RefundSessionStateCode["Resolved"] = "RESOLVED";
})(RefundSessionStateCode = exports.RefundSessionStateCode || (exports.RefundSessionStateCode = {}));
/** The possible values that can be used to describe the reason why the refund is rejected. */
var RefundSessionStateRejectedReason;
(function (RefundSessionStateRejectedReason) {
    /** Refund processing failure. */
    RefundSessionStateRejectedReason["ProcessingError"] = "PROCESSING_ERROR";
})(RefundSessionStateRejectedReason = exports.RefundSessionStateRejectedReason || (exports.RefundSessionStateRejectedReason = {}));
/**
 * The possible values that can be used to describe
 * the reason why a refund transaction was rejected.
 *
 */
var RefundSessionStatusReasonRejectionCode;
(function (RefundSessionStatusReasonRejectionCode) {
    /** Refund processing failure. */
    RefundSessionStatusReasonRejectionCode["ProcessingError"] = "PROCESSING_ERROR";
})(RefundSessionStatusReasonRejectionCode = exports.RefundSessionStatusReasonRejectionCode || (exports.RefundSessionStatusReasonRejectionCode = {}));
/** Possible error codes that can be returned by `VoidSessionRejectUserError`. */
var VoidSessionRejectUserErrorCode;
(function (VoidSessionRejectUserErrorCode) {
    /** Void session has already been resolved or has already been rejected with a different reason. */
    VoidSessionRejectUserErrorCode["VoidSessionInvalidState"] = "VOID_SESSION_INVALID_STATE";
    /** Void session not found. */
    VoidSessionRejectUserErrorCode["VoidSessionNotFound"] = "VOID_SESSION_NOT_FOUND";
})(VoidSessionRejectUserErrorCode = exports.VoidSessionRejectUserErrorCode || (exports.VoidSessionRejectUserErrorCode = {}));
/** Possible error codes that can be returned by `VoidSessionResolveUserError`. */
var VoidSessionResolveUserErrorCode;
(function (VoidSessionResolveUserErrorCode) {
    /** Void session has already been rejected. */
    VoidSessionResolveUserErrorCode["VoidSessionInvalidState"] = "VOID_SESSION_INVALID_STATE";
    /** Void session not found. */
    VoidSessionResolveUserErrorCode["VoidSessionNotFound"] = "VOID_SESSION_NOT_FOUND";
})(VoidSessionResolveUserErrorCode = exports.VoidSessionResolveUserErrorCode || (exports.VoidSessionResolveUserErrorCode = {}));
/** The possible values that can be used to describe the state of a finalized void transaction. */
var VoidSessionStateCode;
(function (VoidSessionStateCode) {
    /** Void rejected. */
    VoidSessionStateCode["Rejected"] = "REJECTED";
    /** Void resolved. */
    VoidSessionStateCode["Resolved"] = "RESOLVED";
})(VoidSessionStateCode = exports.VoidSessionStateCode || (exports.VoidSessionStateCode = {}));
/**
 * The possible values that can be used to describe
 * the reason why a void transaction is rejected.
 *
 */
var VoidSessionStateRejectedReason;
(function (VoidSessionStateRejectedReason) {
    /** Void processing failure. */
    VoidSessionStateRejectedReason["ProcessingError"] = "PROCESSING_ERROR";
})(VoidSessionStateRejectedReason = exports.VoidSessionStateRejectedReason || (exports.VoidSessionStateRejectedReason = {}));
/** The possible values that can be used to describe the reason why a void transaction is rejected. */
var VoidSessionStatusReasonRejectionCode;
(function (VoidSessionStatusReasonRejectionCode) {
    /** Void processing failure. */
    VoidSessionStatusReasonRejectionCode["ProcessingError"] = "PROCESSING_ERROR";
})(VoidSessionStatusReasonRejectionCode = exports.VoidSessionStatusReasonRejectionCode || (exports.VoidSessionStatusReasonRejectionCode = {}));
