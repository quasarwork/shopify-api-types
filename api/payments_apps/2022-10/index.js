"use strict";
exports.__esModule = true;
exports.VoidSessionStatusReasonRejectionCode = exports.VoidSessionStatusCode = exports.VoidSessionStateRejectedReason = exports.VoidSessionStateCode = exports.VoidSessionResolveUserErrorCode = exports.VoidSessionRejectUserErrorCode = exports.RefundSessionStatusReasonRejectionCode = exports.RefundSessionStatusCode = exports.RefundSessionStateRejectedReason = exports.RefundSessionStateCode = exports.RefundSessionResolveUserErrorCode = exports.RefundSessionRejectUserErrorCode = exports.PaymentSessionStatusReasonRejectionCode = exports.PaymentSessionStatusCode = exports.PaymentSessionStateRejectedReason = exports.PaymentSessionStatePendingReason = exports.PaymentSessionStateCode = exports.PaymentSessionPendingUserErrorCode = exports.PaymentSessionNextActionAction = exports.CaptureSessionStatusReasonRejectionCode = exports.CaptureSessionStatusCode = exports.CaptureSessionStateRejectedReason = exports.CaptureSessionStateCode = exports.CaptureSessionResolveUserErrorCode = exports.CaptureSessionRejectUserErrorCode = void 0;
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
/** The possible values that can be used to describe the status of a capture transaction. */
var CaptureSessionStatusCode;
(function (CaptureSessionStatusCode) {
    /** Capture rejected. */
    CaptureSessionStatusCode["Rejected"] = "REJECTED";
    /** Capture resolved. */
    CaptureSessionStatusCode["Resolved"] = "RESOLVED";
})(CaptureSessionStatusCode = exports.CaptureSessionStatusCode || (exports.CaptureSessionStatusCode = {}));
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
})(PaymentSessionPendingUserErrorCode = exports.PaymentSessionPendingUserErrorCode || (exports.PaymentSessionPendingUserErrorCode = {}));
/** The possible values that can be used to describe the state of a payment transaction. */
var PaymentSessionStateCode;
(function (PaymentSessionStateCode) {
    /** Payment pending. */
    PaymentSessionStateCode["Pending"] = "PENDING";
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
    /** Payment processing failure. */
    PaymentSessionStateRejectedReason["ProcessingError"] = "PROCESSING_ERROR";
    /** Rejected by risk control. */
    PaymentSessionStateRejectedReason["Risky"] = "RISKY";
})(PaymentSessionStateRejectedReason = exports.PaymentSessionStateRejectedReason || (exports.PaymentSessionStateRejectedReason = {}));
/** The possible values that can be used to describe the status of a payment. */
var PaymentSessionStatusCode;
(function (PaymentSessionStatusCode) {
    /** Payment pending. */
    PaymentSessionStatusCode["Pending"] = "PENDING";
    /** Payment rejected. */
    PaymentSessionStatusCode["Rejected"] = "REJECTED";
    /** Payment resolved. */
    PaymentSessionStatusCode["Resolved"] = "RESOLVED";
})(PaymentSessionStatusCode = exports.PaymentSessionStatusCode || (exports.PaymentSessionStatusCode = {}));
/** The possible values that can be used to describe why a payment transaction was rejected. */
var PaymentSessionStatusReasonRejectionCode;
(function (PaymentSessionStatusReasonRejectionCode) {
    /** The payment instrument was declined by the payment processor. */
    PaymentSessionStatusReasonRejectionCode["PaymentInstrumentDeclined"] = "PAYMENT_INSTRUMENT_DECLINED";
    /** Payment processing failure. */
    PaymentSessionStatusReasonRejectionCode["ProcessingError"] = "PROCESSING_ERROR";
    /** Rejected by risk control. */
    PaymentSessionStatusReasonRejectionCode["Risky"] = "RISKY";
})(PaymentSessionStatusReasonRejectionCode = exports.PaymentSessionStatusReasonRejectionCode || (exports.PaymentSessionStatusReasonRejectionCode = {}));
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
/** The possible values that can be used to describe the status of a refund. */
var RefundSessionStatusCode;
(function (RefundSessionStatusCode) {
    /** Refund rejected. */
    RefundSessionStatusCode["Rejected"] = "REJECTED";
    /** Refund resolved. */
    RefundSessionStatusCode["Resolved"] = "RESOLVED";
})(RefundSessionStatusCode = exports.RefundSessionStatusCode || (exports.RefundSessionStatusCode = {}));
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
/** The possible values that can be used to describe the status of a void transaction. */
var VoidSessionStatusCode;
(function (VoidSessionStatusCode) {
    /** Void rejected. */
    VoidSessionStatusCode["Rejected"] = "REJECTED";
    /** Void resolved. */
    VoidSessionStatusCode["Resolved"] = "RESOLVED";
})(VoidSessionStatusCode = exports.VoidSessionStatusCode || (exports.VoidSessionStatusCode = {}));
/** The possible values that can be used to describe the reason why a void transaction is rejected. */
var VoidSessionStatusReasonRejectionCode;
(function (VoidSessionStatusReasonRejectionCode) {
    /** Void processing failure. */
    VoidSessionStatusReasonRejectionCode["ProcessingError"] = "PROCESSING_ERROR";
})(VoidSessionStatusReasonRejectionCode = exports.VoidSessionStatusReasonRejectionCode || (exports.VoidSessionStatusReasonRejectionCode = {}));
