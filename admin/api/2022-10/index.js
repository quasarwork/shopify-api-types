"use strict";
exports.__esModule = true;
exports.CustomerPaymentMethodRemoteUserErrorCode = exports.CustomerPaymentMethodGetUpdateUrlUserErrorCode = exports.CustomerMarketingOptInLevel = exports.CustomerEmailMarketingState = exports.CustomerEmailMarketingConsentUpdateUserErrorCode = exports.CustomerEmailAddressOpenTrackingLevel = exports.CustomerEmailAddressMarketingState = exports.CustomerConsentCollectedFrom = exports.CurrencyCode = exports.CropRegion = exports.CountryCode = exports.CompanySortKeys = exports.CompanyLocationSortKeys = exports.CompanyContactSortKeys = exports.CompanyContactRoleSortKeys = exports.CompanyContactRoleAssignmentSortKeys = exports.CompanyAddressType = exports.CollectionSortOrder = exports.CollectionSortKeys = exports.CollectionRuleRelation = exports.CollectionRuleColumn = exports.CollectionAddProductsV2UserErrorCode = exports.CodeDiscountSortKeys = exports.CheckoutProfileSortKeys = exports.BusinessCustomerErrorCode = exports.BulkProductResourceFeedbackCreateUserErrorCode = exports.BulkOperationType = exports.BulkOperationStatus = exports.BulkOperationErrorCode = exports.BulkMutationErrorCode = exports.BillingAttemptUserErrorCode = exports.BadgeType = exports.AutomaticDiscountSortKeys = exports.AppUsageRecordSortKeys = exports.AppTransactionSortKeys = exports.AppSubscriptionTrialExtendUserErrorCode = exports.AppSubscriptionStatus = exports.AppSubscriptionSortKeys = exports.AppSubscriptionReplacementBehavior = exports.AppRevenueAttributionType = exports.AppRevenueAttributionRecordSortKeys = exports.AppRevenueAttributionRecordDeleteUserErrorCode = exports.AppRevenueAttributionRecordCreateUserErrorCode = exports.AppPurchaseStatus = exports.AppPublicCategory = exports.AppPricingInterval = exports.AppInstallationSortKeys = exports.AppInstallationPrivacy = exports.AppInstallationCategory = exports.AppDeveloperType = void 0;
exports.FulfillmentOrderAssignmentStatus = exports.FulfillmentOrderAction = exports.FulfillmentHoldReason = exports.FulfillmentEventStatus = exports.FulfillmentEventSortKeys = exports.FulfillmentDisplayStatus = exports.FilesErrorCode = exports.FileStatus = exports.FileSortKeys = exports.FileErrorCode = exports.FileContentType = exports.EventSortKeys = exports.ErrorsWebPixelUserErrorCode = exports.DraftOrderStatus = exports.DraftOrderSortKeys = exports.DraftOrderAppliedDiscountType = exports.DisputeType = exports.DisputeStatus = exports.DisputeEvidenceUpdateUserErrorCode = exports.DiscountType = exports.DiscountTargetType = exports.DiscountStatus = exports.DiscountSortKeys = exports.DiscountShareableUrlTargetType = exports.DiscountErrorCode = exports.DiscountCodeSortKeys = exports.DiscountClass = exports.DiscountApplicationTargetType = exports.DiscountApplicationTargetSelection = exports.DiscountApplicationLevel = exports.DiscountApplicationAllocationMethod = exports.DigitalWallet = exports.DeliveryMethodType = exports.DeliveryMethodDefinitionType = exports.DeliveryLegacyModeBlockedReason = exports.DeliveryConditionOperator = exports.DeliveryConditionField = exports.DeletionEventSubjectType = exports.DeletionEventSortKeys = exports.DelegateAccessTokenCreateUserErrorCode = exports.DayOfTheWeek = exports.CustomerState = exports.CustomerSortKeys = exports.CustomerSmsMarketingState = exports.CustomerSmsMarketingConsentErrorCode = exports.CustomerSavedSearchSortKeys = exports.CustomerProductSubscriberStatus = exports.CustomerPredictedSpendTier = exports.CustomerPaymentMethodUserErrorCode = exports.CustomerPaymentMethodRevocationReason = void 0;
exports.MetafieldDefinitionUpdateUserErrorCode = exports.MetafieldDefinitionUnpinUserErrorCode = exports.MetafieldDefinitionSortKeys = exports.MetafieldDefinitionPinnedStatus = exports.MetafieldDefinitionPinUserErrorCode = exports.MetafieldDefinitionDeleteUserErrorCode = exports.MetafieldDefinitionCreateUserErrorCode = exports.MerchandiseDiscountClass = exports.MediaWarningCode = exports.MediaUserErrorCode = exports.MediaStatus = exports.MediaPreviewImageStatus = exports.MediaHost = exports.MediaErrorCode = exports.MediaContentType = exports.MarketingTactic = exports.MarketingEventSortKeys = exports.MarketingChannel = exports.MarketingBudgetBudgetType = exports.MarketingActivityUserErrorCode = exports.MarketingActivityStatusBadgeType = exports.MarketingActivityStatus = exports.MarketingActivitySortKeys = exports.MarketingActivityExtensionAppErrorCode = exports.MarketUserErrorCode = exports.MarketLocalizableResourceType = exports.MarketCurrencySettingsUserErrorCode = exports.LocationSortKeys = exports.LocationEditUserErrorCode = exports.LocationDeleteUserErrorCode = exports.LocationDeactivateUserErrorCode = exports.LocationAddUserErrorCode = exports.LocationActivateUserErrorCode = exports.LocalizationExtensionPurpose = exports.LocalizationExtensionKey = exports.InventoryBulkToggleActivationUserErrorCode = exports.ImageContentType = exports.GiftCardSortKeys = exports.GiftCardErrorCode = exports.FulfillmentStatus = exports.FulfillmentServiceType = exports.FulfillmentOrdersSetFulfillmentDeadlineUserErrorCode = exports.FulfillmentOrderStatus = exports.FulfillmentOrderSortKeys = exports.FulfillmentOrderRescheduleUserErrorCode = exports.FulfillmentOrderRequestStatus = exports.FulfillmentOrderReleaseHoldUserErrorCode = exports.FulfillmentOrderRejectionReason = exports.FulfillmentOrderMerchantRequestKind = exports.FulfillmentOrderHoldUserErrorCode = void 0;
exports.ProductVariantsBulkReorderUserErrorCode = exports.ProductVariantsBulkDeleteUserErrorCode = exports.ProductVariantsBulkCreateUserErrorCode = exports.ProductVariantSortKeys = exports.ProductVariantInventoryPolicy = exports.ProductVariantInventoryManagement = exports.ProductStatus = exports.ProductSortKeys = exports.ProductMediaSortKeys = exports.ProductImageSortKeys = exports.ProductCollectionSortKeys = exports.ProductChangeStatusUserErrorCode = exports.PrivateMetafieldValueType = exports.PriceRuleTrait = exports.PriceRuleTarget = exports.PriceRuleStatus = exports.PriceRuleSortKeys = exports.PriceRuleShareableUrlTargetType = exports.PriceRuleFeature = exports.PriceRuleErrorCode = exports.PriceRuleAllocationMethod = exports.PriceListUserErrorCode = exports.PriceListSortKeys = exports.PriceListPriceUserErrorCode = exports.PriceListPriceOriginType = exports.PriceListAdjustmentType = exports.PaypalExpressSubscriptionsGatewayStatus = exports.PaymentTermsUpdateUserErrorCode = exports.PaymentTermsType = exports.PaymentTermsDeleteUserErrorCode = exports.PaymentTermsCreateUserErrorCode = exports.PaymentMethods = exports.OrderTransactionStatus = exports.OrderTransactionKind = exports.OrderTransactionErrorCode = exports.OrderSortKeys = exports.OrderRiskLevel = exports.OrderPaymentStatusResult = exports.OrderInvoiceSendUserErrorCode = exports.OrderDisplayFulfillmentStatus = exports.OrderDisplayFinancialStatus = exports.OrderCreateMandatePaymentUserErrorCode = exports.OrderCancelReason = exports.OrderActionType = exports.MethodDefinitionSortKeys = exports.MetafieldsSetUserErrorCode = exports.MetafieldValueType = exports.MetafieldValidationStatus = exports.MetafieldOwnerType = exports.MetafieldDefinitionValidationStatus = void 0;
exports.SubscriptionBillingCycleErrorCode = exports.SubscriptionBillingCycleBillingCycleStatus = exports.SubscriptionBillingAttemptErrorCode = exports.StandardMetafieldDefinitionEnableUserErrorCode = exports.StagedUploadTargetGenerateUploadResource = exports.StagedUploadHttpMethodType = exports.StaffMemberPermission = exports.StaffMemberDefaultImage = exports.ShopifyPaymentsVerificationStatus = exports.ShopifyPaymentsVerificationDocumentType = exports.ShopifyPaymentsPayoutTransactionType = exports.ShopifyPaymentsPayoutStatus = exports.ShopifyPaymentsPayoutInterval = exports.ShopifyPaymentsDisputeReason = exports.ShopifyPaymentsDisputeEvidenceFileType = exports.ShopifyPaymentsBankAccountStatus = exports.ShopTagSort = exports.ShopPolicyType = exports.ShopPolicyErrorCode = exports.ShopCustomerAccountsSetting = exports.ShopBranding = exports.ShippingDiscountClass = exports.SellingPlanReserve = exports.SellingPlanRemainingBalanceChargeTrigger = exports.SellingPlanRecurringDeliveryPolicyPreAnchorBehavior = exports.SellingPlanRecurringDeliveryPolicyIntent = exports.SellingPlanPricingPolicyAdjustmentType = exports.SellingPlanInterval = exports.SellingPlanGroupUserErrorCode = exports.SellingPlanGroupSortKeys = exports.SellingPlanFulfillmentTrigger = exports.SellingPlanFixedDeliveryPolicyPreAnchorBehavior = exports.SellingPlanFixedDeliveryPolicyIntent = exports.SellingPlanCheckoutChargeType = exports.SellingPlanCategory = exports.SellingPlanAnchorType = exports.SegmentSortKeys = exports.SearchResultType = exports.ScriptTagDisplayScope = exports.SaleLineType = exports.SaleActionType = exports.ResourceFeedbackState = exports.ResourceAlertSeverity = exports.ResourceAlertIcon = exports.RefundLineItemRestockType = exports.RefundDutyRefundType = exports.PubSubWebhookSubscriptionUpdateUserErrorCode = exports.PubSubWebhookSubscriptionCreateUserErrorCode = exports.ProfileItemSortKeys = exports.ProductVariantsBulkUpdateUserErrorCode = void 0;
exports.WeightUnit = exports.WebhookSubscriptionTopic = exports.WebhookSubscriptionSortKeys = exports.WebhookSubscriptionFormat = exports.UrlRedirectSortKeys = exports.UrlRedirectImportErrorCode = exports.UrlRedirectErrorCode = exports.UrlRedirectBulkDeleteBySearchUserErrorCode = exports.UrlRedirectBulkDeleteBySavedSearchUserErrorCode = exports.UrlRedirectBulkDeleteByIdsUserErrorCode = exports.UnitSystem = exports.TranslationErrorCode = exports.TranslatableResourceType = exports.TaxExemption = exports.SuggestedOrderTransactionKind = exports.SubscriptionDraftErrorCode = exports.SubscriptionDiscountRejectionReason = exports.SubscriptionContractSubscriptionStatus = exports.SubscriptionContractLastPaymentStatus = exports.SubscriptionContractErrorCode = exports.SubscriptionBillingCyclesTargetSelection = exports.SubscriptionBillingCyclesSortKeys = exports.SubscriptionBillingCycleScheduleEditInputScheduleEditReason = void 0;
/** Possible types of app developer. */
var AppDeveloperType;
(function (AppDeveloperType) {
    /** Indicates the app developer works directly for a Merchant. */
    AppDeveloperType["Merchant"] = "MERCHANT";
    /** Indicates the app developer is a Partner. */
    AppDeveloperType["Partner"] = "PARTNER";
    /** Indicates the app developer is Shopify. */
    AppDeveloperType["Shopify"] = "SHOPIFY";
    /** Indicates the app developer is unknown. It is not categorized as any of the other developer types. */
    AppDeveloperType["Unknown"] = "UNKNOWN";
})(AppDeveloperType = exports.AppDeveloperType || (exports.AppDeveloperType = {}));
/**
 * The possible categories of an app installation, based on their purpose
 * or the environment they can run in.
 *
 */
var AppInstallationCategory;
(function (AppInstallationCategory) {
    /** Apps that serve as channels through which sales are made, such as the online store. */
    AppInstallationCategory["Channel"] = "CHANNEL";
    /** Apps that can be used in the POS mobile client. */
    AppInstallationCategory["PosEmbedded"] = "POS_EMBEDDED";
})(AppInstallationCategory = exports.AppInstallationCategory || (exports.AppInstallationCategory = {}));
/** The levels of privacy of an app installation. */
var AppInstallationPrivacy;
(function (AppInstallationPrivacy) {
    AppInstallationPrivacy["Private"] = "PRIVATE";
    AppInstallationPrivacy["Public"] = "PUBLIC";
})(AppInstallationPrivacy = exports.AppInstallationPrivacy || (exports.AppInstallationPrivacy = {}));
/** The set of valid sort keys for the AppInstallation query. */
var AppInstallationSortKeys;
(function (AppInstallationSortKeys) {
    /** Sort by the `app_title` value. */
    AppInstallationSortKeys["AppTitle"] = "APP_TITLE";
    /** Sort by the `id` value. */
    AppInstallationSortKeys["Id"] = "ID";
    /** Sort by the `installed_at` value. */
    AppInstallationSortKeys["InstalledAt"] = "INSTALLED_AT";
    /**
     * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
     * Don't use this sort key when no search query is specified.
     *
     */
    AppInstallationSortKeys["Relevance"] = "RELEVANCE";
})(AppInstallationSortKeys = exports.AppInstallationSortKeys || (exports.AppInstallationSortKeys = {}));
/** The frequency at which the shop is billed for an app subscription. */
var AppPricingInterval;
(function (AppPricingInterval) {
    /** The app subscription bills the shop annually. */
    AppPricingInterval["Annual"] = "ANNUAL";
    /** The app subscription bills the shop every 30 days. */
    AppPricingInterval["Every_30Days"] = "EVERY_30_DAYS";
})(AppPricingInterval = exports.AppPricingInterval || (exports.AppPricingInterval = {}));
/** The public-facing category for an app. */
var AppPublicCategory;
(function (AppPublicCategory) {
    /** The app's public category is [custom](https://shopify.dev/apps/distribution#capabilities-and-requirements). */
    AppPublicCategory["Custom"] = "CUSTOM";
    /** The app's public category is other. An app is in this category if it's not classified under any of the other app types (private, public, or custom). */
    AppPublicCategory["Other"] = "OTHER";
    /** The app's public category is [private](https://shopify.dev/apps/distribution#deprecated-app-types). */
    AppPublicCategory["Private"] = "PRIVATE";
    /** The app's public category is [public](https://shopify.dev/apps/distribution#capabilities-and-requirements). */
    AppPublicCategory["Public"] = "PUBLIC";
})(AppPublicCategory = exports.AppPublicCategory || (exports.AppPublicCategory = {}));
/**
 * The approval status of the app purchase.
 *
 * The merchant is charged for the purchase immediately after approval, and the status changes to `active`.
 * If the payment fails, then the app purchase remains `pending`.
 *
 * Purchases start as `pending` and can change to: `active`, `declined`, `expired`. After a purchase changes, it
 * remains in that final state.
 *
 */
var AppPurchaseStatus;
(function (AppPurchaseStatus) {
    /**
     * The app purchase has been approved by the merchant and is ready to be activated by the app. App purchases created through the GraphQL Admin API are activated upon approval.
     * @deprecated As of API version 2021-01, when a merchant accepts an app purchase, the status immediately changes from `pending` to `active`.
     */
    AppPurchaseStatus["Accepted"] = "ACCEPTED";
    /** The app purchase was approved by the merchant and has been activated by the app. Active app purchases are charged to the merchant and are paid out to the partner. */
    AppPurchaseStatus["Active"] = "ACTIVE";
    /** The app purchase was declined by the merchant. */
    AppPurchaseStatus["Declined"] = "DECLINED";
    /** The app purchase was not accepted within two days of being created. */
    AppPurchaseStatus["Expired"] = "EXPIRED";
    /** The app purchase is pending approval by the merchant. */
    AppPurchaseStatus["Pending"] = "PENDING";
})(AppPurchaseStatus = exports.AppPurchaseStatus || (exports.AppPurchaseStatus = {}));
/** Possible error codes that can be returned by `AppRevenueAttributionRecordCreateUserError`. */
var AppRevenueAttributionRecordCreateUserErrorCode;
(function (AppRevenueAttributionRecordCreateUserErrorCode) {
    /** The input value is invalid. */
    AppRevenueAttributionRecordCreateUserErrorCode["Invalid"] = "INVALID";
    /** The input value is already taken. */
    AppRevenueAttributionRecordCreateUserErrorCode["Taken"] = "TAKEN";
})(AppRevenueAttributionRecordCreateUserErrorCode = exports.AppRevenueAttributionRecordCreateUserErrorCode || (exports.AppRevenueAttributionRecordCreateUserErrorCode = {}));
/** Possible error codes that can be returned by `AppRevenueAttributionRecordDeleteUserError`. */
var AppRevenueAttributionRecordDeleteUserErrorCode;
(function (AppRevenueAttributionRecordDeleteUserErrorCode) {
    /** The input value is invalid. */
    AppRevenueAttributionRecordDeleteUserErrorCode["Invalid"] = "INVALID";
})(AppRevenueAttributionRecordDeleteUserErrorCode = exports.AppRevenueAttributionRecordDeleteUserErrorCode || (exports.AppRevenueAttributionRecordDeleteUserErrorCode = {}));
/** The set of valid sort keys for the AppRevenueAttributionRecord query. */
var AppRevenueAttributionRecordSortKeys;
(function (AppRevenueAttributionRecordSortKeys) {
    /** Sort by the `created_at` value. */
    AppRevenueAttributionRecordSortKeys["CreatedAt"] = "CREATED_AT";
    /** Sort by the `id` value. */
    AppRevenueAttributionRecordSortKeys["Id"] = "ID";
    /**
     * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
     * Don't use this sort key when no search query is specified.
     *
     */
    AppRevenueAttributionRecordSortKeys["Relevance"] = "RELEVANCE";
})(AppRevenueAttributionRecordSortKeys = exports.AppRevenueAttributionRecordSortKeys || (exports.AppRevenueAttributionRecordSortKeys = {}));
/** Represents the billing types of revenue attribution. */
var AppRevenueAttributionType;
(function (AppRevenueAttributionType) {
    /** App purchase related revenue collection. */
    AppRevenueAttributionType["ApplicationPurchase"] = "APPLICATION_PURCHASE";
    /** App subscription revenue collection. */
    AppRevenueAttributionType["ApplicationSubscription"] = "APPLICATION_SUBSCRIPTION";
    /** App usage-based revenue collection. */
    AppRevenueAttributionType["ApplicationUsage"] = "APPLICATION_USAGE";
    /** Other app revenue collection type. */
    AppRevenueAttributionType["Other"] = "OTHER";
})(AppRevenueAttributionType = exports.AppRevenueAttributionType || (exports.AppRevenueAttributionType = {}));
/** The replacement behavior when creating an app subscription for a merchant with an already existing app subscription. */
var AppSubscriptionReplacementBehavior;
(function (AppSubscriptionReplacementBehavior) {
    /** Cancels the merchant's current app subscription immediately and replaces it with the newly created app subscription. */
    AppSubscriptionReplacementBehavior["ApplyImmediately"] = "APPLY_IMMEDIATELY";
    /** Defers canceling the merchant's current app subscription and applying the newly created app subscription until the start of the next billing cycle. */
    AppSubscriptionReplacementBehavior["ApplyOnNextBillingCycle"] = "APPLY_ON_NEXT_BILLING_CYCLE";
    /**
     * Cancels the merchant's current app subscription immediately and replaces it with the newly created app subscription, with the exception of
     * the following scenarios where replacing the current app subscription will be deferred until the start of the next billing cycle.
     * 1) The current app subscription is annual and the newly created app subscription is also annual but is of a lesser value.
     * 2) The current app subscription is annual and the newly created app subscription is monthly.
     * 3) The current app subscription and the newly created app subscription are identical except for the `discount` value.
     *
     */
    AppSubscriptionReplacementBehavior["Standard"] = "STANDARD";
})(AppSubscriptionReplacementBehavior = exports.AppSubscriptionReplacementBehavior || (exports.AppSubscriptionReplacementBehavior = {}));
/** The set of valid sort keys for the AppSubscription query. */
var AppSubscriptionSortKeys;
(function (AppSubscriptionSortKeys) {
    /** Sort by the `created_at` value. */
    AppSubscriptionSortKeys["CreatedAt"] = "CREATED_AT";
    /** Sort by the `id` value. */
    AppSubscriptionSortKeys["Id"] = "ID";
    /**
     * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
     * Don't use this sort key when no search query is specified.
     *
     */
    AppSubscriptionSortKeys["Relevance"] = "RELEVANCE";
})(AppSubscriptionSortKeys = exports.AppSubscriptionSortKeys || (exports.AppSubscriptionSortKeys = {}));
/** The status of the app subscription. */
var AppSubscriptionStatus;
(function (AppSubscriptionStatus) {
    /**
     * The app subscription has been approved by the merchant and is ready to be activated by the app.
     * @deprecated As of API version 2021-01, when a merchant approves an app subscription, the status immediately transitions from `pending` to `active`.
     */
    AppSubscriptionStatus["Accepted"] = "ACCEPTED";
    /** The app subscription has been approved by the merchant. Active app subscriptions are billed to the shop. After payment, partners receive payouts. */
    AppSubscriptionStatus["Active"] = "ACTIVE";
    /** The app subscription was cancelled by the app. This could be caused by the app being uninstalled, a new app subscription being activated, or a direct cancellation by the app. This is a terminal state. */
    AppSubscriptionStatus["Cancelled"] = "CANCELLED";
    /** The app subscription was declined by the merchant. This is a terminal state. */
    AppSubscriptionStatus["Declined"] = "DECLINED";
    /** The app subscription wasn't approved by the merchant within two days of being created. This is a terminal state. */
    AppSubscriptionStatus["Expired"] = "EXPIRED";
    /** The app subscription is on hold due to non-payment. The subscription re-activates after payments resume. */
    AppSubscriptionStatus["Frozen"] = "FROZEN";
    /** The app subscription is pending approval by the merchant. */
    AppSubscriptionStatus["Pending"] = "PENDING";
})(AppSubscriptionStatus = exports.AppSubscriptionStatus || (exports.AppSubscriptionStatus = {}));
/** Possible error codes that can be returned by `AppSubscriptionTrialExtendUserError`. */
var AppSubscriptionTrialExtendUserErrorCode;
(function (AppSubscriptionTrialExtendUserErrorCode) {
    /** The app subscription isn't active. */
    AppSubscriptionTrialExtendUserErrorCode["SubscriptionNotActive"] = "SUBSCRIPTION_NOT_ACTIVE";
    /** The app subscription wasn't found. */
    AppSubscriptionTrialExtendUserErrorCode["SubscriptionNotFound"] = "SUBSCRIPTION_NOT_FOUND";
    /** The trial isn't active. */
    AppSubscriptionTrialExtendUserErrorCode["TrialNotActive"] = "TRIAL_NOT_ACTIVE";
})(AppSubscriptionTrialExtendUserErrorCode = exports.AppSubscriptionTrialExtendUserErrorCode || (exports.AppSubscriptionTrialExtendUserErrorCode = {}));
/** The set of valid sort keys for the AppTransaction query. */
var AppTransactionSortKeys;
(function (AppTransactionSortKeys) {
    /** Sort by the `created_at` value. */
    AppTransactionSortKeys["CreatedAt"] = "CREATED_AT";
    /** Sort by the `id` value. */
    AppTransactionSortKeys["Id"] = "ID";
    /**
     * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
     * Don't use this sort key when no search query is specified.
     *
     */
    AppTransactionSortKeys["Relevance"] = "RELEVANCE";
})(AppTransactionSortKeys = exports.AppTransactionSortKeys || (exports.AppTransactionSortKeys = {}));
/** The set of valid sort keys for the AppUsageRecord query. */
var AppUsageRecordSortKeys;
(function (AppUsageRecordSortKeys) {
    /** Sort by the `created_at` value. */
    AppUsageRecordSortKeys["CreatedAt"] = "CREATED_AT";
    /** Sort by the `id` value. */
    AppUsageRecordSortKeys["Id"] = "ID";
    /**
     * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
     * Don't use this sort key when no search query is specified.
     *
     */
    AppUsageRecordSortKeys["Relevance"] = "RELEVANCE";
})(AppUsageRecordSortKeys = exports.AppUsageRecordSortKeys || (exports.AppUsageRecordSortKeys = {}));
/** The set of valid sort keys for the AutomaticDiscount query. */
var AutomaticDiscountSortKeys;
(function (AutomaticDiscountSortKeys) {
    /** Sort by the `created_at` value. */
    AutomaticDiscountSortKeys["CreatedAt"] = "CREATED_AT";
    /** Sort by the `id` value. */
    AutomaticDiscountSortKeys["Id"] = "ID";
    /**
     * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
     * Don't use this sort key when no search query is specified.
     *
     */
    AutomaticDiscountSortKeys["Relevance"] = "RELEVANCE";
})(AutomaticDiscountSortKeys = exports.AutomaticDiscountSortKeys || (exports.AutomaticDiscountSortKeys = {}));
/** The possible types for a badge. */
var BadgeType;
(function (BadgeType) {
    /** This badge has type `attention`. */
    BadgeType["Attention"] = "ATTENTION";
    /** This badge has type `default`. */
    BadgeType["Default"] = "DEFAULT";
    /** This badge has type `info`. */
    BadgeType["Info"] = "INFO";
    /** This badge has type `success`. */
    BadgeType["Success"] = "SUCCESS";
    /** This badge has type `warning`. */
    BadgeType["Warning"] = "WARNING";
})(BadgeType = exports.BadgeType || (exports.BadgeType = {}));
/** Possible error codes that can be returned by `BillingAttemptUserError`. */
var BillingAttemptUserErrorCode;
(function (BillingAttemptUserErrorCode) {
    /** The input value is blank. */
    BillingAttemptUserErrorCode["Blank"] = "BLANK";
    /** Subscription contract does not exist. */
    BillingAttemptUserErrorCode["ContractNotFound"] = "CONTRACT_NOT_FOUND";
    /** The input value is invalid. */
    BillingAttemptUserErrorCode["Invalid"] = "INVALID";
})(BillingAttemptUserErrorCode = exports.BillingAttemptUserErrorCode || (exports.BillingAttemptUserErrorCode = {}));
/** Possible error codes that can be returned by `BulkMutationUserError`. */
var BulkMutationErrorCode;
(function (BulkMutationErrorCode) {
    /** There was a problem reading the JSONL file. This error might be intermittent, so you can try performing the same query again. */
    BulkMutationErrorCode["InternalFileServerError"] = "INTERNAL_FILE_SERVER_ERROR";
    /** The operation did not run because the mutation is invalid. Check your mutation syntax and try again. */
    BulkMutationErrorCode["InvalidMutation"] = "INVALID_MUTATION";
    /** The JSONL file submitted via the `stagedUploadsCreate` mutation is invalid. Update the file and try again. */
    BulkMutationErrorCode["InvalidStagedUploadFile"] = "INVALID_STAGED_UPLOAD_FILE";
    /** The JSONL file could not be found. Try [uploading the file](https://shopify.dev/api/usage/bulk-operations/imports#generate-the-uploaded-url-and-parameters) again, and check that you've entered the URL correctly for the `stagedUploadPath` mutation argument. */
    BulkMutationErrorCode["NoSuchFile"] = "NO_SUCH_FILE";
    /** The operation did not run because another bulk mutation is already running. [Wait for the operation to finish](https://shopify.dev/api/usage/bulk-operations/imports#wait-for-the-operation-to-finish) before retrying this operation. */
    BulkMutationErrorCode["OperationInProgress"] = "OPERATION_IN_PROGRESS";
})(BulkMutationErrorCode = exports.BulkMutationErrorCode || (exports.BulkMutationErrorCode = {}));
/** Error codes for failed bulk operations. */
var BulkOperationErrorCode;
(function (BulkOperationErrorCode) {
    /**
     * The provided operation `query` returned access denied due to missing
     * [access scopes](https://shopify.dev/api/usage/access-scopes).
     * Review the requested object permissions and execute the query as a normal non-bulk GraphQL request to see more details.
     *
     */
    BulkOperationErrorCode["AccessDenied"] = "ACCESS_DENIED";
    /**
     * The operation resulted in partial or incomplete data due to internal server errors during execution.
     * These errors might be intermittent, so you can try performing the same query again.
     *
     */
    BulkOperationErrorCode["InternalServerError"] = "INTERNAL_SERVER_ERROR";
    /**
     * The operation resulted in partial or incomplete data due to query timeouts during execution.
     * In some cases, timeouts can be avoided by modifying your `query` to select fewer fields.
     *
     */
    BulkOperationErrorCode["Timeout"] = "TIMEOUT";
})(BulkOperationErrorCode = exports.BulkOperationErrorCode || (exports.BulkOperationErrorCode = {}));
/** The valid values for the status of a bulk operation. */
var BulkOperationStatus;
(function (BulkOperationStatus) {
    /** The bulk operation has been canceled. */
    BulkOperationStatus["Canceled"] = "CANCELED";
    /**
     * Cancelation has been initiated on the bulk operation. There may be a short delay from when a cancelation
     * starts until the operation is actually canceled.
     *
     */
    BulkOperationStatus["Canceling"] = "CANCELING";
    /** The bulk operation has successfully completed. */
    BulkOperationStatus["Completed"] = "COMPLETED";
    /** The bulk operation has been created. */
    BulkOperationStatus["Created"] = "CREATED";
    /** The bulk operation URL has expired. */
    BulkOperationStatus["Expired"] = "EXPIRED";
    /**
     * The bulk operation has failed. For information on why the operation failed, use
     * [BulkOperation.errorCode](https://shopify.dev/api/admin-graphql/latest/enums/bulkoperationerrorcode).
     *
     */
    BulkOperationStatus["Failed"] = "FAILED";
    /** The bulk operation is runnning. */
    BulkOperationStatus["Running"] = "RUNNING";
})(BulkOperationStatus = exports.BulkOperationStatus || (exports.BulkOperationStatus = {}));
/** The valid values for the bulk operation's type. */
var BulkOperationType;
(function (BulkOperationType) {
    /** The bulk operation is a mutation. */
    BulkOperationType["Mutation"] = "MUTATION";
    /** The bulk operation is a query. */
    BulkOperationType["Query"] = "QUERY";
})(BulkOperationType = exports.BulkOperationType || (exports.BulkOperationType = {}));
/** Possible error codes that can be returned by `BulkProductResourceFeedbackCreateUserError`. */
var BulkProductResourceFeedbackCreateUserErrorCode;
(function (BulkProductResourceFeedbackCreateUserErrorCode) {
    /** The input value is blank. */
    BulkProductResourceFeedbackCreateUserErrorCode["Blank"] = "BLANK";
    /** The input value is invalid. */
    BulkProductResourceFeedbackCreateUserErrorCode["Invalid"] = "INVALID";
    /** The input value should be less than or equal to the maximum value allowed. */
    BulkProductResourceFeedbackCreateUserErrorCode["LessThanOrEqualTo"] = "LESS_THAN_OR_EQUAL_TO";
    /** The operation was attempted on too many feedback objects. The maximum number of feedback objects that you can operate on is 50. */
    BulkProductResourceFeedbackCreateUserErrorCode["MaximumFeedbackLimitExceeded"] = "MAXIMUM_FEEDBACK_LIMIT_EXCEEDED";
    /** The feedback for a later version of this resource was already accepted. */
    BulkProductResourceFeedbackCreateUserErrorCode["OutdatedFeedback"] = "OUTDATED_FEEDBACK";
    /** The input value needs to be blank. */
    BulkProductResourceFeedbackCreateUserErrorCode["Present"] = "PRESENT";
    /** The product wasn't found or isn't available to the channel. */
    BulkProductResourceFeedbackCreateUserErrorCode["ProductNotFound"] = "PRODUCT_NOT_FOUND";
})(BulkProductResourceFeedbackCreateUserErrorCode = exports.BulkProductResourceFeedbackCreateUserErrorCode || (exports.BulkProductResourceFeedbackCreateUserErrorCode = {}));
/** Possible error codes that can be returned by `BusinessCustomerUserError`. */
var BusinessCustomerErrorCode;
(function (BusinessCustomerErrorCode) {
    /** The input value is blank. */
    BusinessCustomerErrorCode["Blank"] = "BLANK";
    /** Deleting the resource failed. */
    BusinessCustomerErrorCode["FailedToDelete"] = "FAILED_TO_DELETE";
    /** An internal error occurred. */
    BusinessCustomerErrorCode["InternalError"] = "INTERNAL_ERROR";
    /** The input value is invalid. */
    BusinessCustomerErrorCode["Invalid"] = "INVALID";
    /** The input is invalid. */
    BusinessCustomerErrorCode["InvalidInput"] = "INVALID_INPUT";
    /** The number of resources exceeded the limit. */
    BusinessCustomerErrorCode["LimitReached"] = "LIMIT_REACHED";
    /** The input is empty. */
    BusinessCustomerErrorCode["NoInput"] = "NO_INPUT";
    /** Missing a required field. */
    BusinessCustomerErrorCode["Required"] = "REQUIRED";
    /** The resource wasn't found. */
    BusinessCustomerErrorCode["ResourceNotFound"] = "RESOURCE_NOT_FOUND";
    /** The input value is already taken. */
    BusinessCustomerErrorCode["Taken"] = "TAKEN";
    /** The field value is too long. */
    BusinessCustomerErrorCode["TooLong"] = "TOO_LONG";
    /** Unexpected type. */
    BusinessCustomerErrorCode["UnexpectedType"] = "UNEXPECTED_TYPE";
})(BusinessCustomerErrorCode = exports.BusinessCustomerErrorCode || (exports.BusinessCustomerErrorCode = {}));
/** The set of valid sort keys for the CheckoutProfile query. */
var CheckoutProfileSortKeys;
(function (CheckoutProfileSortKeys) {
    /** Sort by the `created_at` value. */
    CheckoutProfileSortKeys["CreatedAt"] = "CREATED_AT";
    /** Sort by the `id` value. */
    CheckoutProfileSortKeys["Id"] = "ID";
    /** Sort by the `is_published` value. */
    CheckoutProfileSortKeys["IsPublished"] = "IS_PUBLISHED";
    /**
     * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
     * Don't use this sort key when no search query is specified.
     *
     */
    CheckoutProfileSortKeys["Relevance"] = "RELEVANCE";
    /** Sort by the `updated_at` value. */
    CheckoutProfileSortKeys["UpdatedAt"] = "UPDATED_AT";
})(CheckoutProfileSortKeys = exports.CheckoutProfileSortKeys || (exports.CheckoutProfileSortKeys = {}));
/** The set of valid sort keys for the CodeDiscount query. */
var CodeDiscountSortKeys;
(function (CodeDiscountSortKeys) {
    /** Sort by the `created_at` value. */
    CodeDiscountSortKeys["CreatedAt"] = "CREATED_AT";
    /** Sort by the `ends_at` value. */
    CodeDiscountSortKeys["EndsAt"] = "ENDS_AT";
    /** Sort by the `id` value. */
    CodeDiscountSortKeys["Id"] = "ID";
    /**
     * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
     * Don't use this sort key when no search query is specified.
     *
     */
    CodeDiscountSortKeys["Relevance"] = "RELEVANCE";
    /** Sort by the `starts_at` value. */
    CodeDiscountSortKeys["StartsAt"] = "STARTS_AT";
    /** Sort by the `title` value. */
    CodeDiscountSortKeys["Title"] = "TITLE";
    /** Sort by the `updated_at` value. */
    CodeDiscountSortKeys["UpdatedAt"] = "UPDATED_AT";
})(CodeDiscountSortKeys = exports.CodeDiscountSortKeys || (exports.CodeDiscountSortKeys = {}));
/** Possible error codes that can be returned by `CollectionAddProductsV2UserError`. */
var CollectionAddProductsV2UserErrorCode;
(function (CollectionAddProductsV2UserErrorCode) {
    /** Can't manually add products to a smart collection. */
    CollectionAddProductsV2UserErrorCode["CantAddToSmartCollection"] = "CANT_ADD_TO_SMART_COLLECTION";
    /** Collection doesn't exist. */
    CollectionAddProductsV2UserErrorCode["CollectionDoesNotExist"] = "COLLECTION_DOES_NOT_EXIST";
})(CollectionAddProductsV2UserErrorCode = exports.CollectionAddProductsV2UserErrorCode || (exports.CollectionAddProductsV2UserErrorCode = {}));
/** Specifies the attribute of a product being used to populate the smart collection. */
var CollectionRuleColumn;
(function (CollectionRuleColumn) {
    /**
     * An attribute evaluated based on the `compare_at_price` attribute of the product's variants.
     * With `is_set` relation, the rule matches products with at least one variant with `compare_at_price` set.
     * With `is_not_set` relation, the rule matches matches products with at least one variant with `compare_at_price` not set.
     *
     */
    CollectionRuleColumn["IsPriceReduced"] = "IS_PRICE_REDUCED";
    /** The [`product_taxonomy_node_id`](https://shopify.dev/api/admin-graphql/latest/objects/Product#field-product-productcategory) attribute. */
    CollectionRuleColumn["ProductTaxonomyNodeId"] = "PRODUCT_TAXONOMY_NODE_ID";
    /** The [`tag`](https://shopify.dev/api/admin-graphql/latest/objects/Product#field-product-producttype) attribute. */
    CollectionRuleColumn["Tag"] = "TAG";
    /** The [`title`](https://shopify.dev/api/admin-graphql/latest/objects/Product#field-product-title) attribute. */
    CollectionRuleColumn["Title"] = "TITLE";
    /** The [`type`](https://shopify.dev/api/admin-graphql/latest/objects/Product#field-product-producttype) attribute. */
    CollectionRuleColumn["Type"] = "TYPE";
    /** The [`variant_compare_at_price`](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-productvariant-compareatprice) attribute. */
    CollectionRuleColumn["VariantCompareAtPrice"] = "VARIANT_COMPARE_AT_PRICE";
    /** The [`variant_inventory`](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-productvariant-inventoryquantity) attribute. */
    CollectionRuleColumn["VariantInventory"] = "VARIANT_INVENTORY";
    /** The [`variant_price`](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-productvariant-price) attribute. */
    CollectionRuleColumn["VariantPrice"] = "VARIANT_PRICE";
    /** The [`variant_title`](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-productvariant-title) attribute. */
    CollectionRuleColumn["VariantTitle"] = "VARIANT_TITLE";
    /** The [`variant_weight`](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-productvariant-weight) attribute. */
    CollectionRuleColumn["VariantWeight"] = "VARIANT_WEIGHT";
    /** The [`vendor`](https://shopify.dev/api/admin-graphql/latest/objects/Product#field-product-vendor) attribute. */
    CollectionRuleColumn["Vendor"] = "VENDOR";
})(CollectionRuleColumn = exports.CollectionRuleColumn || (exports.CollectionRuleColumn = {}));
/** Specifies the relationship between the `column` and the `condition`. */
var CollectionRuleRelation;
(function (CollectionRuleRelation) {
    /** The attribute contains the condition. */
    CollectionRuleRelation["Contains"] = "CONTAINS";
    /** The attribute ends with the condition. */
    CollectionRuleRelation["EndsWith"] = "ENDS_WITH";
    /** The attribute is equal to the condition. */
    CollectionRuleRelation["Equals"] = "EQUALS";
    /** The attribute is greater than the condition. */
    CollectionRuleRelation["GreaterThan"] = "GREATER_THAN";
    /** The attribute is not set (equal to `null`). */
    CollectionRuleRelation["IsNotSet"] = "IS_NOT_SET";
    /** The attribute is set (not equal to `null`). */
    CollectionRuleRelation["IsSet"] = "IS_SET";
    /** The attribute is less than the condition. */
    CollectionRuleRelation["LessThan"] = "LESS_THAN";
    /** The attribute does not contain the condition. */
    CollectionRuleRelation["NotContains"] = "NOT_CONTAINS";
    /** The attribute does not equal the condition. */
    CollectionRuleRelation["NotEquals"] = "NOT_EQUALS";
    /** The attribute starts with the condition. */
    CollectionRuleRelation["StartsWith"] = "STARTS_WITH";
})(CollectionRuleRelation = exports.CollectionRuleRelation || (exports.CollectionRuleRelation = {}));
/** The set of valid sort keys for the Collection query. */
var CollectionSortKeys;
(function (CollectionSortKeys) {
    /** Sort by the `id` value. */
    CollectionSortKeys["Id"] = "ID";
    /**
     * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
     * Don't use this sort key when no search query is specified.
     *
     */
    CollectionSortKeys["Relevance"] = "RELEVANCE";
    /** Sort by the `title` value. */
    CollectionSortKeys["Title"] = "TITLE";
    /** Sort by the `updated_at` value. */
    CollectionSortKeys["UpdatedAt"] = "UPDATED_AT";
})(CollectionSortKeys = exports.CollectionSortKeys || (exports.CollectionSortKeys = {}));
/** Specifies the sort order for the products in the collection. */
var CollectionSortOrder;
(function (CollectionSortOrder) {
    /** Alphabetically, in ascending order (A - Z). */
    CollectionSortOrder["AlphaAsc"] = "ALPHA_ASC";
    /** Alphabetically, in descending order (Z - A). */
    CollectionSortOrder["AlphaDesc"] = "ALPHA_DESC";
    /** By best-selling products. */
    CollectionSortOrder["BestSelling"] = "BEST_SELLING";
    /** By date created, in ascending order (oldest - newest). */
    CollectionSortOrder["Created"] = "CREATED";
    /** By date created, in descending order (newest - oldest). */
    CollectionSortOrder["CreatedDesc"] = "CREATED_DESC";
    /** In the order set manually by the merchant. */
    CollectionSortOrder["Manual"] = "MANUAL";
    /** By price, in ascending order (lowest - highest). */
    CollectionSortOrder["PriceAsc"] = "PRICE_ASC";
    /** By price, in descending order (highest - lowest). */
    CollectionSortOrder["PriceDesc"] = "PRICE_DESC";
})(CollectionSortOrder = exports.CollectionSortOrder || (exports.CollectionSortOrder = {}));
/** The valid values for the address type of a company. */
var CompanyAddressType;
(function (CompanyAddressType) {
    /** The address is a billing address. */
    CompanyAddressType["Billing"] = "BILLING";
    /** The address is a shipping address. */
    CompanyAddressType["Shipping"] = "SHIPPING";
})(CompanyAddressType = exports.CompanyAddressType || (exports.CompanyAddressType = {}));
/** The set of valid sort keys for the CompanyContactRoleAssignment query. */
var CompanyContactRoleAssignmentSortKeys;
(function (CompanyContactRoleAssignmentSortKeys) {
    /** Sort by the `created_at` value. */
    CompanyContactRoleAssignmentSortKeys["CreatedAt"] = "CREATED_AT";
    /** Sort by the `id` value. */
    CompanyContactRoleAssignmentSortKeys["Id"] = "ID";
    /** Sort by the `location_name` value. */
    CompanyContactRoleAssignmentSortKeys["LocationName"] = "LOCATION_NAME";
    /**
     * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
     * Don't use this sort key when no search query is specified.
     *
     */
    CompanyContactRoleAssignmentSortKeys["Relevance"] = "RELEVANCE";
    /** Sort by the `updated_at` value. */
    CompanyContactRoleAssignmentSortKeys["UpdatedAt"] = "UPDATED_AT";
})(CompanyContactRoleAssignmentSortKeys = exports.CompanyContactRoleAssignmentSortKeys || (exports.CompanyContactRoleAssignmentSortKeys = {}));
/** The set of valid sort keys for the CompanyContactRole query. */
var CompanyContactRoleSortKeys;
(function (CompanyContactRoleSortKeys) {
    /** Sort by the `created_at` value. */
    CompanyContactRoleSortKeys["CreatedAt"] = "CREATED_AT";
    /** Sort by the `id` value. */
    CompanyContactRoleSortKeys["Id"] = "ID";
    /**
     * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
     * Don't use this sort key when no search query is specified.
     *
     */
    CompanyContactRoleSortKeys["Relevance"] = "RELEVANCE";
    /** Sort by the `updated_at` value. */
    CompanyContactRoleSortKeys["UpdatedAt"] = "UPDATED_AT";
})(CompanyContactRoleSortKeys = exports.CompanyContactRoleSortKeys || (exports.CompanyContactRoleSortKeys = {}));
/** The set of valid sort keys for the CompanyContact query. */
var CompanyContactSortKeys;
(function (CompanyContactSortKeys) {
    /** Sort by the `company_id` value. */
    CompanyContactSortKeys["CompanyId"] = "COMPANY_ID";
    /** Sort by the `created_at` value. */
    CompanyContactSortKeys["CreatedAt"] = "CREATED_AT";
    /** Sort by the `email` value. */
    CompanyContactSortKeys["Email"] = "EMAIL";
    /** Sort by the `id` value. */
    CompanyContactSortKeys["Id"] = "ID";
    /** Sort by the `name` value. */
    CompanyContactSortKeys["Name"] = "NAME";
    /** Sort by the `name_email` value. */
    CompanyContactSortKeys["NameEmail"] = "NAME_EMAIL";
    /**
     * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
     * Don't use this sort key when no search query is specified.
     *
     */
    CompanyContactSortKeys["Relevance"] = "RELEVANCE";
    /** Sort by the `title` value. */
    CompanyContactSortKeys["Title"] = "TITLE";
    /** Sort by the `updated_at` value. */
    CompanyContactSortKeys["UpdatedAt"] = "UPDATED_AT";
})(CompanyContactSortKeys = exports.CompanyContactSortKeys || (exports.CompanyContactSortKeys = {}));
/** The set of valid sort keys for the CompanyLocation query. */
var CompanyLocationSortKeys;
(function (CompanyLocationSortKeys) {
    /** Sort by the `company_and_location_name` value. */
    CompanyLocationSortKeys["CompanyAndLocationName"] = "COMPANY_AND_LOCATION_NAME";
    /** Sort by the `company_id` value. */
    CompanyLocationSortKeys["CompanyId"] = "COMPANY_ID";
    /** Sort by the `created_at` value. */
    CompanyLocationSortKeys["CreatedAt"] = "CREATED_AT";
    /** Sort by the `id` value. */
    CompanyLocationSortKeys["Id"] = "ID";
    /** Sort by the `name` value. */
    CompanyLocationSortKeys["Name"] = "NAME";
    /**
     * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
     * Don't use this sort key when no search query is specified.
     *
     */
    CompanyLocationSortKeys["Relevance"] = "RELEVANCE";
    /** Sort by the `updated_at` value. */
    CompanyLocationSortKeys["UpdatedAt"] = "UPDATED_AT";
})(CompanyLocationSortKeys = exports.CompanyLocationSortKeys || (exports.CompanyLocationSortKeys = {}));
/** The set of valid sort keys for the Company query. */
var CompanySortKeys;
(function (CompanySortKeys) {
    /** Sort by the `created_at` value. */
    CompanySortKeys["CreatedAt"] = "CREATED_AT";
    /** Sort by the `id` value. */
    CompanySortKeys["Id"] = "ID";
    /** Sort by the `name` value. */
    CompanySortKeys["Name"] = "NAME";
    /** Sort by the `order_count` value. */
    CompanySortKeys["OrderCount"] = "ORDER_COUNT";
    /**
     * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
     * Don't use this sort key when no search query is specified.
     *
     */
    CompanySortKeys["Relevance"] = "RELEVANCE";
    /** Sort by the `since_date` value. */
    CompanySortKeys["SinceDate"] = "SINCE_DATE";
    /** Sort by the `total_spent` value. */
    CompanySortKeys["TotalSpent"] = "TOTAL_SPENT";
    /** Sort by the `updated_at` value. */
    CompanySortKeys["UpdatedAt"] = "UPDATED_AT";
})(CompanySortKeys = exports.CompanySortKeys || (exports.CompanySortKeys = {}));
/**
 * The code designating a country/region, which generally follows ISO 3166-1 alpha-2 guidelines.
 * If a territory doesn't have a country code value in the `CountryCode` enum, then it might be considered a subdivision
 * of another country. For example, the territories associated with Spain are represented by the country code `ES`,
 * and the territories associated with the United States of America are represented by the country code `US`.
 *
 */
var CountryCode;
(function (CountryCode) {
    /** Ascension Island. */
    CountryCode["Ac"] = "AC";
    /** Andorra. */
    CountryCode["Ad"] = "AD";
    /** United Arab Emirates. */
    CountryCode["Ae"] = "AE";
    /** Afghanistan. */
    CountryCode["Af"] = "AF";
    /** Antigua & Barbuda. */
    CountryCode["Ag"] = "AG";
    /** Anguilla. */
    CountryCode["Ai"] = "AI";
    /** Albania. */
    CountryCode["Al"] = "AL";
    /** Armenia. */
    CountryCode["Am"] = "AM";
    /** Netherlands Antilles. */
    CountryCode["An"] = "AN";
    /** Angola. */
    CountryCode["Ao"] = "AO";
    /** Argentina. */
    CountryCode["Ar"] = "AR";
    /** Austria. */
    CountryCode["At"] = "AT";
    /** Australia. */
    CountryCode["Au"] = "AU";
    /** Aruba. */
    CountryCode["Aw"] = "AW";
    /** Åland Islands. */
    CountryCode["Ax"] = "AX";
    /** Azerbaijan. */
    CountryCode["Az"] = "AZ";
    /** Bosnia & Herzegovina. */
    CountryCode["Ba"] = "BA";
    /** Barbados. */
    CountryCode["Bb"] = "BB";
    /** Bangladesh. */
    CountryCode["Bd"] = "BD";
    /** Belgium. */
    CountryCode["Be"] = "BE";
    /** Burkina Faso. */
    CountryCode["Bf"] = "BF";
    /** Bulgaria. */
    CountryCode["Bg"] = "BG";
    /** Bahrain. */
    CountryCode["Bh"] = "BH";
    /** Burundi. */
    CountryCode["Bi"] = "BI";
    /** Benin. */
    CountryCode["Bj"] = "BJ";
    /** St. Barthélemy. */
    CountryCode["Bl"] = "BL";
    /** Bermuda. */
    CountryCode["Bm"] = "BM";
    /** Brunei. */
    CountryCode["Bn"] = "BN";
    /** Bolivia. */
    CountryCode["Bo"] = "BO";
    /** Caribbean Netherlands. */
    CountryCode["Bq"] = "BQ";
    /** Brazil. */
    CountryCode["Br"] = "BR";
    /** Bahamas. */
    CountryCode["Bs"] = "BS";
    /** Bhutan. */
    CountryCode["Bt"] = "BT";
    /** Bouvet Island. */
    CountryCode["Bv"] = "BV";
    /** Botswana. */
    CountryCode["Bw"] = "BW";
    /** Belarus. */
    CountryCode["By"] = "BY";
    /** Belize. */
    CountryCode["Bz"] = "BZ";
    /** Canada. */
    CountryCode["Ca"] = "CA";
    /** Cocos (Keeling) Islands. */
    CountryCode["Cc"] = "CC";
    /** Congo - Kinshasa. */
    CountryCode["Cd"] = "CD";
    /** Central African Republic. */
    CountryCode["Cf"] = "CF";
    /** Congo - Brazzaville. */
    CountryCode["Cg"] = "CG";
    /** Switzerland. */
    CountryCode["Ch"] = "CH";
    /** Côte d’Ivoire. */
    CountryCode["Ci"] = "CI";
    /** Cook Islands. */
    CountryCode["Ck"] = "CK";
    /** Chile. */
    CountryCode["Cl"] = "CL";
    /** Cameroon. */
    CountryCode["Cm"] = "CM";
    /** China. */
    CountryCode["Cn"] = "CN";
    /** Colombia. */
    CountryCode["Co"] = "CO";
    /** Costa Rica. */
    CountryCode["Cr"] = "CR";
    /** Cuba. */
    CountryCode["Cu"] = "CU";
    /** Cape Verde. */
    CountryCode["Cv"] = "CV";
    /** Curaçao. */
    CountryCode["Cw"] = "CW";
    /** Christmas Island. */
    CountryCode["Cx"] = "CX";
    /** Cyprus. */
    CountryCode["Cy"] = "CY";
    /** Czechia. */
    CountryCode["Cz"] = "CZ";
    /** Germany. */
    CountryCode["De"] = "DE";
    /** Djibouti. */
    CountryCode["Dj"] = "DJ";
    /** Denmark. */
    CountryCode["Dk"] = "DK";
    /** Dominica. */
    CountryCode["Dm"] = "DM";
    /** Dominican Republic. */
    CountryCode["Do"] = "DO";
    /** Algeria. */
    CountryCode["Dz"] = "DZ";
    /** Ecuador. */
    CountryCode["Ec"] = "EC";
    /** Estonia. */
    CountryCode["Ee"] = "EE";
    /** Egypt. */
    CountryCode["Eg"] = "EG";
    /** Western Sahara. */
    CountryCode["Eh"] = "EH";
    /** Eritrea. */
    CountryCode["Er"] = "ER";
    /** Spain. */
    CountryCode["Es"] = "ES";
    /** Ethiopia. */
    CountryCode["Et"] = "ET";
    /** Finland. */
    CountryCode["Fi"] = "FI";
    /** Fiji. */
    CountryCode["Fj"] = "FJ";
    /** Falkland Islands. */
    CountryCode["Fk"] = "FK";
    /** Faroe Islands. */
    CountryCode["Fo"] = "FO";
    /** France. */
    CountryCode["Fr"] = "FR";
    /** Gabon. */
    CountryCode["Ga"] = "GA";
    /** United Kingdom. */
    CountryCode["Gb"] = "GB";
    /** Grenada. */
    CountryCode["Gd"] = "GD";
    /** Georgia. */
    CountryCode["Ge"] = "GE";
    /** French Guiana. */
    CountryCode["Gf"] = "GF";
    /** Guernsey. */
    CountryCode["Gg"] = "GG";
    /** Ghana. */
    CountryCode["Gh"] = "GH";
    /** Gibraltar. */
    CountryCode["Gi"] = "GI";
    /** Greenland. */
    CountryCode["Gl"] = "GL";
    /** Gambia. */
    CountryCode["Gm"] = "GM";
    /** Guinea. */
    CountryCode["Gn"] = "GN";
    /** Guadeloupe. */
    CountryCode["Gp"] = "GP";
    /** Equatorial Guinea. */
    CountryCode["Gq"] = "GQ";
    /** Greece. */
    CountryCode["Gr"] = "GR";
    /** South Georgia & South Sandwich Islands. */
    CountryCode["Gs"] = "GS";
    /** Guatemala. */
    CountryCode["Gt"] = "GT";
    /** Guinea-Bissau. */
    CountryCode["Gw"] = "GW";
    /** Guyana. */
    CountryCode["Gy"] = "GY";
    /** Hong Kong SAR. */
    CountryCode["Hk"] = "HK";
    /** Heard & McDonald Islands. */
    CountryCode["Hm"] = "HM";
    /** Honduras. */
    CountryCode["Hn"] = "HN";
    /** Croatia. */
    CountryCode["Hr"] = "HR";
    /** Haiti. */
    CountryCode["Ht"] = "HT";
    /** Hungary. */
    CountryCode["Hu"] = "HU";
    /** Indonesia. */
    CountryCode["Id"] = "ID";
    /** Ireland. */
    CountryCode["Ie"] = "IE";
    /** Israel. */
    CountryCode["Il"] = "IL";
    /** Isle of Man. */
    CountryCode["Im"] = "IM";
    /** India. */
    CountryCode["In"] = "IN";
    /** British Indian Ocean Territory. */
    CountryCode["Io"] = "IO";
    /** Iraq. */
    CountryCode["Iq"] = "IQ";
    /** Iran. */
    CountryCode["Ir"] = "IR";
    /** Iceland. */
    CountryCode["Is"] = "IS";
    /** Italy. */
    CountryCode["It"] = "IT";
    /** Jersey. */
    CountryCode["Je"] = "JE";
    /** Jamaica. */
    CountryCode["Jm"] = "JM";
    /** Jordan. */
    CountryCode["Jo"] = "JO";
    /** Japan. */
    CountryCode["Jp"] = "JP";
    /** Kenya. */
    CountryCode["Ke"] = "KE";
    /** Kyrgyzstan. */
    CountryCode["Kg"] = "KG";
    /** Cambodia. */
    CountryCode["Kh"] = "KH";
    /** Kiribati. */
    CountryCode["Ki"] = "KI";
    /** Comoros. */
    CountryCode["Km"] = "KM";
    /** St. Kitts & Nevis. */
    CountryCode["Kn"] = "KN";
    /** North Korea. */
    CountryCode["Kp"] = "KP";
    /** South Korea. */
    CountryCode["Kr"] = "KR";
    /** Kuwait. */
    CountryCode["Kw"] = "KW";
    /** Cayman Islands. */
    CountryCode["Ky"] = "KY";
    /** Kazakhstan. */
    CountryCode["Kz"] = "KZ";
    /** Laos. */
    CountryCode["La"] = "LA";
    /** Lebanon. */
    CountryCode["Lb"] = "LB";
    /** St. Lucia. */
    CountryCode["Lc"] = "LC";
    /** Liechtenstein. */
    CountryCode["Li"] = "LI";
    /** Sri Lanka. */
    CountryCode["Lk"] = "LK";
    /** Liberia. */
    CountryCode["Lr"] = "LR";
    /** Lesotho. */
    CountryCode["Ls"] = "LS";
    /** Lithuania. */
    CountryCode["Lt"] = "LT";
    /** Luxembourg. */
    CountryCode["Lu"] = "LU";
    /** Latvia. */
    CountryCode["Lv"] = "LV";
    /** Libya. */
    CountryCode["Ly"] = "LY";
    /** Morocco. */
    CountryCode["Ma"] = "MA";
    /** Monaco. */
    CountryCode["Mc"] = "MC";
    /** Moldova. */
    CountryCode["Md"] = "MD";
    /** Montenegro. */
    CountryCode["Me"] = "ME";
    /** St. Martin. */
    CountryCode["Mf"] = "MF";
    /** Madagascar. */
    CountryCode["Mg"] = "MG";
    /** North Macedonia. */
    CountryCode["Mk"] = "MK";
    /** Mali. */
    CountryCode["Ml"] = "ML";
    /** Myanmar (Burma). */
    CountryCode["Mm"] = "MM";
    /** Mongolia. */
    CountryCode["Mn"] = "MN";
    /** Macao SAR. */
    CountryCode["Mo"] = "MO";
    /** Martinique. */
    CountryCode["Mq"] = "MQ";
    /** Mauritania. */
    CountryCode["Mr"] = "MR";
    /** Montserrat. */
    CountryCode["Ms"] = "MS";
    /** Malta. */
    CountryCode["Mt"] = "MT";
    /** Mauritius. */
    CountryCode["Mu"] = "MU";
    /** Maldives. */
    CountryCode["Mv"] = "MV";
    /** Malawi. */
    CountryCode["Mw"] = "MW";
    /** Mexico. */
    CountryCode["Mx"] = "MX";
    /** Malaysia. */
    CountryCode["My"] = "MY";
    /** Mozambique. */
    CountryCode["Mz"] = "MZ";
    /** Namibia. */
    CountryCode["Na"] = "NA";
    /** New Caledonia. */
    CountryCode["Nc"] = "NC";
    /** Niger. */
    CountryCode["Ne"] = "NE";
    /** Norfolk Island. */
    CountryCode["Nf"] = "NF";
    /** Nigeria. */
    CountryCode["Ng"] = "NG";
    /** Nicaragua. */
    CountryCode["Ni"] = "NI";
    /** Netherlands. */
    CountryCode["Nl"] = "NL";
    /** Norway. */
    CountryCode["No"] = "NO";
    /** Nepal. */
    CountryCode["Np"] = "NP";
    /** Nauru. */
    CountryCode["Nr"] = "NR";
    /** Niue. */
    CountryCode["Nu"] = "NU";
    /** New Zealand. */
    CountryCode["Nz"] = "NZ";
    /** Oman. */
    CountryCode["Om"] = "OM";
    /** Panama. */
    CountryCode["Pa"] = "PA";
    /** Peru. */
    CountryCode["Pe"] = "PE";
    /** French Polynesia. */
    CountryCode["Pf"] = "PF";
    /** Papua New Guinea. */
    CountryCode["Pg"] = "PG";
    /** Philippines. */
    CountryCode["Ph"] = "PH";
    /** Pakistan. */
    CountryCode["Pk"] = "PK";
    /** Poland. */
    CountryCode["Pl"] = "PL";
    /** St. Pierre & Miquelon. */
    CountryCode["Pm"] = "PM";
    /** Pitcairn Islands. */
    CountryCode["Pn"] = "PN";
    /** Palestinian Territories. */
    CountryCode["Ps"] = "PS";
    /** Portugal. */
    CountryCode["Pt"] = "PT";
    /** Paraguay. */
    CountryCode["Py"] = "PY";
    /** Qatar. */
    CountryCode["Qa"] = "QA";
    /** Réunion. */
    CountryCode["Re"] = "RE";
    /** Romania. */
    CountryCode["Ro"] = "RO";
    /** Serbia. */
    CountryCode["Rs"] = "RS";
    /** Russia. */
    CountryCode["Ru"] = "RU";
    /** Rwanda. */
    CountryCode["Rw"] = "RW";
    /** Saudi Arabia. */
    CountryCode["Sa"] = "SA";
    /** Solomon Islands. */
    CountryCode["Sb"] = "SB";
    /** Seychelles. */
    CountryCode["Sc"] = "SC";
    /** Sudan. */
    CountryCode["Sd"] = "SD";
    /** Sweden. */
    CountryCode["Se"] = "SE";
    /** Singapore. */
    CountryCode["Sg"] = "SG";
    /** St. Helena. */
    CountryCode["Sh"] = "SH";
    /** Slovenia. */
    CountryCode["Si"] = "SI";
    /** Svalbard & Jan Mayen. */
    CountryCode["Sj"] = "SJ";
    /** Slovakia. */
    CountryCode["Sk"] = "SK";
    /** Sierra Leone. */
    CountryCode["Sl"] = "SL";
    /** San Marino. */
    CountryCode["Sm"] = "SM";
    /** Senegal. */
    CountryCode["Sn"] = "SN";
    /** Somalia. */
    CountryCode["So"] = "SO";
    /** Suriname. */
    CountryCode["Sr"] = "SR";
    /** South Sudan. */
    CountryCode["Ss"] = "SS";
    /** São Tomé & Príncipe. */
    CountryCode["St"] = "ST";
    /** El Salvador. */
    CountryCode["Sv"] = "SV";
    /** Sint Maarten. */
    CountryCode["Sx"] = "SX";
    /** Syria. */
    CountryCode["Sy"] = "SY";
    /** Eswatini. */
    CountryCode["Sz"] = "SZ";
    /** Tristan da Cunha. */
    CountryCode["Ta"] = "TA";
    /** Turks & Caicos Islands. */
    CountryCode["Tc"] = "TC";
    /** Chad. */
    CountryCode["Td"] = "TD";
    /** French Southern Territories. */
    CountryCode["Tf"] = "TF";
    /** Togo. */
    CountryCode["Tg"] = "TG";
    /** Thailand. */
    CountryCode["Th"] = "TH";
    /** Tajikistan. */
    CountryCode["Tj"] = "TJ";
    /** Tokelau. */
    CountryCode["Tk"] = "TK";
    /** Timor-Leste. */
    CountryCode["Tl"] = "TL";
    /** Turkmenistan. */
    CountryCode["Tm"] = "TM";
    /** Tunisia. */
    CountryCode["Tn"] = "TN";
    /** Tonga. */
    CountryCode["To"] = "TO";
    /** Turkey. */
    CountryCode["Tr"] = "TR";
    /** Trinidad & Tobago. */
    CountryCode["Tt"] = "TT";
    /** Tuvalu. */
    CountryCode["Tv"] = "TV";
    /** Taiwan. */
    CountryCode["Tw"] = "TW";
    /** Tanzania. */
    CountryCode["Tz"] = "TZ";
    /** Ukraine. */
    CountryCode["Ua"] = "UA";
    /** Uganda. */
    CountryCode["Ug"] = "UG";
    /** U.S. Outlying Islands. */
    CountryCode["Um"] = "UM";
    /** United States. */
    CountryCode["Us"] = "US";
    /** Uruguay. */
    CountryCode["Uy"] = "UY";
    /** Uzbekistan. */
    CountryCode["Uz"] = "UZ";
    /** Vatican City. */
    CountryCode["Va"] = "VA";
    /** St. Vincent & Grenadines. */
    CountryCode["Vc"] = "VC";
    /** Venezuela. */
    CountryCode["Ve"] = "VE";
    /** British Virgin Islands. */
    CountryCode["Vg"] = "VG";
    /** Vietnam. */
    CountryCode["Vn"] = "VN";
    /** Vanuatu. */
    CountryCode["Vu"] = "VU";
    /** Wallis & Futuna. */
    CountryCode["Wf"] = "WF";
    /** Samoa. */
    CountryCode["Ws"] = "WS";
    /** Kosovo. */
    CountryCode["Xk"] = "XK";
    /** Yemen. */
    CountryCode["Ye"] = "YE";
    /** Mayotte. */
    CountryCode["Yt"] = "YT";
    /** South Africa. */
    CountryCode["Za"] = "ZA";
    /** Zambia. */
    CountryCode["Zm"] = "ZM";
    /** Zimbabwe. */
    CountryCode["Zw"] = "ZW";
    /** Unknown Region. */
    CountryCode["Zz"] = "ZZ";
})(CountryCode = exports.CountryCode || (exports.CountryCode = {}));
/** The part of the image that should remain after cropping. */
var CropRegion;
(function (CropRegion) {
    /** Keep the bottom of the image. */
    CropRegion["Bottom"] = "BOTTOM";
    /** Keep the center of the image. */
    CropRegion["Center"] = "CENTER";
    /** Keep the left of the image. */
    CropRegion["Left"] = "LEFT";
    /** Keep the right of the image. */
    CropRegion["Right"] = "RIGHT";
    /** Keep the top of the image. */
    CropRegion["Top"] = "TOP";
})(CropRegion = exports.CropRegion || (exports.CropRegion = {}));
/**
 * The three-letter currency codes that represent the world currencies used in stores. These include standard ISO 4217 codes, legacy codes,
 * and non-standard codes.
 *
 */
var CurrencyCode;
(function (CurrencyCode) {
    /** United Arab Emirates Dirham (AED). */
    CurrencyCode["Aed"] = "AED";
    /** Afghan Afghani (AFN). */
    CurrencyCode["Afn"] = "AFN";
    /** Albanian Lek (ALL). */
    CurrencyCode["All"] = "ALL";
    /** Armenian Dram (AMD). */
    CurrencyCode["Amd"] = "AMD";
    /** Netherlands Antillean Guilder. */
    CurrencyCode["Ang"] = "ANG";
    /** Angolan Kwanza (AOA). */
    CurrencyCode["Aoa"] = "AOA";
    /** Argentine Pesos (ARS). */
    CurrencyCode["Ars"] = "ARS";
    /** Australian Dollars (AUD). */
    CurrencyCode["Aud"] = "AUD";
    /** Aruban Florin (AWG). */
    CurrencyCode["Awg"] = "AWG";
    /** Azerbaijani Manat (AZN). */
    CurrencyCode["Azn"] = "AZN";
    /** Bosnia and Herzegovina Convertible Mark (BAM). */
    CurrencyCode["Bam"] = "BAM";
    /** Barbadian Dollar (BBD). */
    CurrencyCode["Bbd"] = "BBD";
    /** Bangladesh Taka (BDT). */
    CurrencyCode["Bdt"] = "BDT";
    /** Bulgarian Lev (BGN). */
    CurrencyCode["Bgn"] = "BGN";
    /** Bahraini Dinar (BHD). */
    CurrencyCode["Bhd"] = "BHD";
    /** Burundian Franc (BIF). */
    CurrencyCode["Bif"] = "BIF";
    /** Bermudian Dollar (BMD). */
    CurrencyCode["Bmd"] = "BMD";
    /** Brunei Dollar (BND). */
    CurrencyCode["Bnd"] = "BND";
    /** Bolivian Boliviano (BOB). */
    CurrencyCode["Bob"] = "BOB";
    /** Brazilian Real (BRL). */
    CurrencyCode["Brl"] = "BRL";
    /** Bahamian Dollar (BSD). */
    CurrencyCode["Bsd"] = "BSD";
    /** Bhutanese Ngultrum (BTN). */
    CurrencyCode["Btn"] = "BTN";
    /** Botswana Pula (BWP). */
    CurrencyCode["Bwp"] = "BWP";
    /** Belarusian Ruble (BYN). */
    CurrencyCode["Byn"] = "BYN";
    /**
     * Belarusian Ruble (BYR).
     * @deprecated `BYR` is deprecated. Use `BYN` available from version `2021-01` onwards instead.
     */
    CurrencyCode["Byr"] = "BYR";
    /** Belize Dollar (BZD). */
    CurrencyCode["Bzd"] = "BZD";
    /** Canadian Dollars (CAD). */
    CurrencyCode["Cad"] = "CAD";
    /** Congolese franc (CDF). */
    CurrencyCode["Cdf"] = "CDF";
    /** Swiss Francs (CHF). */
    CurrencyCode["Chf"] = "CHF";
    /** Chilean Peso (CLP). */
    CurrencyCode["Clp"] = "CLP";
    /** Chinese Yuan Renminbi (CNY). */
    CurrencyCode["Cny"] = "CNY";
    /** Colombian Peso (COP). */
    CurrencyCode["Cop"] = "COP";
    /** Costa Rican Colones (CRC). */
    CurrencyCode["Crc"] = "CRC";
    /** Cape Verdean escudo (CVE). */
    CurrencyCode["Cve"] = "CVE";
    /** Czech Koruny (CZK). */
    CurrencyCode["Czk"] = "CZK";
    /** Djiboutian Franc (DJF). */
    CurrencyCode["Djf"] = "DJF";
    /** Danish Kroner (DKK). */
    CurrencyCode["Dkk"] = "DKK";
    /** Dominican Peso (DOP). */
    CurrencyCode["Dop"] = "DOP";
    /** Algerian Dinar (DZD). */
    CurrencyCode["Dzd"] = "DZD";
    /** Egyptian Pound (EGP). */
    CurrencyCode["Egp"] = "EGP";
    /** Eritrean Nakfa (ERN). */
    CurrencyCode["Ern"] = "ERN";
    /** Ethiopian Birr (ETB). */
    CurrencyCode["Etb"] = "ETB";
    /** Euro (EUR). */
    CurrencyCode["Eur"] = "EUR";
    /** Fijian Dollars (FJD). */
    CurrencyCode["Fjd"] = "FJD";
    /** Falkland Islands Pounds (FKP). */
    CurrencyCode["Fkp"] = "FKP";
    /** United Kingdom Pounds (GBP). */
    CurrencyCode["Gbp"] = "GBP";
    /** Georgian Lari (GEL). */
    CurrencyCode["Gel"] = "GEL";
    /** Ghanaian Cedi (GHS). */
    CurrencyCode["Ghs"] = "GHS";
    /** Gibraltar Pounds (GIP). */
    CurrencyCode["Gip"] = "GIP";
    /** Gambian Dalasi (GMD). */
    CurrencyCode["Gmd"] = "GMD";
    /** Guinean Franc (GNF). */
    CurrencyCode["Gnf"] = "GNF";
    /** Guatemalan Quetzal (GTQ). */
    CurrencyCode["Gtq"] = "GTQ";
    /** Guyanese Dollar (GYD). */
    CurrencyCode["Gyd"] = "GYD";
    /** Hong Kong Dollars (HKD). */
    CurrencyCode["Hkd"] = "HKD";
    /** Honduran Lempira (HNL). */
    CurrencyCode["Hnl"] = "HNL";
    /** Croatian Kuna (HRK). */
    CurrencyCode["Hrk"] = "HRK";
    /** Haitian Gourde (HTG). */
    CurrencyCode["Htg"] = "HTG";
    /** Hungarian Forint (HUF). */
    CurrencyCode["Huf"] = "HUF";
    /** Indonesian Rupiah (IDR). */
    CurrencyCode["Idr"] = "IDR";
    /** Israeli New Shekel (NIS). */
    CurrencyCode["Ils"] = "ILS";
    /** Indian Rupees (INR). */
    CurrencyCode["Inr"] = "INR";
    /** Iraqi Dinar (IQD). */
    CurrencyCode["Iqd"] = "IQD";
    /** Iranian Rial (IRR). */
    CurrencyCode["Irr"] = "IRR";
    /** Icelandic Kronur (ISK). */
    CurrencyCode["Isk"] = "ISK";
    /** Jersey Pound. */
    CurrencyCode["Jep"] = "JEP";
    /** Jamaican Dollars (JMD). */
    CurrencyCode["Jmd"] = "JMD";
    /** Jordanian Dinar (JOD). */
    CurrencyCode["Jod"] = "JOD";
    /** Japanese Yen (JPY). */
    CurrencyCode["Jpy"] = "JPY";
    /** Kenyan Shilling (KES). */
    CurrencyCode["Kes"] = "KES";
    /** Kyrgyzstani Som (KGS). */
    CurrencyCode["Kgs"] = "KGS";
    /** Cambodian Riel. */
    CurrencyCode["Khr"] = "KHR";
    /** Kiribati Dollar (KID). */
    CurrencyCode["Kid"] = "KID";
    /** Comorian Franc (KMF). */
    CurrencyCode["Kmf"] = "KMF";
    /** South Korean Won (KRW). */
    CurrencyCode["Krw"] = "KRW";
    /** Kuwaiti Dinar (KWD). */
    CurrencyCode["Kwd"] = "KWD";
    /** Cayman Dollars (KYD). */
    CurrencyCode["Kyd"] = "KYD";
    /** Kazakhstani Tenge (KZT). */
    CurrencyCode["Kzt"] = "KZT";
    /** Laotian Kip (LAK). */
    CurrencyCode["Lak"] = "LAK";
    /** Lebanese Pounds (LBP). */
    CurrencyCode["Lbp"] = "LBP";
    /** Sri Lankan Rupees (LKR). */
    CurrencyCode["Lkr"] = "LKR";
    /** Liberian Dollar (LRD). */
    CurrencyCode["Lrd"] = "LRD";
    /** Lesotho Loti (LSL). */
    CurrencyCode["Lsl"] = "LSL";
    /** Lithuanian Litai (LTL). */
    CurrencyCode["Ltl"] = "LTL";
    /** Latvian Lati (LVL). */
    CurrencyCode["Lvl"] = "LVL";
    /** Libyan Dinar (LYD). */
    CurrencyCode["Lyd"] = "LYD";
    /** Moroccan Dirham. */
    CurrencyCode["Mad"] = "MAD";
    /** Moldovan Leu (MDL). */
    CurrencyCode["Mdl"] = "MDL";
    /** Malagasy Ariary (MGA). */
    CurrencyCode["Mga"] = "MGA";
    /** Macedonia Denar (MKD). */
    CurrencyCode["Mkd"] = "MKD";
    /** Burmese Kyat (MMK). */
    CurrencyCode["Mmk"] = "MMK";
    /** Mongolian Tugrik. */
    CurrencyCode["Mnt"] = "MNT";
    /** Macanese Pataca (MOP). */
    CurrencyCode["Mop"] = "MOP";
    /** Mauritanian Ouguiya (MRU). */
    CurrencyCode["Mru"] = "MRU";
    /** Mauritian Rupee (MUR). */
    CurrencyCode["Mur"] = "MUR";
    /** Maldivian Rufiyaa (MVR). */
    CurrencyCode["Mvr"] = "MVR";
    /** Malawian Kwacha (MWK). */
    CurrencyCode["Mwk"] = "MWK";
    /** Mexican Pesos (MXN). */
    CurrencyCode["Mxn"] = "MXN";
    /** Malaysian Ringgits (MYR). */
    CurrencyCode["Myr"] = "MYR";
    /** Mozambican Metical. */
    CurrencyCode["Mzn"] = "MZN";
    /** Namibian Dollar. */
    CurrencyCode["Nad"] = "NAD";
    /** Nigerian Naira (NGN). */
    CurrencyCode["Ngn"] = "NGN";
    /** Nicaraguan Córdoba (NIO). */
    CurrencyCode["Nio"] = "NIO";
    /** Norwegian Kroner (NOK). */
    CurrencyCode["Nok"] = "NOK";
    /** Nepalese Rupee (NPR). */
    CurrencyCode["Npr"] = "NPR";
    /** New Zealand Dollars (NZD). */
    CurrencyCode["Nzd"] = "NZD";
    /** Omani Rial (OMR). */
    CurrencyCode["Omr"] = "OMR";
    /** Panamian Balboa (PAB). */
    CurrencyCode["Pab"] = "PAB";
    /** Peruvian Nuevo Sol (PEN). */
    CurrencyCode["Pen"] = "PEN";
    /** Papua New Guinean Kina (PGK). */
    CurrencyCode["Pgk"] = "PGK";
    /** Philippine Peso (PHP). */
    CurrencyCode["Php"] = "PHP";
    /** Pakistani Rupee (PKR). */
    CurrencyCode["Pkr"] = "PKR";
    /** Polish Zlotych (PLN). */
    CurrencyCode["Pln"] = "PLN";
    /** Paraguayan Guarani (PYG). */
    CurrencyCode["Pyg"] = "PYG";
    /** Qatari Rial (QAR). */
    CurrencyCode["Qar"] = "QAR";
    /** Romanian Lei (RON). */
    CurrencyCode["Ron"] = "RON";
    /** Serbian dinar (RSD). */
    CurrencyCode["Rsd"] = "RSD";
    /** Russian Rubles (RUB). */
    CurrencyCode["Rub"] = "RUB";
    /** Rwandan Franc (RWF). */
    CurrencyCode["Rwf"] = "RWF";
    /** Saudi Riyal (SAR). */
    CurrencyCode["Sar"] = "SAR";
    /** Solomon Islands Dollar (SBD). */
    CurrencyCode["Sbd"] = "SBD";
    /** Seychellois Rupee (SCR). */
    CurrencyCode["Scr"] = "SCR";
    /** Sudanese Pound (SDG). */
    CurrencyCode["Sdg"] = "SDG";
    /** Swedish Kronor (SEK). */
    CurrencyCode["Sek"] = "SEK";
    /** Singapore Dollars (SGD). */
    CurrencyCode["Sgd"] = "SGD";
    /** Saint Helena Pounds (SHP). */
    CurrencyCode["Shp"] = "SHP";
    /** Sierra Leonean Leone (SLL). */
    CurrencyCode["Sll"] = "SLL";
    /** Somali Shilling (SOS). */
    CurrencyCode["Sos"] = "SOS";
    /** Surinamese Dollar (SRD). */
    CurrencyCode["Srd"] = "SRD";
    /** South Sudanese Pound (SSP). */
    CurrencyCode["Ssp"] = "SSP";
    /**
     * Sao Tome And Principe Dobra (STD).
     * @deprecated `STD` is deprecated. Use `STN` available from version `2022-07` onwards instead.
     */
    CurrencyCode["Std"] = "STD";
    /** Sao Tome And Principe Dobra (STN). */
    CurrencyCode["Stn"] = "STN";
    /** Syrian Pound (SYP). */
    CurrencyCode["Syp"] = "SYP";
    /** Swazi Lilangeni (SZL). */
    CurrencyCode["Szl"] = "SZL";
    /** Thai baht (THB). */
    CurrencyCode["Thb"] = "THB";
    /** Tajikistani Somoni (TJS). */
    CurrencyCode["Tjs"] = "TJS";
    /** Turkmenistani Manat (TMT). */
    CurrencyCode["Tmt"] = "TMT";
    /** Tunisian Dinar (TND). */
    CurrencyCode["Tnd"] = "TND";
    /** Tongan Pa'anga (TOP). */
    CurrencyCode["Top"] = "TOP";
    /** Turkish Lira (TRY). */
    CurrencyCode["Try"] = "TRY";
    /** Trinidad and Tobago Dollars (TTD). */
    CurrencyCode["Ttd"] = "TTD";
    /** Taiwan Dollars (TWD). */
    CurrencyCode["Twd"] = "TWD";
    /** Tanzanian Shilling (TZS). */
    CurrencyCode["Tzs"] = "TZS";
    /** Ukrainian Hryvnia (UAH). */
    CurrencyCode["Uah"] = "UAH";
    /** Ugandan Shilling (UGX). */
    CurrencyCode["Ugx"] = "UGX";
    /** United States Dollars (USD). */
    CurrencyCode["Usd"] = "USD";
    /** Uruguayan Pesos (UYU). */
    CurrencyCode["Uyu"] = "UYU";
    /** Uzbekistan som (UZS). */
    CurrencyCode["Uzs"] = "UZS";
    /** Venezuelan Bolivares (VED). */
    CurrencyCode["Ved"] = "VED";
    /**
     * Venezuelan Bolivares (VEF).
     * @deprecated `VEF` is deprecated. Use `VES` available from version `2020-10` onwards instead.
     */
    CurrencyCode["Vef"] = "VEF";
    /** Venezuelan Bolivares (VES). */
    CurrencyCode["Ves"] = "VES";
    /** Vietnamese đồng (VND). */
    CurrencyCode["Vnd"] = "VND";
    /** Vanuatu Vatu (VUV). */
    CurrencyCode["Vuv"] = "VUV";
    /** Samoan Tala (WST). */
    CurrencyCode["Wst"] = "WST";
    /** Central African CFA Franc (XAF). */
    CurrencyCode["Xaf"] = "XAF";
    /** East Caribbean Dollar (XCD). */
    CurrencyCode["Xcd"] = "XCD";
    /** West African CFA franc (XOF). */
    CurrencyCode["Xof"] = "XOF";
    /** CFP Franc (XPF). */
    CurrencyCode["Xpf"] = "XPF";
    /** Unrecognized currency. */
    CurrencyCode["Xxx"] = "XXX";
    /** Yemeni Rial (YER). */
    CurrencyCode["Yer"] = "YER";
    /** South African Rand (ZAR). */
    CurrencyCode["Zar"] = "ZAR";
    /** Zambian Kwacha (ZMW). */
    CurrencyCode["Zmw"] = "ZMW";
})(CurrencyCode = exports.CurrencyCode || (exports.CurrencyCode = {}));
/**
 * The source that collected the customer's consent to receive marketing materials.
 *
 */
var CustomerConsentCollectedFrom;
(function (CustomerConsentCollectedFrom) {
    /**
     * The customer consent was collected outside of Shopify.
     *
     */
    CustomerConsentCollectedFrom["Other"] = "OTHER";
    /**
     * The customer consent was collected by Shopify.
     *
     */
    CustomerConsentCollectedFrom["Shopify"] = "SHOPIFY";
})(CustomerConsentCollectedFrom = exports.CustomerConsentCollectedFrom || (exports.CustomerConsentCollectedFrom = {}));
/**
 * Possible marketing states for the customer’s email address.
 *
 */
var CustomerEmailAddressMarketingState;
(function (CustomerEmailAddressMarketingState) {
    /**
     * The customer’s email address marketing state is invalid.
     *
     */
    CustomerEmailAddressMarketingState["Invalid"] = "INVALID";
    /**
     * The customer is not subscribed to email marketing.
     *
     */
    CustomerEmailAddressMarketingState["NotSubscribed"] = "NOT_SUBSCRIBED";
    /**
     * The customer is in the process of subscribing to email marketing.
     *
     */
    CustomerEmailAddressMarketingState["Pending"] = "PENDING";
    /**
     * The customer is subscribed to email marketing.
     *
     */
    CustomerEmailAddressMarketingState["Subscribed"] = "SUBSCRIBED";
    /**
     * The customer is not subscribed to email marketing but was previously subscribed.
     *
     */
    CustomerEmailAddressMarketingState["Unsubscribed"] = "UNSUBSCRIBED";
})(CustomerEmailAddressMarketingState = exports.CustomerEmailAddressMarketingState || (exports.CustomerEmailAddressMarketingState = {}));
/**
 * The different levels related to whether a customer has opted in to having their opened emails tracked.
 *
 */
var CustomerEmailAddressOpenTrackingLevel;
(function (CustomerEmailAddressOpenTrackingLevel) {
    /**
     * The customer has opted in to having their open emails tracked.
     *
     */
    CustomerEmailAddressOpenTrackingLevel["OptedIn"] = "OPTED_IN";
    /**
     * The customer has opted out of having their open emails tracked.
     *
     */
    CustomerEmailAddressOpenTrackingLevel["OptedOut"] = "OPTED_OUT";
    /**
     * The customer has not specified whether they want to opt in or out of having their open emails tracked.
     *
     */
    CustomerEmailAddressOpenTrackingLevel["Unknown"] = "UNKNOWN";
})(CustomerEmailAddressOpenTrackingLevel = exports.CustomerEmailAddressOpenTrackingLevel || (exports.CustomerEmailAddressOpenTrackingLevel = {}));
/** Possible error codes that can be returned by `CustomerEmailMarketingConsentUpdateUserError`. */
var CustomerEmailMarketingConsentUpdateUserErrorCode;
(function (CustomerEmailMarketingConsentUpdateUserErrorCode) {
    /** The input value isn't included in the list. */
    CustomerEmailMarketingConsentUpdateUserErrorCode["Inclusion"] = "INCLUSION";
    /** Unexpected internal error happened. */
    CustomerEmailMarketingConsentUpdateUserErrorCode["InternalError"] = "INTERNAL_ERROR";
    /** The input value is invalid. */
    CustomerEmailMarketingConsentUpdateUserErrorCode["Invalid"] = "INVALID";
    /** Missing a required argument. */
    CustomerEmailMarketingConsentUpdateUserErrorCode["MissingArgument"] = "MISSING_ARGUMENT";
})(CustomerEmailMarketingConsentUpdateUserErrorCode = exports.CustomerEmailMarketingConsentUpdateUserErrorCode || (exports.CustomerEmailMarketingConsentUpdateUserErrorCode = {}));
/**
 * The possible email marketing states for a customer.
 *
 */
var CustomerEmailMarketingState;
(function (CustomerEmailMarketingState) {
    /**
     * The customer’s email address marketing state is invalid.
     *
     */
    CustomerEmailMarketingState["Invalid"] = "INVALID";
    /**
     * The customer isn't subscribed to email marketing.
     *
     */
    CustomerEmailMarketingState["NotSubscribed"] = "NOT_SUBSCRIBED";
    /**
     * The customer is in the process of subscribing to email marketing.
     *
     */
    CustomerEmailMarketingState["Pending"] = "PENDING";
    /**
     * The customer's personal data is erased. This value is internally-set and read-only.
     *
     */
    CustomerEmailMarketingState["Redacted"] = "REDACTED";
    /**
     * The customer is subscribed to email marketing.
     *
     */
    CustomerEmailMarketingState["Subscribed"] = "SUBSCRIBED";
    /**
     * The customer isn't currently subscribed to email marketing but was previously subscribed.
     *
     */
    CustomerEmailMarketingState["Unsubscribed"] = "UNSUBSCRIBED";
})(CustomerEmailMarketingState = exports.CustomerEmailMarketingState || (exports.CustomerEmailMarketingState = {}));
/**
 * The possible values for the marketing subscription opt-in level enabled at the time the customer consented to receive marketing information.
 *
 * The levels are defined by [the M3AAWG best practices guideline
 *   document](https://www.m3aawg.org/sites/maawg/files/news/M3AAWG_Senders_BCP_Ver3-2015-02.pdf).
 *
 */
var CustomerMarketingOptInLevel;
(function (CustomerMarketingOptInLevel) {
    /**
     * After providing their information, the customer receives a confirmation and is required to
     * perform a intermediate step before receiving marketing information.
     *
     */
    CustomerMarketingOptInLevel["ConfirmedOptIn"] = "CONFIRMED_OPT_IN";
    /**
     * After providing their information, the customer receives marketing information without any
     * intermediate steps.
     *
     */
    CustomerMarketingOptInLevel["SingleOptIn"] = "SINGLE_OPT_IN";
    /**
     * The customer receives marketing information but how they were opted in is unknown.
     *
     */
    CustomerMarketingOptInLevel["Unknown"] = "UNKNOWN";
})(CustomerMarketingOptInLevel = exports.CustomerMarketingOptInLevel || (exports.CustomerMarketingOptInLevel = {}));
/** Possible error codes that can be returned by `CustomerPaymentMethodGetUpdateUrlUserError`. */
var CustomerPaymentMethodGetUpdateUrlUserErrorCode;
(function (CustomerPaymentMethodGetUpdateUrlUserErrorCode) {
    /** Customer doesn't exist. */
    CustomerPaymentMethodGetUpdateUrlUserErrorCode["CustomerDoesNotExist"] = "CUSTOMER_DOES_NOT_EXIST";
    /** Invalid payment instrument. */
    CustomerPaymentMethodGetUpdateUrlUserErrorCode["InvalidInstrument"] = "INVALID_INSTRUMENT";
    /** Payment method doesn't exist. */
    CustomerPaymentMethodGetUpdateUrlUserErrorCode["PaymentMethodDoesNotExist"] = "PAYMENT_METHOD_DOES_NOT_EXIST";
    /** Too many requests. */
    CustomerPaymentMethodGetUpdateUrlUserErrorCode["TooManyRequests"] = "TOO_MANY_REQUESTS";
})(CustomerPaymentMethodGetUpdateUrlUserErrorCode = exports.CustomerPaymentMethodGetUpdateUrlUserErrorCode || (exports.CustomerPaymentMethodGetUpdateUrlUserErrorCode = {}));
/** Possible error codes that can be returned by `CustomerPaymentMethodRemoteUserError`. */
var CustomerPaymentMethodRemoteUserErrorCode;
(function (CustomerPaymentMethodRemoteUserErrorCode) {
    /** Authorize.net is not enabled for subscriptions. */
    CustomerPaymentMethodRemoteUserErrorCode["AuthorizeNetNotEnabledForSubscriptions"] = "AUTHORIZE_NET_NOT_ENABLED_FOR_SUBSCRIPTIONS";
    /** Braintree is not enabled for subscriptions. */
    CustomerPaymentMethodRemoteUserErrorCode["BraintreeNotEnabledForSubscriptions"] = "BRAINTREE_NOT_ENABLED_FOR_SUBSCRIPTIONS";
    /** Exactly one remote reference is required. */
    CustomerPaymentMethodRemoteUserErrorCode["ExactlyOneRemoteReferenceRequired"] = "EXACTLY_ONE_REMOTE_REFERENCE_REQUIRED";
    /** The input value is invalid. */
    CustomerPaymentMethodRemoteUserErrorCode["Invalid"] = "INVALID";
    /** The input value needs to be blank. */
    CustomerPaymentMethodRemoteUserErrorCode["Present"] = "PRESENT";
    /** The input value is already taken. */
    CustomerPaymentMethodRemoteUserErrorCode["Taken"] = "TAKEN";
})(CustomerPaymentMethodRemoteUserErrorCode = exports.CustomerPaymentMethodRemoteUserErrorCode || (exports.CustomerPaymentMethodRemoteUserErrorCode = {}));
/** The revocation reason types for a customer payment method. */
var CustomerPaymentMethodRevocationReason;
(function (CustomerPaymentMethodRevocationReason) {
    /** The Authorize.net payment gateway is not enabled. */
    CustomerPaymentMethodRevocationReason["AuthorizeNetGatewayNotEnabled"] = "AUTHORIZE_NET_GATEWAY_NOT_ENABLED";
    /** Authorize.net did not return any payment methods. Make sure that the correct Authorize.net account is linked. */
    CustomerPaymentMethodRevocationReason["AuthorizeNetReturnedNoPaymentMethod"] = "AUTHORIZE_NET_RETURNED_NO_PAYMENT_METHOD";
    /** Failed to contact Braintree API. */
    CustomerPaymentMethodRevocationReason["BraintreeApiAuthenticationError"] = "BRAINTREE_API_AUTHENTICATION_ERROR";
    /** The Braintree payment gateway is not enabled. */
    CustomerPaymentMethodRevocationReason["BraintreeGatewayNotEnabled"] = "BRAINTREE_GATEWAY_NOT_ENABLED";
    /** The Braintree payment method type should be a credit card or Apple Pay card. */
    CustomerPaymentMethodRevocationReason["BraintreePaymentMethodNotCard"] = "BRAINTREE_PAYMENT_METHOD_NOT_CARD";
    /** Braintree returned no payment methods. Make sure the correct Braintree account is linked. */
    CustomerPaymentMethodRevocationReason["BraintreeReturnedNoPaymentMethod"] = "BRAINTREE_RETURNED_NO_PAYMENT_METHOD";
    /** The credit card failed to update. */
    CustomerPaymentMethodRevocationReason["FailedToUpdateCreditCard"] = "FAILED_TO_UPDATE_CREDIT_CARD";
    /** The payment method was manually revoked. */
    CustomerPaymentMethodRevocationReason["ManuallyRevoked"] = "MANUALLY_REVOKED";
    /** The payment method was replaced with an existing payment method. The associated contracts have been migrated to the other payment method. */
    CustomerPaymentMethodRevocationReason["Merged"] = "MERGED";
    /** Failed to contact the Stripe API. */
    CustomerPaymentMethodRevocationReason["StripeApiAuthenticationError"] = "STRIPE_API_AUTHENTICATION_ERROR";
    /** Invalid request. Failed to retrieve payment method from Stripe. */
    CustomerPaymentMethodRevocationReason["StripeApiInvalidRequestError"] = "STRIPE_API_INVALID_REQUEST_ERROR";
    /** The Stripe payment gateway is not enabled. */
    CustomerPaymentMethodRevocationReason["StripeGatewayNotEnabled"] = "STRIPE_GATEWAY_NOT_ENABLED";
    /** The Stripe payment method type should be card. */
    CustomerPaymentMethodRevocationReason["StripePaymentMethodNotCard"] = "STRIPE_PAYMENT_METHOD_NOT_CARD";
    /** Stripe did not return any payment methods. Make sure that the correct Stripe account is linked. */
    CustomerPaymentMethodRevocationReason["StripeReturnedNoPaymentMethod"] = "STRIPE_RETURNED_NO_PAYMENT_METHOD";
})(CustomerPaymentMethodRevocationReason = exports.CustomerPaymentMethodRevocationReason || (exports.CustomerPaymentMethodRevocationReason = {}));
/** Possible error codes that can be returned by `CustomerPaymentMethodUserError`. */
var CustomerPaymentMethodUserErrorCode;
(function (CustomerPaymentMethodUserErrorCode) {
    /** The input value is invalid. */
    CustomerPaymentMethodUserErrorCode["Invalid"] = "INVALID";
    /** The input value needs to be blank. */
    CustomerPaymentMethodUserErrorCode["Present"] = "PRESENT";
    /** The input value is already taken. */
    CustomerPaymentMethodUserErrorCode["Taken"] = "TAKEN";
})(CustomerPaymentMethodUserErrorCode = exports.CustomerPaymentMethodUserErrorCode || (exports.CustomerPaymentMethodUserErrorCode = {}));
/** The valid tiers for the predicted spend of a customer with a shop. */
var CustomerPredictedSpendTier;
(function (CustomerPredictedSpendTier) {
    /**
     * The customer's spending is predicted to be in the top spending range for the shop in the following year.
     *
     */
    CustomerPredictedSpendTier["High"] = "HIGH";
    /**
     * The customer's spending is predicted to be zero, or in the lowest spending range for the shop in the following year.
     *
     */
    CustomerPredictedSpendTier["Low"] = "LOW";
    /**
     * The customer's spending is predicted to be in the normal spending range for the shop in the following year.
     *
     */
    CustomerPredictedSpendTier["Medium"] = "MEDIUM";
})(CustomerPredictedSpendTier = exports.CustomerPredictedSpendTier || (exports.CustomerPredictedSpendTier = {}));
/**
 * The possible product subscription states for a customer, as defined by the customer's subscription contracts.
 *
 */
var CustomerProductSubscriberStatus;
(function (CustomerProductSubscriberStatus) {
    /**
     * The customer has at least one active subscription contract.
     *
     */
    CustomerProductSubscriberStatus["Active"] = "ACTIVE";
    /**
     * The customer's last subscription contract was cancelled and there are no other active or paused
     * subscription contracts.
     *
     */
    CustomerProductSubscriberStatus["Cancelled"] = "CANCELLED";
    /**
     * The customer's last subscription contract expired and there are no other active or paused
     * subscription contracts.
     *
     */
    CustomerProductSubscriberStatus["Expired"] = "EXPIRED";
    /**
     * The customer's last subscription contract failed and there are no other active or paused
     * subscription contracts.
     *
     */
    CustomerProductSubscriberStatus["Failed"] = "FAILED";
    /**
     * The customer has never had a subscription contract.
     *
     */
    CustomerProductSubscriberStatus["NeverSubscribed"] = "NEVER_SUBSCRIBED";
    /**
     * The customer has at least one paused subscription contract and there are no other active
     * subscription contracts.
     *
     */
    CustomerProductSubscriberStatus["Paused"] = "PAUSED";
})(CustomerProductSubscriberStatus = exports.CustomerProductSubscriberStatus || (exports.CustomerProductSubscriberStatus = {}));
/** The set of valid sort keys for the CustomerSavedSearch query. */
var CustomerSavedSearchSortKeys;
(function (CustomerSavedSearchSortKeys) {
    /** Sort by the `id` value. */
    CustomerSavedSearchSortKeys["Id"] = "ID";
    /** Sort by the `name` value. */
    CustomerSavedSearchSortKeys["Name"] = "NAME";
    /**
     * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
     * Don't use this sort key when no search query is specified.
     *
     */
    CustomerSavedSearchSortKeys["Relevance"] = "RELEVANCE";
})(CustomerSavedSearchSortKeys = exports.CustomerSavedSearchSortKeys || (exports.CustomerSavedSearchSortKeys = {}));
/** Possible error codes that can be returned by `CustomerSmsMarketingConsentError`. */
var CustomerSmsMarketingConsentErrorCode;
(function (CustomerSmsMarketingConsentErrorCode) {
    /** The input value isn't included in the list. */
    CustomerSmsMarketingConsentErrorCode["Inclusion"] = "INCLUSION";
    /** Unexpected internal error happened. */
    CustomerSmsMarketingConsentErrorCode["InternalError"] = "INTERNAL_ERROR";
    /** The input value is invalid. */
    CustomerSmsMarketingConsentErrorCode["Invalid"] = "INVALID";
    /** Missing a required argument. */
    CustomerSmsMarketingConsentErrorCode["MissingArgument"] = "MISSING_ARGUMENT";
})(CustomerSmsMarketingConsentErrorCode = exports.CustomerSmsMarketingConsentErrorCode || (exports.CustomerSmsMarketingConsentErrorCode = {}));
/**
 * The valid SMS marketing states for a customer’s phone number.
 *
 */
var CustomerSmsMarketingState;
(function (CustomerSmsMarketingState) {
    /**
     * The customer hasn't subscribed to SMS marketing.
     *
     */
    CustomerSmsMarketingState["NotSubscribed"] = "NOT_SUBSCRIBED";
    /**
     * The customer is in the process of subscribing to SMS marketing.
     *
     */
    CustomerSmsMarketingState["Pending"] = "PENDING";
    /**
     * The customer's personal data is erased. This value is internally-set and read-only.
     *
     */
    CustomerSmsMarketingState["Redacted"] = "REDACTED";
    /**
     * The customer is subscribed to SMS marketing.
     *
     */
    CustomerSmsMarketingState["Subscribed"] = "SUBSCRIBED";
    /**
     * The customer isn't currently subscribed to SMS marketing but was previously subscribed.
     *
     */
    CustomerSmsMarketingState["Unsubscribed"] = "UNSUBSCRIBED";
})(CustomerSmsMarketingState = exports.CustomerSmsMarketingState || (exports.CustomerSmsMarketingState = {}));
/** The set of valid sort keys for the Customer query. */
var CustomerSortKeys;
(function (CustomerSortKeys) {
    /** Sort by the `created_at` value. */
    CustomerSortKeys["CreatedAt"] = "CREATED_AT";
    /** Sort by the `id` value. */
    CustomerSortKeys["Id"] = "ID";
    /** Sort by the `last_order_date` value. */
    CustomerSortKeys["LastOrderDate"] = "LAST_ORDER_DATE";
    /** Sort by the `location` value. */
    CustomerSortKeys["Location"] = "LOCATION";
    /** Sort by the `name` value. */
    CustomerSortKeys["Name"] = "NAME";
    /** Sort by the `orders_count` value. */
    CustomerSortKeys["OrdersCount"] = "ORDERS_COUNT";
    /**
     * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
     * Don't use this sort key when no search query is specified.
     *
     */
    CustomerSortKeys["Relevance"] = "RELEVANCE";
    /** Sort by the `total_spent` value. */
    CustomerSortKeys["TotalSpent"] = "TOTAL_SPENT";
    /** Sort by the `updated_at` value. */
    CustomerSortKeys["UpdatedAt"] = "UPDATED_AT";
})(CustomerSortKeys = exports.CustomerSortKeys || (exports.CustomerSortKeys = {}));
/** The valid values for the state of a customer's account with a shop. */
var CustomerState;
(function (CustomerState) {
    /**
     * The customer declined the email invite to create an account.
     *
     */
    CustomerState["Declined"] = "DECLINED";
    /**
     * The customer doesn't have an active account. Customer accounts can be disabled from the Shopify admin at any time.
     *
     */
    CustomerState["Disabled"] = "DISABLED";
    /**
     * The customer has created an account.
     *
     */
    CustomerState["Enabled"] = "ENABLED";
    /**
     * The customer has received an email invite to create an account.
     *
     */
    CustomerState["Invited"] = "INVITED";
})(CustomerState = exports.CustomerState || (exports.CustomerState = {}));
/** Days of the week from Monday to Sunday. */
var DayOfTheWeek;
(function (DayOfTheWeek) {
    /** Friday. */
    DayOfTheWeek["Friday"] = "FRIDAY";
    /** Monday. */
    DayOfTheWeek["Monday"] = "MONDAY";
    /** Saturday. */
    DayOfTheWeek["Saturday"] = "SATURDAY";
    /** Sunday. */
    DayOfTheWeek["Sunday"] = "SUNDAY";
    /** Thursday. */
    DayOfTheWeek["Thursday"] = "THURSDAY";
    /** Tuesday. */
    DayOfTheWeek["Tuesday"] = "TUESDAY";
    /** Wednesday. */
    DayOfTheWeek["Wednesday"] = "WEDNESDAY";
})(DayOfTheWeek = exports.DayOfTheWeek || (exports.DayOfTheWeek = {}));
/** Possible error codes that can be returned by `DelegateAccessTokenCreateUserError`. */
var DelegateAccessTokenCreateUserErrorCode;
(function (DelegateAccessTokenCreateUserErrorCode) {
    /** The parent access token can't be a delegate token. */
    DelegateAccessTokenCreateUserErrorCode["DelegateAccessToken"] = "DELEGATE_ACCESS_TOKEN";
    /** The access scope can't be empty. */
    DelegateAccessTokenCreateUserErrorCode["EmptyAccessScope"] = "EMPTY_ACCESS_SCOPE";
    /** The delegate token can't expire after the parent token. */
    DelegateAccessTokenCreateUserErrorCode["ExpiresAfterParent"] = "EXPIRES_AFTER_PARENT";
    /** The expires_in value must be greater than 0. */
    DelegateAccessTokenCreateUserErrorCode["NegativeExpiresIn"] = "NEGATIVE_EXPIRES_IN";
    /** Persistence failed. */
    DelegateAccessTokenCreateUserErrorCode["PersistenceFailed"] = "PERSISTENCE_FAILED";
    /** The parent access token can't have a refresh token. */
    DelegateAccessTokenCreateUserErrorCode["RefreshToken"] = "REFRESH_TOKEN";
    /** Unknown scopes. */
    DelegateAccessTokenCreateUserErrorCode["UnknownScopes"] = "UNKNOWN_SCOPES";
})(DelegateAccessTokenCreateUserErrorCode = exports.DelegateAccessTokenCreateUserErrorCode || (exports.DelegateAccessTokenCreateUserErrorCode = {}));
/** The set of valid sort keys for the DeletionEvent query. */
var DeletionEventSortKeys;
(function (DeletionEventSortKeys) {
    /** Sort by the `created_at` value. */
    DeletionEventSortKeys["CreatedAt"] = "CREATED_AT";
    /** Sort by the `id` value. */
    DeletionEventSortKeys["Id"] = "ID";
    /**
     * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
     * Don't use this sort key when no search query is specified.
     *
     */
    DeletionEventSortKeys["Relevance"] = "RELEVANCE";
})(DeletionEventSortKeys = exports.DeletionEventSortKeys || (exports.DeletionEventSortKeys = {}));
/** The supported subject types of deletion events. */
var DeletionEventSubjectType;
(function (DeletionEventSubjectType) {
    DeletionEventSubjectType["Collection"] = "COLLECTION";
    DeletionEventSubjectType["Product"] = "PRODUCT";
})(DeletionEventSubjectType = exports.DeletionEventSubjectType || (exports.DeletionEventSubjectType = {}));
/** The field type that the condition will be applied to. */
var DeliveryConditionField;
(function (DeliveryConditionField) {
    /** The condition will check against the total price of the order. */
    DeliveryConditionField["TotalPrice"] = "TOTAL_PRICE";
    /** The condition will check against the total weight of the order. */
    DeliveryConditionField["TotalWeight"] = "TOTAL_WEIGHT";
})(DeliveryConditionField = exports.DeliveryConditionField || (exports.DeliveryConditionField = {}));
/** The operator to use to determine if the condition passes. */
var DeliveryConditionOperator;
(function (DeliveryConditionOperator) {
    /** The condition will check whether the field is greater than or equal to the criterion. */
    DeliveryConditionOperator["GreaterThanOrEqualTo"] = "GREATER_THAN_OR_EQUAL_TO";
    /** The condition will check if the field is less than or equal to the criterion. */
    DeliveryConditionOperator["LessThanOrEqualTo"] = "LESS_THAN_OR_EQUAL_TO";
})(DeliveryConditionOperator = exports.DeliveryConditionOperator || (exports.DeliveryConditionOperator = {}));
/** Reasons the shop is blocked from converting to full multi-location delivery profiles mode. */
var DeliveryLegacyModeBlockedReason;
(function (DeliveryLegacyModeBlockedReason) {
    /**
     * Multi-Location mode is disabled. The shop can't convert to full multi-location delivery profiles mode.
     * @deprecated All shops are now using multi-location mode.
     */
    DeliveryLegacyModeBlockedReason["MultiLocationDisabled"] = "MULTI_LOCATION_DISABLED";
    /** There are no locations for this store that can fulfill online orders. */
    DeliveryLegacyModeBlockedReason["NoLocationsFulfillingOnlineOrders"] = "NO_LOCATIONS_FULFILLING_ONLINE_ORDERS";
})(DeliveryLegacyModeBlockedReason = exports.DeliveryLegacyModeBlockedReason || (exports.DeliveryLegacyModeBlockedReason = {}));
/** The different types of method definitions to filter by. */
var DeliveryMethodDefinitionType;
(function (DeliveryMethodDefinitionType) {
    /** A static merchant-defined rate. */
    DeliveryMethodDefinitionType["Merchant"] = "MERCHANT";
    /** A dynamic participant rate. */
    DeliveryMethodDefinitionType["Participant"] = "PARTICIPANT";
})(DeliveryMethodDefinitionType = exports.DeliveryMethodDefinitionType || (exports.DeliveryMethodDefinitionType = {}));
/** Possible method types that a delivery method can have. */
var DeliveryMethodType;
(function (DeliveryMethodType) {
    /** The order is delivered using a local delivery service. */
    DeliveryMethodType["Local"] = "LOCAL";
    /** No delivery is needed. */
    DeliveryMethodType["None"] = "NONE";
    /** The order is picked up by the customer. */
    DeliveryMethodType["PickUp"] = "PICK_UP";
    /** The order is delivered to a retail store. */
    DeliveryMethodType["Retail"] = "RETAIL";
    /** The order is shipped. */
    DeliveryMethodType["Shipping"] = "SHIPPING";
})(DeliveryMethodType = exports.DeliveryMethodType || (exports.DeliveryMethodType = {}));
/** Digital wallet, such as Apple Pay, which can be used for accelerated checkouts. */
var DigitalWallet;
(function (DigitalWallet) {
    /** Android Pay. */
    DigitalWallet["AndroidPay"] = "ANDROID_PAY";
    /** Apple Pay. */
    DigitalWallet["ApplePay"] = "APPLE_PAY";
    /** Google Pay. */
    DigitalWallet["GooglePay"] = "GOOGLE_PAY";
    /** Shopify Pay. */
    DigitalWallet["ShopifyPay"] = "SHOPIFY_PAY";
})(DigitalWallet = exports.DigitalWallet || (exports.DigitalWallet = {}));
/** The method by which the discount's value is allocated onto its entitled lines. */
var DiscountApplicationAllocationMethod;
(function (DiscountApplicationAllocationMethod) {
    /** The value is spread across all entitled lines. */
    DiscountApplicationAllocationMethod["Across"] = "ACROSS";
    /** The value is applied onto every entitled line. */
    DiscountApplicationAllocationMethod["Each"] = "EACH";
    /**
     * The value is specifically applied onto a particular line.
     * @deprecated Use ACROSS instead.
     */
    DiscountApplicationAllocationMethod["One"] = "ONE";
})(DiscountApplicationAllocationMethod = exports.DiscountApplicationAllocationMethod || (exports.DiscountApplicationAllocationMethod = {}));
/** The level at which the discount's value is applied. */
var DiscountApplicationLevel;
(function (DiscountApplicationLevel) {
    /**
     * The discount is applied at the line level.
     * Line level discounts are factored into the discountedUnitPriceSet on line items.
     *
     */
    DiscountApplicationLevel["Line"] = "LINE";
    /**
     * The discount is applied at the order level.
     * Order level discounts are not factored into the discountedUnitPriceSet on line items.
     *
     */
    DiscountApplicationLevel["Order"] = "ORDER";
})(DiscountApplicationLevel = exports.DiscountApplicationLevel || (exports.DiscountApplicationLevel = {}));
/**
 * The lines on the order to which the discount is applied, of the type defined by
 * the discount application's `targetType`. For example, the value `ENTITLED`, combined with a `targetType` of
 * `LINE_ITEM`, applies the discount on all line items that are entitled to the discount.
 * The value `ALL`, combined with a `targetType` of `SHIPPING_LINE`, applies the discount on all shipping lines.
 *
 */
var DiscountApplicationTargetSelection;
(function (DiscountApplicationTargetSelection) {
    /** The discount is allocated onto all the lines. */
    DiscountApplicationTargetSelection["All"] = "ALL";
    /** The discount is allocated onto only the lines that it's entitled for. */
    DiscountApplicationTargetSelection["Entitled"] = "ENTITLED";
    /** The discount is allocated onto explicitly chosen lines. */
    DiscountApplicationTargetSelection["Explicit"] = "EXPLICIT";
})(DiscountApplicationTargetSelection = exports.DiscountApplicationTargetSelection || (exports.DiscountApplicationTargetSelection = {}));
/**
 * The type of line (i.e. line item or shipping line) on an order that the discount is applicable towards.
 *
 */
var DiscountApplicationTargetType;
(function (DiscountApplicationTargetType) {
    /** The discount applies onto line items. */
    DiscountApplicationTargetType["LineItem"] = "LINE_ITEM";
    /** The discount applies onto shipping lines. */
    DiscountApplicationTargetType["ShippingLine"] = "SHIPPING_LINE";
})(DiscountApplicationTargetType = exports.DiscountApplicationTargetType || (exports.DiscountApplicationTargetType = {}));
/** The class of the discount for combining purposes. */
var DiscountClass;
(function (DiscountClass) {
    /** Combined as an order discount. */
    DiscountClass["Order"] = "ORDER";
    /** Combined as a product discount. */
    DiscountClass["Product"] = "PRODUCT";
    /** Combined as a shipping discount. */
    DiscountClass["Shipping"] = "SHIPPING";
})(DiscountClass = exports.DiscountClass || (exports.DiscountClass = {}));
/** The set of valid sort keys for the DiscountCode query. */
var DiscountCodeSortKeys;
(function (DiscountCodeSortKeys) {
    /** Sort by the `code` value. */
    DiscountCodeSortKeys["Code"] = "CODE";
    /** Sort by the `created_at` value. */
    DiscountCodeSortKeys["CreatedAt"] = "CREATED_AT";
    /** Sort by the `id` value. */
    DiscountCodeSortKeys["Id"] = "ID";
    /**
     * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
     * Don't use this sort key when no search query is specified.
     *
     */
    DiscountCodeSortKeys["Relevance"] = "RELEVANCE";
})(DiscountCodeSortKeys = exports.DiscountCodeSortKeys || (exports.DiscountCodeSortKeys = {}));
/** Possible error codes that can be returned by `DiscountUserError`. */
var DiscountErrorCode;
(function (DiscountErrorCode) {
    /** The active period overlaps with other automatic discounts. At any given time, only one automatic discount can be active. */
    DiscountErrorCode["ActivePeriodOverlap"] = "ACTIVE_PERIOD_OVERLAP";
    /** The input value is blank. */
    DiscountErrorCode["Blank"] = "BLANK";
    /** The attribute selection contains conflicting settings. */
    DiscountErrorCode["Conflict"] = "CONFLICT";
    /** The input value is already present. */
    DiscountErrorCode["Duplicate"] = "DUPLICATE";
    /** The input value should be equal to the value allowed. */
    DiscountErrorCode["EqualTo"] = "EQUAL_TO";
    /** The value exceeded the maximum allowed value. */
    DiscountErrorCode["ExceededMax"] = "EXCEEDED_MAX";
    /** The input value should be greater than the minimum allowed value. */
    DiscountErrorCode["GreaterThan"] = "GREATER_THAN";
    /** The input value should be greater than or equal to the minimum value allowed. */
    DiscountErrorCode["GreaterThanOrEqualTo"] = "GREATER_THAN_OR_EQUAL_TO";
    /** The value is already present through another selection. */
    DiscountErrorCode["ImplicitDuplicate"] = "IMPLICIT_DUPLICATE";
    /** The input value isn't included in the list. */
    DiscountErrorCode["Inclusion"] = "INCLUSION";
    /** Unexpected internal error happened. */
    DiscountErrorCode["InternalError"] = "INTERNAL_ERROR";
    /** The input value is invalid. */
    DiscountErrorCode["Invalid"] = "INVALID";
    /** The `combinesWith` settings are invalid for the discount class. */
    DiscountErrorCode["InvalidCombinesWithForDiscountClass"] = "INVALID_COMBINES_WITH_FOR_DISCOUNT_CLASS";
    /** The discountClass is invalid for the price rule. */
    DiscountErrorCode["InvalidDiscountClassForPriceRule"] = "INVALID_DISCOUNT_CLASS_FOR_PRICE_RULE";
    /** The input value should be less than the maximum value allowed. */
    DiscountErrorCode["LessThan"] = "LESS_THAN";
    /** The input value should be less than or equal to the maximum value allowed. */
    DiscountErrorCode["LessThanOrEqualTo"] = "LESS_THAN_OR_EQUAL_TO";
    /** The active period overlaps with too many other app-provided discounts. There's a limit on the number of app discounts that can be active at any given time. */
    DiscountErrorCode["MaxAppDiscounts"] = "MAX_APP_DISCOUNTS";
    /** Specify a minimum subtotal or a quantity, but not both. */
    DiscountErrorCode["MinimumSubtotalAndQuantityRangeBothPresent"] = "MINIMUM_SUBTOTAL_AND_QUANTITY_RANGE_BOTH_PRESENT";
    /** Missing a required argument. */
    DiscountErrorCode["MissingArgument"] = "MISSING_ARGUMENT";
    /** The input value needs to be blank. */
    DiscountErrorCode["Present"] = "PRESENT";
    /** The input value is already taken. */
    DiscountErrorCode["Taken"] = "TAKEN";
    /** The input value is too long. */
    DiscountErrorCode["TooLong"] = "TOO_LONG";
    /** Too many arguments provided. */
    DiscountErrorCode["TooManyArguments"] = "TOO_MANY_ARGUMENTS";
    /** The input value is too short. */
    DiscountErrorCode["TooShort"] = "TOO_SHORT";
    /** The value is outside of the allowed range. */
    DiscountErrorCode["ValueOutsideRange"] = "VALUE_OUTSIDE_RANGE";
})(DiscountErrorCode = exports.DiscountErrorCode || (exports.DiscountErrorCode = {}));
/** The type of page where a shareable discount URL lands. */
var DiscountShareableUrlTargetType;
(function (DiscountShareableUrlTargetType) {
    /** The URL lands on a collection page. */
    DiscountShareableUrlTargetType["Collection"] = "COLLECTION";
    /** The URL lands on a home page. */
    DiscountShareableUrlTargetType["Home"] = "HOME";
    /** The URL lands on a product page. */
    DiscountShareableUrlTargetType["Product"] = "PRODUCT";
})(DiscountShareableUrlTargetType = exports.DiscountShareableUrlTargetType || (exports.DiscountShareableUrlTargetType = {}));
/** The set of valid sort keys for the Discount query. */
var DiscountSortKeys;
(function (DiscountSortKeys) {
    /** Sort by the `created_at` value. */
    DiscountSortKeys["CreatedAt"] = "CREATED_AT";
    /** Sort by the `ends_at` value. */
    DiscountSortKeys["EndsAt"] = "ENDS_AT";
    /** Sort by the `id` value. */
    DiscountSortKeys["Id"] = "ID";
    /**
     * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
     * Don't use this sort key when no search query is specified.
     *
     */
    DiscountSortKeys["Relevance"] = "RELEVANCE";
    /** Sort by the `starts_at` value. */
    DiscountSortKeys["StartsAt"] = "STARTS_AT";
    /** Sort by the `title` value. */
    DiscountSortKeys["Title"] = "TITLE";
    /** Sort by the `updated_at` value. */
    DiscountSortKeys["UpdatedAt"] = "UPDATED_AT";
})(DiscountSortKeys = exports.DiscountSortKeys || (exports.DiscountSortKeys = {}));
/** The status of the discount. */
var DiscountStatus;
(function (DiscountStatus) {
    /** The discount is active. */
    DiscountStatus["Active"] = "ACTIVE";
    /** The discount is expired. */
    DiscountStatus["Expired"] = "EXPIRED";
    /** The discount is scheduled. */
    DiscountStatus["Scheduled"] = "SCHEDULED";
})(DiscountStatus = exports.DiscountStatus || (exports.DiscountStatus = {}));
/** The type of line (line item or shipping line) on an order that the subscription discount is applicable towards. */
var DiscountTargetType;
(function (DiscountTargetType) {
    /** The discount applies onto line items. */
    DiscountTargetType["LineItem"] = "LINE_ITEM";
    /** The discount applies onto shipping lines. */
    DiscountTargetType["ShippingLine"] = "SHIPPING_LINE";
})(DiscountTargetType = exports.DiscountTargetType || (exports.DiscountTargetType = {}));
/** The type of the subscription discount. */
var DiscountType;
(function (DiscountType) {
    /** Code discount type. */
    DiscountType["CodeDiscount"] = "CODE_DISCOUNT";
    /** Manual discount type. */
    DiscountType["Manual"] = "MANUAL";
})(DiscountType = exports.DiscountType || (exports.DiscountType = {}));
/** Possible error codes that can be returned by `DisputeEvidenceUpdateUserError`. */
var DisputeEvidenceUpdateUserErrorCode;
(function (DisputeEvidenceUpdateUserErrorCode) {
    /** Dispute evidence could not be found. */
    DisputeEvidenceUpdateUserErrorCode["DisputeEvidenceNotFound"] = "DISPUTE_EVIDENCE_NOT_FOUND";
    /** Evidence already accepted. */
    DisputeEvidenceUpdateUserErrorCode["EvidenceAlreadyAccepted"] = "EVIDENCE_ALREADY_ACCEPTED";
    /** Evidence past due date. */
    DisputeEvidenceUpdateUserErrorCode["EvidencePastDueDate"] = "EVIDENCE_PAST_DUE_DATE";
    /** Combined files size is too large. */
    DisputeEvidenceUpdateUserErrorCode["FilesSizeExceededLimit"] = "FILES_SIZE_EXCEEDED_LIMIT";
    /** The input value is invalid. */
    DisputeEvidenceUpdateUserErrorCode["Invalid"] = "INVALID";
    /** Individual file size is too large. */
    DisputeEvidenceUpdateUserErrorCode["TooLarge"] = "TOO_LARGE";
})(DisputeEvidenceUpdateUserErrorCode = exports.DisputeEvidenceUpdateUserErrorCode || (exports.DisputeEvidenceUpdateUserErrorCode = {}));
/** The possible statuses of a dispute. */
var DisputeStatus;
(function (DisputeStatus) {
    DisputeStatus["Accepted"] = "ACCEPTED";
    DisputeStatus["ChargeRefunded"] = "CHARGE_REFUNDED";
    DisputeStatus["Lost"] = "LOST";
    DisputeStatus["NeedsResponse"] = "NEEDS_RESPONSE";
    DisputeStatus["UnderReview"] = "UNDER_REVIEW";
    DisputeStatus["Won"] = "WON";
})(DisputeStatus = exports.DisputeStatus || (exports.DisputeStatus = {}));
/** The possible types for a dispute. */
var DisputeType;
(function (DisputeType) {
    /** The dispute has turned into a chargeback. */
    DisputeType["Chargeback"] = "CHARGEBACK";
    /** The dispute is in the inquiry phase. */
    DisputeType["Inquiry"] = "INQUIRY";
})(DisputeType = exports.DisputeType || (exports.DisputeType = {}));
/** The valid discount types that can be applied to a draft order. */
var DraftOrderAppliedDiscountType;
(function (DraftOrderAppliedDiscountType) {
    /** A fixed amount in the store's currency. */
    DraftOrderAppliedDiscountType["FixedAmount"] = "FIXED_AMOUNT";
    /** A percentage of the order subtotal. */
    DraftOrderAppliedDiscountType["Percentage"] = "PERCENTAGE";
})(DraftOrderAppliedDiscountType = exports.DraftOrderAppliedDiscountType || (exports.DraftOrderAppliedDiscountType = {}));
/** The set of valid sort keys for the DraftOrder query. */
var DraftOrderSortKeys;
(function (DraftOrderSortKeys) {
    /** Sort by the `customer_name` value. */
    DraftOrderSortKeys["CustomerName"] = "CUSTOMER_NAME";
    /** Sort by the `id` value. */
    DraftOrderSortKeys["Id"] = "ID";
    /** Sort by the `number` value. */
    DraftOrderSortKeys["Number"] = "NUMBER";
    /**
     * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
     * Don't use this sort key when no search query is specified.
     *
     */
    DraftOrderSortKeys["Relevance"] = "RELEVANCE";
    /** Sort by the `status` value. */
    DraftOrderSortKeys["Status"] = "STATUS";
    /** Sort by the `total_price` value. */
    DraftOrderSortKeys["TotalPrice"] = "TOTAL_PRICE";
    /** Sort by the `updated_at` value. */
    DraftOrderSortKeys["UpdatedAt"] = "UPDATED_AT";
})(DraftOrderSortKeys = exports.DraftOrderSortKeys || (exports.DraftOrderSortKeys = {}));
/** The valid statuses for a draft order. */
var DraftOrderStatus;
(function (DraftOrderStatus) {
    /** The draft order has been paid. */
    DraftOrderStatus["Completed"] = "COMPLETED";
    /** An invoice for the draft order has been sent to the customer. */
    DraftOrderStatus["InvoiceSent"] = "INVOICE_SENT";
    /** The draft order is open. It has not been paid, and an invoice hasn't been sent. */
    DraftOrderStatus["Open"] = "OPEN";
})(DraftOrderStatus = exports.DraftOrderStatus || (exports.DraftOrderStatus = {}));
/** Possible error codes that can be returned by `ErrorsWebPixelUserError`. */
var ErrorsWebPixelUserErrorCode;
(function (ErrorsWebPixelUserErrorCode) {
    /** The input value is blank. */
    ErrorsWebPixelUserErrorCode["Blank"] = "BLANK";
    /** The provided settings ID does not match the expected settings definition on the app. */
    ErrorsWebPixelUserErrorCode["InvalidSettings"] = "INVALID_SETTINGS";
    /** The record with the ID used as the input value couldn't be found. */
    ErrorsWebPixelUserErrorCode["NotFound"] = "NOT_FOUND";
    /** The input value is already taken. */
    ErrorsWebPixelUserErrorCode["Taken"] = "TAKEN";
    /** An error occurred and the web pixel couldnt be deleted. */
    ErrorsWebPixelUserErrorCode["UnableToDelete"] = "UNABLE_TO_DELETE";
})(ErrorsWebPixelUserErrorCode = exports.ErrorsWebPixelUserErrorCode || (exports.ErrorsWebPixelUserErrorCode = {}));
/** The set of valid sort keys for the Event query. */
var EventSortKeys;
(function (EventSortKeys) {
    /** Sort by the `created_at` value. */
    EventSortKeys["CreatedAt"] = "CREATED_AT";
    /** Sort by the `id` value. */
    EventSortKeys["Id"] = "ID";
    /**
     * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
     * Don't use this sort key when no search query is specified.
     *
     */
    EventSortKeys["Relevance"] = "RELEVANCE";
})(EventSortKeys = exports.EventSortKeys || (exports.EventSortKeys = {}));
/** The possible content types for a file object. */
var FileContentType;
(function (FileContentType) {
    /** A Shopify-hosted generic file. */
    FileContentType["File"] = "FILE";
    /** A Shopify-hosted image. */
    FileContentType["Image"] = "IMAGE";
    /** A Shopify-hosted video file. It's recommended to use this type for all video files. */
    FileContentType["Video"] = "VIDEO";
})(FileContentType = exports.FileContentType || (exports.FileContentType = {}));
/** The error types for a file. */
var FileErrorCode;
(function (FileErrorCode) {
    /** File could not be created because embed permissions are disabled for this video. */
    FileErrorCode["ExternalVideoEmbedDisabled"] = "EXTERNAL_VIDEO_EMBED_DISABLED";
    /** File could not be created because video is either not found or still transcoding. */
    FileErrorCode["ExternalVideoEmbedNotFoundOrTranscoding"] = "EXTERNAL_VIDEO_EMBED_NOT_FOUND_OR_TRANSCODING";
    /** File could not be created because the external video has an invalid aspect ratio. */
    FileErrorCode["ExternalVideoInvalidAspectRatio"] = "EXTERNAL_VIDEO_INVALID_ASPECT_RATIO";
    /** File could not be created because the external video could not be found. */
    FileErrorCode["ExternalVideoNotFound"] = "EXTERNAL_VIDEO_NOT_FOUND";
    /** File could not be created because the external video is not listed or is private. */
    FileErrorCode["ExternalVideoUnlisted"] = "EXTERNAL_VIDEO_UNLISTED";
    /** File could not be created because the cumulative file storage limit would be exceeded. */
    FileErrorCode["FileStorageLimitExceeded"] = "FILE_STORAGE_LIMIT_EXCEEDED";
    /** File could not be processed because the source could not be downloaded. */
    FileErrorCode["GenericFileDownloadFailure"] = "GENERIC_FILE_DOWNLOAD_FAILURE";
    /** File could not be created because the size is too large. */
    FileErrorCode["GenericFileInvalidSize"] = "GENERIC_FILE_INVALID_SIZE";
    /** File could not be processed because the image could not be downloaded. */
    FileErrorCode["ImageDownloadFailure"] = "IMAGE_DOWNLOAD_FAILURE";
    /** File could not be processed because the image could not be processed. */
    FileErrorCode["ImageProcessingFailure"] = "IMAGE_PROCESSING_FAILURE";
    /** File could not be created because the image has an invalid aspect ratio. */
    FileErrorCode["InvalidImageAspectRatio"] = "INVALID_IMAGE_ASPECT_RATIO";
    /** File could not be created because the image size is too large. */
    FileErrorCode["InvalidImageFileSize"] = "INVALID_IMAGE_FILE_SIZE";
    /** File could not be created because the image's resolution exceeds the max limit. */
    FileErrorCode["InvalidImageResolution"] = "INVALID_IMAGE_RESOLUTION";
    /** File could not be processed because the signed URL was invalid. */
    FileErrorCode["InvalidSignedUrl"] = "INVALID_SIGNED_URL";
    /** File timed out because it is currently being modified by another operation. */
    FileErrorCode["MediaTimeoutError"] = "MEDIA_TIMEOUT_ERROR";
    /** File could not be created because the model file failed processing. */
    FileErrorCode["Model3DGlbOutputCreationError"] = "MODEL3D_GLB_OUTPUT_CREATION_ERROR";
    /** File could not be created because the model can't be converted to USDZ format. */
    FileErrorCode["Model3DGlbToUsdzConversionError"] = "MODEL3D_GLB_TO_USDZ_CONVERSION_ERROR";
    /** File could not be created because the model file failed processing. */
    FileErrorCode["Model3DProcessingFailure"] = "MODEL3D_PROCESSING_FAILURE";
    /** File could not be created because the model's thumbnail generation failed. */
    FileErrorCode["Model3DThumbnailGenerationError"] = "MODEL3D_THUMBNAIL_GENERATION_ERROR";
    /** Model failed validation. */
    FileErrorCode["Model3DValidationError"] = "MODEL3D_VALIDATION_ERROR";
    /** File error has occurred for an unknown reason. */
    FileErrorCode["Unknown"] = "UNKNOWN";
    /** File could not be created because the image is an unsupported file type. */
    FileErrorCode["UnsupportedImageFileType"] = "UNSUPPORTED_IMAGE_FILE_TYPE";
    /** File could not be created because it has an invalid file type. */
    FileErrorCode["VideoInvalidFiletypeError"] = "VIDEO_INVALID_FILETYPE_ERROR";
    /** File could not be created because it does not meet the maximum duration requirement. */
    FileErrorCode["VideoMaxDurationError"] = "VIDEO_MAX_DURATION_ERROR";
    /** File could not be created because it does not meet the maximum height requirement. */
    FileErrorCode["VideoMaxHeightError"] = "VIDEO_MAX_HEIGHT_ERROR";
    /** File could not be created because it does not meet the maximum width requirement. */
    FileErrorCode["VideoMaxWidthError"] = "VIDEO_MAX_WIDTH_ERROR";
    /** File could not be created because the metadata could not be read. */
    FileErrorCode["VideoMetadataReadError"] = "VIDEO_METADATA_READ_ERROR";
    /** File could not be created because it does not meet the minimum duration requirement. */
    FileErrorCode["VideoMinDurationError"] = "VIDEO_MIN_DURATION_ERROR";
    /** File could not be created because it does not meet the minimum height requirement. */
    FileErrorCode["VideoMinHeightError"] = "VIDEO_MIN_HEIGHT_ERROR";
    /** File could not be created because it does not meet the minimum width requirement. */
    FileErrorCode["VideoMinWidthError"] = "VIDEO_MIN_WIDTH_ERROR";
    /** Video failed validation. */
    FileErrorCode["VideoValidationError"] = "VIDEO_VALIDATION_ERROR";
})(FileErrorCode = exports.FileErrorCode || (exports.FileErrorCode = {}));
/** The set of valid sort keys for the File query. */
var FileSortKeys;
(function (FileSortKeys) {
    /** Sort by the `created_at` value. */
    FileSortKeys["CreatedAt"] = "CREATED_AT";
    /** Sort by the `filename` value. */
    FileSortKeys["Filename"] = "FILENAME";
    /** Sort by the `id` value. */
    FileSortKeys["Id"] = "ID";
    /** Sort by the `original_upload_size` value. */
    FileSortKeys["OriginalUploadSize"] = "ORIGINAL_UPLOAD_SIZE";
    /**
     * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
     * Don't use this sort key when no search query is specified.
     *
     */
    FileSortKeys["Relevance"] = "RELEVANCE";
})(FileSortKeys = exports.FileSortKeys || (exports.FileSortKeys = {}));
/** The possible statuses for a file object. */
var FileStatus;
(function (FileStatus) {
    /** File processing has failed. */
    FileStatus["Failed"] = "FAILED";
    /** File is being processed. */
    FileStatus["Processing"] = "PROCESSING";
    /** File is ready to be displayed. */
    FileStatus["Ready"] = "READY";
    /** File has been uploaded but hasn't been processed. */
    FileStatus["Uploaded"] = "UPLOADED";
})(FileStatus = exports.FileStatus || (exports.FileStatus = {}));
/** Possible error codes that can be returned by `FilesUserError`. */
var FilesErrorCode;
(function (FilesErrorCode) {
    /** The alt value exceeds the maximum limit of 512 characters. */
    FilesErrorCode["AltValueLimitExceeded"] = "ALT_VALUE_LIMIT_EXCEEDED";
    /** The search term must not be blank. */
    FilesErrorCode["BlankSearch"] = "BLANK_SEARCH";
    /** File does not exist. */
    FilesErrorCode["FileDoesNotExist"] = "FILE_DOES_NOT_EXIST";
    /** File has a pending operation. */
    FilesErrorCode["FileLocked"] = "FILE_LOCKED";
    /** The input value is invalid. */
    FilesErrorCode["Invalid"] = "INVALID";
    /** Search query isn't supported. */
    FilesErrorCode["InvalidQuery"] = "INVALID_QUERY";
    /** At least one argument is required. */
    FilesErrorCode["MissingArguments"] = "MISSING_ARGUMENTS";
    /** Exceeded the limit of non-image media per shop. */
    FilesErrorCode["NonImageMediaPerShopLimitExceeded"] = "NON_IMAGE_MEDIA_PER_SHOP_LIMIT_EXCEEDED";
    /** Specify one argument: search, IDs, or deleteAll. */
    FilesErrorCode["TooManyArguments"] = "TOO_MANY_ARGUMENTS";
    /** The file type is not supported. */
    FilesErrorCode["UnacceptableAsset"] = "UNACCEPTABLE_ASSET";
    /** The file is not supported on trial accounts. Select a plan to upload this file. */
    FilesErrorCode["UnacceptableTrialAsset"] = "UNACCEPTABLE_TRIAL_ASSET";
    /** The file is not supported on trial accounts that have not validated their email. Either select a plan or verify the shop owner email to upload this file. */
    FilesErrorCode["UnacceptableUnverifiedTrialAsset"] = "UNACCEPTABLE_UNVERIFIED_TRIAL_ASSET";
})(FilesErrorCode = exports.FilesErrorCode || (exports.FilesErrorCode = {}));
/** The display status of a fulfillment. */
var FulfillmentDisplayStatus;
(function (FulfillmentDisplayStatus) {
    /** Displayed as **Attempted delivery**. */
    FulfillmentDisplayStatus["AttemptedDelivery"] = "ATTEMPTED_DELIVERY";
    /** Displayed as **Canceled**. */
    FulfillmentDisplayStatus["Canceled"] = "CANCELED";
    /** Displayed as **Confirmed**. */
    FulfillmentDisplayStatus["Confirmed"] = "CONFIRMED";
    /** Displayed as **Delivered**. */
    FulfillmentDisplayStatus["Delivered"] = "DELIVERED";
    /** Displayed as **Failure**. */
    FulfillmentDisplayStatus["Failure"] = "FAILURE";
    /** Displayed as **Fulfilled**. */
    FulfillmentDisplayStatus["Fulfilled"] = "FULFILLED";
    /** Displayed as **In transit**. */
    FulfillmentDisplayStatus["InTransit"] = "IN_TRANSIT";
    /** Displayed as **Label printed**. */
    FulfillmentDisplayStatus["LabelPrinted"] = "LABEL_PRINTED";
    /** Displayed as **Label purchased**. */
    FulfillmentDisplayStatus["LabelPurchased"] = "LABEL_PURCHASED";
    /** Displayed as **Label voided**. */
    FulfillmentDisplayStatus["LabelVoided"] = "LABEL_VOIDED";
    /** Displayed as **Marked as fulfilled**. */
    FulfillmentDisplayStatus["MarkedAsFulfilled"] = "MARKED_AS_FULFILLED";
    /** Displayed as **Not delivered**. */
    FulfillmentDisplayStatus["NotDelivered"] = "NOT_DELIVERED";
    /** Displayed as **Out for delivery**. */
    FulfillmentDisplayStatus["OutForDelivery"] = "OUT_FOR_DELIVERY";
    /** Displayed as **Picked up**. */
    FulfillmentDisplayStatus["PickedUp"] = "PICKED_UP";
    /** Displayed as **Ready for pickup**. */
    FulfillmentDisplayStatus["ReadyForPickup"] = "READY_FOR_PICKUP";
    /** Displayed as **Submitted**. */
    FulfillmentDisplayStatus["Submitted"] = "SUBMITTED";
})(FulfillmentDisplayStatus = exports.FulfillmentDisplayStatus || (exports.FulfillmentDisplayStatus = {}));
/** The set of valid sort keys for the FulfillmentEvent query. */
var FulfillmentEventSortKeys;
(function (FulfillmentEventSortKeys) {
    /** Sort by the `happened_at` value. */
    FulfillmentEventSortKeys["HappenedAt"] = "HAPPENED_AT";
    /** Sort by the `id` value. */
    FulfillmentEventSortKeys["Id"] = "ID";
    /**
     * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
     * Don't use this sort key when no search query is specified.
     *
     */
    FulfillmentEventSortKeys["Relevance"] = "RELEVANCE";
})(FulfillmentEventSortKeys = exports.FulfillmentEventSortKeys || (exports.FulfillmentEventSortKeys = {}));
/** The status that describes a fulfillment or delivery event. */
var FulfillmentEventStatus;
(function (FulfillmentEventStatus) {
    /** A delivery was attempted. */
    FulfillmentEventStatus["AttemptedDelivery"] = "ATTEMPTED_DELIVERY";
    /** The fulfillment is confirmed. This is the default value when no other information is available. */
    FulfillmentEventStatus["Confirmed"] = "CONFIRMED";
    /** The fulfillment was successfully delivered. */
    FulfillmentEventStatus["Delivered"] = "DELIVERED";
    /** The fulfillment request failed. */
    FulfillmentEventStatus["Failure"] = "FAILURE";
    /** The fulfillment is in transit. */
    FulfillmentEventStatus["InTransit"] = "IN_TRANSIT";
    /** A purchased shipping label has been printed. */
    FulfillmentEventStatus["LabelPrinted"] = "LABEL_PRINTED";
    /** A shipping label has been purchased. */
    FulfillmentEventStatus["LabelPurchased"] = "LABEL_PURCHASED";
    /** The fulfillment is out for delivery. */
    FulfillmentEventStatus["OutForDelivery"] = "OUT_FOR_DELIVERY";
    /** The fulfillment is ready to be picked up. */
    FulfillmentEventStatus["ReadyForPickup"] = "READY_FOR_PICKUP";
})(FulfillmentEventStatus = exports.FulfillmentEventStatus || (exports.FulfillmentEventStatus = {}));
/** The reason for a fulfillment hold. */
var FulfillmentHoldReason;
(function (FulfillmentHoldReason) {
    /** The fulfillment hold is applied because payment is pending. */
    FulfillmentHoldReason["AwaitingPayment"] = "AWAITING_PAYMENT";
    /** The fulfillment hold is applied because of a high risk of fraud. */
    FulfillmentHoldReason["HighRiskOfFraud"] = "HIGH_RISK_OF_FRAUD";
    /** The fulfillment hold is applied because of an incorrect address. */
    FulfillmentHoldReason["IncorrectAddress"] = "INCORRECT_ADDRESS";
    /** The fulfillment hold is applied because inventory is out of stock. */
    FulfillmentHoldReason["InventoryOutOfStock"] = "INVENTORY_OUT_OF_STOCK";
    /** The fulfillment hold is applied for another reason. */
    FulfillmentHoldReason["Other"] = "OTHER";
    /** The fulfillment hold is applied because of an unknown delivery date. */
    FulfillmentHoldReason["UnknownDeliveryDate"] = "UNKNOWN_DELIVERY_DATE";
})(FulfillmentHoldReason = exports.FulfillmentHoldReason || (exports.FulfillmentHoldReason = {}));
/** The actions that can be taken on a fulfillment order. */
var FulfillmentOrderAction;
(function (FulfillmentOrderAction) {
    /** Cancels a fulfillment order. The corresponding mutation for this action is `fulfillmentOrderCancel`. */
    FulfillmentOrderAction["CancelFulfillmentOrder"] = "CANCEL_FULFILLMENT_ORDER";
    /** Creates a fulfillment for selected line items in the fulfillment order. The corresponding mutation for this action is `fulfillmentCreateV2`. */
    FulfillmentOrderAction["CreateFulfillment"] = "CREATE_FULFILLMENT";
    /** Opens an external URL to initiate the fulfillment process outside Shopify. This action should be paired with `FulfillmentOrderSupportedAction.externalUrl`. */
    FulfillmentOrderAction["External"] = "EXTERNAL";
    /** Applies a fulfillment hold on an open fulfillment order. The corresponding mutation for this action is `fulfillmentOrderHold`. */
    FulfillmentOrderAction["Hold"] = "HOLD";
    /** Marks the fulfillment order as open. The corresponding mutation for this action is `fulfillmentOrderOpen`. */
    FulfillmentOrderAction["MarkAsOpen"] = "MARK_AS_OPEN";
    /** Moves a fulfillment order. The corresponding mutation for this action is `fulfillmentOrderMove`. */
    FulfillmentOrderAction["Move"] = "MOVE";
    /** Releases the fulfillment hold on the fulfillment order. The corresponding mutation for this action is `fulfillmentOrderReleaseHold`. */
    FulfillmentOrderAction["ReleaseHold"] = "RELEASE_HOLD";
    /** Sends a cancellation request to the fulfillment service of a fulfillment order. The corresponding mutation for this action is `fulfillmentOrderSubmitCancellationRequest`. */
    FulfillmentOrderAction["RequestCancellation"] = "REQUEST_CANCELLATION";
    /** Sends a request for fulfilling selected line items in a fulfillment order to a fulfillment service. The corresponding mutation for this action is `fulfillmentOrderSubmitFulfillmentRequest`. */
    FulfillmentOrderAction["RequestFulfillment"] = "REQUEST_FULFILLMENT";
})(FulfillmentOrderAction = exports.FulfillmentOrderAction || (exports.FulfillmentOrderAction = {}));
/** The assigment status to be used to filter fulfillment orders. */
var FulfillmentOrderAssignmentStatus;
(function (FulfillmentOrderAssignmentStatus) {
    /**
     * Fulfillment orders for which the merchant has requested cancellation of
     * the previously accepted fulfillment request.
     *
     */
    FulfillmentOrderAssignmentStatus["CancellationRequested"] = "CANCELLATION_REQUESTED";
    /**
     * Fulfillment orders for which the merchant's fulfillment request has been accepted.
     * Any number of fulfillments can be created on these fulfillment orders
     * to completely fulfill the requested items.
     *
     */
    FulfillmentOrderAssignmentStatus["FulfillmentAccepted"] = "FULFILLMENT_ACCEPTED";
    /**
     * Fulfillment orders for which the merchant has requested fulfillment.
     *
     */
    FulfillmentOrderAssignmentStatus["FulfillmentRequested"] = "FULFILLMENT_REQUESTED";
})(FulfillmentOrderAssignmentStatus = exports.FulfillmentOrderAssignmentStatus || (exports.FulfillmentOrderAssignmentStatus = {}));
/** Possible error codes that can be returned by `FulfillmentOrderHoldUserError`. */
var FulfillmentOrderHoldUserErrorCode;
(function (FulfillmentOrderHoldUserErrorCode) {
    /** The fulfillment order could not be found. */
    FulfillmentOrderHoldUserErrorCode["FulfillmentOrderNotFound"] = "FULFILLMENT_ORDER_NOT_FOUND";
    /** The input value is already taken. */
    FulfillmentOrderHoldUserErrorCode["Taken"] = "TAKEN";
})(FulfillmentOrderHoldUserErrorCode = exports.FulfillmentOrderHoldUserErrorCode || (exports.FulfillmentOrderHoldUserErrorCode = {}));
/** The kinds of request merchants can make to a fulfillment service. */
var FulfillmentOrderMerchantRequestKind;
(function (FulfillmentOrderMerchantRequestKind) {
    /**
     * The merchant requests cancellation of an `IN_PROGRESS` fulfillment order.
     *
     */
    FulfillmentOrderMerchantRequestKind["CancellationRequest"] = "CANCELLATION_REQUEST";
    /**
     * The merchant requests fulfillment for an `OPEN` fulfillment order.
     *
     */
    FulfillmentOrderMerchantRequestKind["FulfillmentRequest"] = "FULFILLMENT_REQUEST";
})(FulfillmentOrderMerchantRequestKind = exports.FulfillmentOrderMerchantRequestKind || (exports.FulfillmentOrderMerchantRequestKind = {}));
/** The reason for a fulfillment order rejection. */
var FulfillmentOrderRejectionReason;
(function (FulfillmentOrderRejectionReason) {
    /** The fulfillment order was rejected because of an incorrect address. */
    FulfillmentOrderRejectionReason["IncorrectAddress"] = "INCORRECT_ADDRESS";
    /** The fulfillment order was rejected because of an ineligible product. */
    FulfillmentOrderRejectionReason["IneligibleProduct"] = "INELIGIBLE_PRODUCT";
    /** The fulfillment order was rejected because inventory is out of stock. */
    FulfillmentOrderRejectionReason["InventoryOutOfStock"] = "INVENTORY_OUT_OF_STOCK";
    /** The fulfillment order was rejected for another reason. */
    FulfillmentOrderRejectionReason["Other"] = "OTHER";
    /** The fulfillment order was rejected because of an undeliverable destination. */
    FulfillmentOrderRejectionReason["UndeliverableDestination"] = "UNDELIVERABLE_DESTINATION";
})(FulfillmentOrderRejectionReason = exports.FulfillmentOrderRejectionReason || (exports.FulfillmentOrderRejectionReason = {}));
/** Possible error codes that can be returned by `FulfillmentOrderReleaseHoldUserError`. */
var FulfillmentOrderReleaseHoldUserErrorCode;
(function (FulfillmentOrderReleaseHoldUserErrorCode) {
    /** The fulfillment order wasn't found. */
    FulfillmentOrderReleaseHoldUserErrorCode["FulfillmentOrderNotFound"] = "FULFILLMENT_ORDER_NOT_FOUND";
})(FulfillmentOrderReleaseHoldUserErrorCode = exports.FulfillmentOrderReleaseHoldUserErrorCode || (exports.FulfillmentOrderReleaseHoldUserErrorCode = {}));
/** The request status of a fulfillment order. */
var FulfillmentOrderRequestStatus;
(function (FulfillmentOrderRequestStatus) {
    /** The fulfillment service accepted the merchant's fulfillment request. */
    FulfillmentOrderRequestStatus["Accepted"] = "ACCEPTED";
    /**
     * The fulfillment service accepted the merchant's fulfillment cancellation request.
     *
     */
    FulfillmentOrderRequestStatus["CancellationAccepted"] = "CANCELLATION_ACCEPTED";
    /**
     * The fulfillment service rejected the merchant's fulfillment cancellation request.
     *
     */
    FulfillmentOrderRequestStatus["CancellationRejected"] = "CANCELLATION_REJECTED";
    /**
     * The merchant requested a cancellation of the fulfillment request for this fulfillment order.
     *
     */
    FulfillmentOrderRequestStatus["CancellationRequested"] = "CANCELLATION_REQUESTED";
    /** The fulfillment service closed the fulfillment order without completing it. */
    FulfillmentOrderRequestStatus["Closed"] = "CLOSED";
    /** The fulfillment service rejected the merchant's fulfillment request. */
    FulfillmentOrderRequestStatus["Rejected"] = "REJECTED";
    /** The merchant requested fulfillment for this fulfillment order. */
    FulfillmentOrderRequestStatus["Submitted"] = "SUBMITTED";
    /**
     * The initial request status for the newly-created fulfillment orders. This is the only valid
     * request status for fulfillment orders that aren't assigned to a fulfillment service.
     *
     */
    FulfillmentOrderRequestStatus["Unsubmitted"] = "UNSUBMITTED";
})(FulfillmentOrderRequestStatus = exports.FulfillmentOrderRequestStatus || (exports.FulfillmentOrderRequestStatus = {}));
/** Possible error codes that can be returned by `FulfillmentOrderRescheduleUserError`. */
var FulfillmentOrderRescheduleUserErrorCode;
(function (FulfillmentOrderRescheduleUserErrorCode) {
    /** Fulfillment order could not be found. */
    FulfillmentOrderRescheduleUserErrorCode["FulfillmentOrderNotFound"] = "FULFILLMENT_ORDER_NOT_FOUND";
})(FulfillmentOrderRescheduleUserErrorCode = exports.FulfillmentOrderRescheduleUserErrorCode || (exports.FulfillmentOrderRescheduleUserErrorCode = {}));
/** The set of valid sort keys for the FulfillmentOrder query. */
var FulfillmentOrderSortKeys;
(function (FulfillmentOrderSortKeys) {
    /** Sort by the `id` value. */
    FulfillmentOrderSortKeys["Id"] = "ID";
    /**
     * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
     * Don't use this sort key when no search query is specified.
     *
     */
    FulfillmentOrderSortKeys["Relevance"] = "RELEVANCE";
})(FulfillmentOrderSortKeys = exports.FulfillmentOrderSortKeys || (exports.FulfillmentOrderSortKeys = {}));
/** The status of a fulfillment order. */
var FulfillmentOrderStatus;
(function (FulfillmentOrderStatus) {
    /** The fulfillment order has been cancelled by the merchant. */
    FulfillmentOrderStatus["Cancelled"] = "CANCELLED";
    /** The fulfillment order has been completed and closed. */
    FulfillmentOrderStatus["Closed"] = "CLOSED";
    /** The fulfillment order cannot be completed as requested. */
    FulfillmentOrderStatus["Incomplete"] = "INCOMPLETE";
    /** The fulfillment order is being processed. */
    FulfillmentOrderStatus["InProgress"] = "IN_PROGRESS";
    /** The fulfillment order is on hold. The fulfillment process can't be initiated until the hold on the fulfillment order is released. */
    FulfillmentOrderStatus["OnHold"] = "ON_HOLD";
    /** The fulfillment order is ready for fulfillment. */
    FulfillmentOrderStatus["Open"] = "OPEN";
    /** The fulfillment order is deferred and will be ready for fulfillment after the date and time specified in `fulfill_at`. */
    FulfillmentOrderStatus["Scheduled"] = "SCHEDULED";
})(FulfillmentOrderStatus = exports.FulfillmentOrderStatus || (exports.FulfillmentOrderStatus = {}));
/** Possible error codes that can be returned by `FulfillmentOrdersSetFulfillmentDeadlineUserError`. */
var FulfillmentOrdersSetFulfillmentDeadlineUserErrorCode;
(function (FulfillmentOrdersSetFulfillmentDeadlineUserErrorCode) {
    /** The fulfillment orders could not be found. */
    FulfillmentOrdersSetFulfillmentDeadlineUserErrorCode["FulfillmentOrdersNotFound"] = "FULFILLMENT_ORDERS_NOT_FOUND";
})(FulfillmentOrdersSetFulfillmentDeadlineUserErrorCode = exports.FulfillmentOrdersSetFulfillmentDeadlineUserErrorCode || (exports.FulfillmentOrdersSetFulfillmentDeadlineUserErrorCode = {}));
/** The type of a fulfillment service. */
var FulfillmentServiceType;
(function (FulfillmentServiceType) {
    /** Fulfillment by gift card. */
    FulfillmentServiceType["GiftCard"] = "GIFT_CARD";
    /** Manual fulfillment by the merchant. */
    FulfillmentServiceType["Manual"] = "MANUAL";
    /** Fullfillment by a third-party fulfillment service. */
    FulfillmentServiceType["ThirdParty"] = "THIRD_PARTY";
})(FulfillmentServiceType = exports.FulfillmentServiceType || (exports.FulfillmentServiceType = {}));
/** The status of a fulfillment. */
var FulfillmentStatus;
(function (FulfillmentStatus) {
    /** The fulfillment was canceled. */
    FulfillmentStatus["Cancelled"] = "CANCELLED";
    /** There was an error with the fulfillment request. */
    FulfillmentStatus["Error"] = "ERROR";
    /** The fulfillment request failed. */
    FulfillmentStatus["Failure"] = "FAILURE";
    /**
     * The third-party fulfillment service has acknowledged the fulfillment and is processing it.
     *
     * @deprecated This is a legacy status and is due to be deprecated.
     */
    FulfillmentStatus["Open"] = "OPEN";
    /**
     * Shopify has created the fulfillment and is waiting for the third-party fulfillment service to transition it to `open` or `success`.
     *
     * @deprecated This is a legacy status and is due to be deprecated.
     */
    FulfillmentStatus["Pending"] = "PENDING";
    /** The fulfillment was completed successfully. */
    FulfillmentStatus["Success"] = "SUCCESS";
})(FulfillmentStatus = exports.FulfillmentStatus || (exports.FulfillmentStatus = {}));
/** Possible error codes that can be returned by `GiftCardUserError`. */
var GiftCardErrorCode;
(function (GiftCardErrorCode) {
    /** The input value should be greater than the minimum allowed value. */
    GiftCardErrorCode["GreaterThan"] = "GREATER_THAN";
    /** Unexpected internal error happened. */
    GiftCardErrorCode["InternalError"] = "INTERNAL_ERROR";
    /** The input value is invalid. */
    GiftCardErrorCode["Invalid"] = "INVALID";
    /** Missing a required argument. */
    GiftCardErrorCode["MissingArgument"] = "MISSING_ARGUMENT";
    /** The input value is already taken. */
    GiftCardErrorCode["Taken"] = "TAKEN";
    /** The input value is too long. */
    GiftCardErrorCode["TooLong"] = "TOO_LONG";
    /** The input value is too short. */
    GiftCardErrorCode["TooShort"] = "TOO_SHORT";
})(GiftCardErrorCode = exports.GiftCardErrorCode || (exports.GiftCardErrorCode = {}));
/** The set of valid sort keys for the GiftCard query. */
var GiftCardSortKeys;
(function (GiftCardSortKeys) {
    /** Sort by the `amount_spent` value. */
    GiftCardSortKeys["AmountSpent"] = "AMOUNT_SPENT";
    /** Sort by the `balance` value. */
    GiftCardSortKeys["Balance"] = "BALANCE";
    /** Sort by the `code` value. */
    GiftCardSortKeys["Code"] = "CODE";
    /** Sort by the `created_at` value. */
    GiftCardSortKeys["CreatedAt"] = "CREATED_AT";
    /** Sort by the `customer_name` value. */
    GiftCardSortKeys["CustomerName"] = "CUSTOMER_NAME";
    /** Sort by the `disabled_at` value. */
    GiftCardSortKeys["DisabledAt"] = "DISABLED_AT";
    /** Sort by the `expires_on` value. */
    GiftCardSortKeys["ExpiresOn"] = "EXPIRES_ON";
    /** Sort by the `id` value. */
    GiftCardSortKeys["Id"] = "ID";
    /** Sort by the `initial_value` value. */
    GiftCardSortKeys["InitialValue"] = "INITIAL_VALUE";
    /**
     * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
     * Don't use this sort key when no search query is specified.
     *
     */
    GiftCardSortKeys["Relevance"] = "RELEVANCE";
    /** Sort by the `updated_at` value. */
    GiftCardSortKeys["UpdatedAt"] = "UPDATED_AT";
})(GiftCardSortKeys = exports.GiftCardSortKeys || (exports.GiftCardSortKeys = {}));
/** List of supported image content types. */
var ImageContentType;
(function (ImageContentType) {
    /** A JPG image. */
    ImageContentType["Jpg"] = "JPG";
    /** A PNG image. */
    ImageContentType["Png"] = "PNG";
    /** A WEBP image. */
    ImageContentType["Webp"] = "WEBP";
})(ImageContentType = exports.ImageContentType || (exports.ImageContentType = {}));
/** Possible error codes that can be returned by `InventoryBulkToggleActivationUserError`. */
var InventoryBulkToggleActivationUserErrorCode;
(function (InventoryBulkToggleActivationUserErrorCode) {
    /** An error occurred while setting the activation status. */
    InventoryBulkToggleActivationUserErrorCode["GenericError"] = "GENERIC_ERROR";
})(InventoryBulkToggleActivationUserErrorCode = exports.InventoryBulkToggleActivationUserErrorCode || (exports.InventoryBulkToggleActivationUserErrorCode = {}));
/** The key of a localization extension. */
var LocalizationExtensionKey;
(function (LocalizationExtensionKey) {
    /** Extension key 'shipping_credential_br' for country BR. */
    LocalizationExtensionKey["ShippingCredentialBr"] = "SHIPPING_CREDENTIAL_BR";
    /** Extension key 'shipping_credential_cn' for country CN. */
    LocalizationExtensionKey["ShippingCredentialCn"] = "SHIPPING_CREDENTIAL_CN";
    /** Extension key 'shipping_credential_kr' for country KR. */
    LocalizationExtensionKey["ShippingCredentialKr"] = "SHIPPING_CREDENTIAL_KR";
    /** Extension key 'tax_credential_br' for country BR. */
    LocalizationExtensionKey["TaxCredentialBr"] = "TAX_CREDENTIAL_BR";
    /** Extension key 'tax_credential_it' for country IT. */
    LocalizationExtensionKey["TaxCredentialIt"] = "TAX_CREDENTIAL_IT";
    /** Extension key 'tax_email_it' for country IT. */
    LocalizationExtensionKey["TaxEmailIt"] = "TAX_EMAIL_IT";
})(LocalizationExtensionKey = exports.LocalizationExtensionKey || (exports.LocalizationExtensionKey = {}));
/** The purpose of a localization extension. */
var LocalizationExtensionPurpose;
(function (LocalizationExtensionPurpose) {
    /** Extensions that are used for shipping purposes, for example, customs clearance. */
    LocalizationExtensionPurpose["Shipping"] = "SHIPPING";
    /** Extensions that are used for taxes purposes, for example, invoicing. */
    LocalizationExtensionPurpose["Tax"] = "TAX";
})(LocalizationExtensionPurpose = exports.LocalizationExtensionPurpose || (exports.LocalizationExtensionPurpose = {}));
/** Possible error codes that can be returned by `LocationActivateUserError`. */
var LocationActivateUserErrorCode;
(function (LocationActivateUserErrorCode) {
    /** An error occurred while activating the location. */
    LocationActivateUserErrorCode["GenericError"] = "GENERIC_ERROR";
    /** This location currently cannot be activated as inventory, pending orders or transfers are being relocated from this location. */
    LocationActivateUserErrorCode["HasOngoingRelocation"] = "HAS_ONGOING_RELOCATION";
    /** Shop has reached its location limit. */
    LocationActivateUserErrorCode["LocationLimit"] = "LOCATION_LIMIT";
    /** Location not found. */
    LocationActivateUserErrorCode["LocationNotFound"] = "LOCATION_NOT_FOUND";
})(LocationActivateUserErrorCode = exports.LocationActivateUserErrorCode || (exports.LocationActivateUserErrorCode = {}));
/** Possible error codes that can be returned by `LocationAddUserError`. */
var LocationAddUserErrorCode;
(function (LocationAddUserErrorCode) {
    /** The input value is blank. */
    LocationAddUserErrorCode["Blank"] = "BLANK";
    /** An error occurred while adding the location. */
    LocationAddUserErrorCode["GenericError"] = "GENERIC_ERROR";
    /** The input value is invalid. */
    LocationAddUserErrorCode["Invalid"] = "INVALID";
    /** The ZIP code is not a valid US ZIP code. */
    LocationAddUserErrorCode["InvalidUsZipcode"] = "INVALID_US_ZIPCODE";
    /** The input value is already taken. */
    LocationAddUserErrorCode["Taken"] = "TAKEN";
    /** The input value is too long. */
    LocationAddUserErrorCode["TooLong"] = "TOO_LONG";
})(LocationAddUserErrorCode = exports.LocationAddUserErrorCode || (exports.LocationAddUserErrorCode = {}));
/** Possible error codes that can be returned by `LocationDeactivateUserError`. */
var LocationDeactivateUserErrorCode;
(function (LocationDeactivateUserErrorCode) {
    /** At least one location must fulfill online orders. */
    LocationDeactivateUserErrorCode["CannotDisableOnlineOrderFulfillment"] = "CANNOT_DISABLE_ONLINE_ORDER_FULFILLMENT";
    /** Destination location is the same as the location to be deactivated. */
    LocationDeactivateUserErrorCode["DestinationLocationIsTheSameLocation"] = "DESTINATION_LOCATION_IS_THE_SAME_LOCATION";
    /** Destination location is not found or inactive. */
    LocationDeactivateUserErrorCode["DestinationLocationNotFoundOrInactive"] = "DESTINATION_LOCATION_NOT_FOUND_OR_INACTIVE";
    /** Failed to relocate active inventories to the destination location. */
    LocationDeactivateUserErrorCode["FailedToRelocateActiveInventories"] = "FAILED_TO_RELOCATE_ACTIVE_INVENTORIES";
    /** Failed to relocate incoming movements to the destination location. */
    LocationDeactivateUserErrorCode["FailedToRelocateIncomingMovements"] = "FAILED_TO_RELOCATE_INCOMING_MOVEMENTS";
    /** Failed to relocate open purchase orders to the destination location. */
    LocationDeactivateUserErrorCode["FailedToRelocateOpenPurchaseOrders"] = "FAILED_TO_RELOCATE_OPEN_PURCHASE_ORDERS";
    /** Failed to relocate open transfers to the destination location. */
    LocationDeactivateUserErrorCode["FailedToRelocateOpenTransfers"] = "FAILED_TO_RELOCATE_OPEN_TRANSFERS";
    /** Location could not be deactivated without specifying where to relocate inventory at the location. */
    LocationDeactivateUserErrorCode["HasActiveInventoryError"] = "HAS_ACTIVE_INVENTORY_ERROR";
    /** Location needs to be removed from Shopify POS for Retail subscription in Point of Sale channel. */
    LocationDeactivateUserErrorCode["HasActiveRetailSubscriptions"] = "HAS_ACTIVE_RETAIL_SUBSCRIPTIONS";
    /** Location could not be deactivated because it has pending orders. */
    LocationDeactivateUserErrorCode["HasFulfillmentOrdersError"] = "HAS_FULFILLMENT_ORDERS_ERROR";
    /** Location could not be deactivated because it has open Shopify Fulfillment Network transfers. */
    LocationDeactivateUserErrorCode["HasIncomingMovementsError"] = "HAS_INCOMING_MOVEMENTS_ERROR";
    /** Location could not be deactivated because it has open purchase orders. */
    LocationDeactivateUserErrorCode["HasOpenPurchaseOrdersError"] = "HAS_OPEN_PURCHASE_ORDERS_ERROR";
    /** Location could not be deactivated because it has open transfers. */
    LocationDeactivateUserErrorCode["HasOpenTransfersError"] = "HAS_OPEN_TRANSFERS_ERROR";
    /** The input value is invalid. */
    LocationDeactivateUserErrorCode["Invalid"] = "INVALID";
    /** Location not found. */
    LocationDeactivateUserErrorCode["LocationNotFound"] = "LOCATION_NOT_FOUND";
    /** Location either has a fulfillment serivice or is the only location with a shipping address. */
    LocationDeactivateUserErrorCode["PermanentlyBlockedFromDeactivationError"] = "PERMANENTLY_BLOCKED_FROM_DEACTIVATION_ERROR";
    /** Location has incoming inventory. The location can be deactivated after the inventory has been received. */
    LocationDeactivateUserErrorCode["TemporarilyBlockedFromDeactivationError"] = "TEMPORARILY_BLOCKED_FROM_DEACTIVATION_ERROR";
})(LocationDeactivateUserErrorCode = exports.LocationDeactivateUserErrorCode || (exports.LocationDeactivateUserErrorCode = {}));
/** Possible error codes that can be returned by `LocationDeleteUserError`. */
var LocationDeleteUserErrorCode;
(function (LocationDeleteUserErrorCode) {
    /** An error occurred while deleting the location. */
    LocationDeleteUserErrorCode["GenericError"] = "GENERIC_ERROR";
    /** The location cannot be deleted while it has any active Retail subscriptions in the Point of Sale channel. */
    LocationDeleteUserErrorCode["LocationHasActiveRetailSubscription"] = "LOCATION_HAS_ACTIVE_RETAIL_SUBSCRIPTION";
    /** The location cannot be deleted while it has inventory. */
    LocationDeleteUserErrorCode["LocationHasInventory"] = "LOCATION_HAS_INVENTORY";
    /** The location cannot be deleted while it has pending orders. */
    LocationDeleteUserErrorCode["LocationHasPendingOrders"] = "LOCATION_HAS_PENDING_ORDERS";
    /** The location cannot be deleted while it is active. */
    LocationDeleteUserErrorCode["LocationIsActive"] = "LOCATION_IS_ACTIVE";
    /** Location not found. */
    LocationDeleteUserErrorCode["LocationNotFound"] = "LOCATION_NOT_FOUND";
})(LocationDeleteUserErrorCode = exports.LocationDeleteUserErrorCode || (exports.LocationDeleteUserErrorCode = {}));
/** Possible error codes that can be returned by `LocationEditUserError`. */
var LocationEditUserErrorCode;
(function (LocationEditUserErrorCode) {
    /** The input value is blank. */
    LocationEditUserErrorCode["Blank"] = "BLANK";
    /** At least one location must fulfill online orders. */
    LocationEditUserErrorCode["CannotDisableOnlineOrderFulfillment"] = "CANNOT_DISABLE_ONLINE_ORDER_FULFILLMENT";
    /** An error occurred while editing the location. */
    LocationEditUserErrorCode["GenericError"] = "GENERIC_ERROR";
    /** The input value is invalid. */
    LocationEditUserErrorCode["Invalid"] = "INVALID";
    /** The ZIP code is not a valid US ZIP code. */
    LocationEditUserErrorCode["InvalidUsZipcode"] = "INVALID_US_ZIPCODE";
    /** The record with the ID used as the input value couldn't be found. */
    LocationEditUserErrorCode["NotFound"] = "NOT_FOUND";
    /** The input value is too long. */
    LocationEditUserErrorCode["TooLong"] = "TOO_LONG";
})(LocationEditUserErrorCode = exports.LocationEditUserErrorCode || (exports.LocationEditUserErrorCode = {}));
/** The set of valid sort keys for the Location query. */
var LocationSortKeys;
(function (LocationSortKeys) {
    /** Sort by the `id` value. */
    LocationSortKeys["Id"] = "ID";
    /** Sort by the `name` value. */
    LocationSortKeys["Name"] = "NAME";
    /**
     * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
     * Don't use this sort key when no search query is specified.
     *
     */
    LocationSortKeys["Relevance"] = "RELEVANCE";
})(LocationSortKeys = exports.LocationSortKeys || (exports.LocationSortKeys = {}));
/** Possible error codes that can be returned by `MarketCurrencySettingsUserError`. */
var MarketCurrencySettingsUserErrorCode;
(function (MarketCurrencySettingsUserErrorCode) {
    /** The currency settings of the given market cannot be changed because the market manager has exclusive control of pricing. */
    MarketCurrencySettingsUserErrorCode["ManagedMarket"] = "MANAGED_MARKET";
    /** The specified market wasn't found. */
    MarketCurrencySettingsUserErrorCode["MarketNotFound"] = "MARKET_NOT_FOUND";
    /** The shop's payment gateway does not support enabling more than one currency. */
    MarketCurrencySettingsUserErrorCode["MultipleCurrenciesNotSupported"] = "MULTIPLE_CURRENCIES_NOT_SUPPORTED";
    /** Can't enable or disable local currencies on a single country market. */
    MarketCurrencySettingsUserErrorCode["NoLocalCurrenciesOnSingleCountryMarket"] = "NO_LOCAL_CURRENCIES_ON_SINGLE_COUNTRY_MARKET";
    /** The primary market must use the shop currency. */
    MarketCurrencySettingsUserErrorCode["PrimaryMarketUsesShopCurrency"] = "PRIMARY_MARKET_USES_SHOP_CURRENCY";
    /** The specified currency is not supported. */
    MarketCurrencySettingsUserErrorCode["UnsupportedCurrency"] = "UNSUPPORTED_CURRENCY";
})(MarketCurrencySettingsUserErrorCode = exports.MarketCurrencySettingsUserErrorCode || (exports.MarketCurrencySettingsUserErrorCode = {}));
/** The type of resources that are market localizable. */
var MarketLocalizableResourceType;
(function (MarketLocalizableResourceType) {
    /** A metafield. Market localizable fields: `value`. */
    MarketLocalizableResourceType["Metafield"] = "METAFIELD";
})(MarketLocalizableResourceType = exports.MarketLocalizableResourceType || (exports.MarketLocalizableResourceType = {}));
/** Possible error codes that can be returned by `MarketUserError`. */
var MarketUserErrorCode;
(function (MarketUserErrorCode) {
    /** The input value is blank. */
    MarketUserErrorCode["Blank"] = "BLANK";
    /** Can't add customer account domain to a market. */
    MarketUserErrorCode["CannotAddCustomerDomain"] = "CANNOT_ADD_CUSTOMER_DOMAIN";
    /** Can't add regions to the primary market. */
    MarketUserErrorCode["CannotAddRegionsToPrimaryMarket"] = "CANNOT_ADD_REGIONS_TO_PRIMARY_MARKET";
    /** Can't add the web presence to the primary market. */
    MarketUserErrorCode["CannotAddWebPresenceToPrimaryMarket"] = "CANNOT_ADD_WEB_PRESENCE_TO_PRIMARY_MARKET";
    /** Can't delete the only region in a market. */
    MarketUserErrorCode["CannotDeleteOnlyRegion"] = "CANNOT_DELETE_ONLY_REGION";
    /** Can't delete the primary market. */
    MarketUserErrorCode["CannotDeletePrimaryMarket"] = "CANNOT_DELETE_PRIMARY_MARKET";
    /** Can't delete the primary market's web presence. */
    MarketUserErrorCode["CannotDeletePrimaryMarketWebPresence"] = "CANNOT_DELETE_PRIMARY_MARKET_WEB_PRESENCE";
    /** Can't disable the primary market. */
    MarketUserErrorCode["CannotDisablePrimaryMarket"] = "CANNOT_DISABLE_PRIMARY_MARKET";
    /** Can't pass both `subfolderSuffix` and `domainId`. */
    MarketUserErrorCode["CannotHaveSubfolderAndDomain"] = "CANNOT_HAVE_SUBFOLDER_AND_DOMAIN";
    /** Can't set default locale to null. */
    MarketUserErrorCode["CannotSetDefaultLocaleToNull"] = "CANNOT_SET_DEFAULT_LOCALE_TO_NULL";
    /** The language isn't enabled on the store. */
    MarketUserErrorCode["DisabledLanguage"] = "DISABLED_LANGUAGE";
    /** Domain was not found. */
    MarketUserErrorCode["DomainNotFound"] = "DOMAIN_NOT_FOUND";
    /** Duplicates found in languages. */
    MarketUserErrorCode["DuplicateLanguages"] = "DUPLICATE_LANGUAGES";
    /** The input value is invalid. */
    MarketUserErrorCode["Invalid"] = "INVALID";
    /** The market wasn't found. */
    MarketUserErrorCode["MarketNotFound"] = "MARKET_NOT_FOUND";
    /** No languages selected. */
    MarketUserErrorCode["NoLanguages"] = "NO_LANGUAGES";
    /** The primary market must use the primary domain. */
    MarketUserErrorCode["PrimaryMarketMustUsePrimaryDomain"] = "PRIMARY_MARKET_MUST_USE_PRIMARY_DOMAIN";
    /** The market region wasn't found. */
    MarketUserErrorCode["RegionNotFound"] = "REGION_NOT_FOUND";
    /** Cannot add region-specific language. */
    MarketUserErrorCode["RegionSpecificLanguage"] = "REGION_SPECIFIC_LANGUAGE";
    /** One of `subfolderSuffix` or `domainId` is required. */
    MarketUserErrorCode["RequiresDomainOrSubfolder"] = "REQUIRES_DOMAIN_OR_SUBFOLDER";
    /** Exactly one input option is required. */
    MarketUserErrorCode["RequiresExactlyOneOption"] = "REQUIRES_EXACTLY_ONE_OPTION";
    /** Can't have more than 50 markets. */
    MarketUserErrorCode["ShopReachedMarketsLimit"] = "SHOP_REACHED_MARKETS_LIMIT";
    /** Can't create subfolders if the primary domain is a country code top-level domain (ccTLDs). */
    MarketUserErrorCode["SubfolderNotAllowedForCctldDomains"] = "SUBFOLDER_NOT_ALLOWED_FOR_CCTLD_DOMAINS";
    /** The subfolder suffix must contain only letters. */
    MarketUserErrorCode["SubfolderSuffixMustContainOnlyLetters"] = "SUBFOLDER_SUFFIX_MUST_CONTAIN_ONLY_LETTERS";
    /** The input value is already taken. */
    MarketUserErrorCode["Taken"] = "TAKEN";
    /** The input value is too long. */
    MarketUserErrorCode["TooLong"] = "TOO_LONG";
    /** The input value is too short. */
    MarketUserErrorCode["TooShort"] = "TOO_SHORT";
    /** The language isn't published to the store. */
    MarketUserErrorCode["UnpublishedLanguage"] = "UNPUBLISHED_LANGUAGE";
    /** Can't add unsupported country or region. */
    MarketUserErrorCode["UnsupportedCountryRegion"] = "UNSUPPORTED_COUNTRY_REGION";
    /** The market web presence wasn't found. */
    MarketUserErrorCode["WebPresenceNotFound"] = "WEB_PRESENCE_NOT_FOUND";
})(MarketUserErrorCode = exports.MarketUserErrorCode || (exports.MarketUserErrorCode = {}));
/** The error code resulted from the marketing activity extension integration. */
var MarketingActivityExtensionAppErrorCode;
(function (MarketingActivityExtensionAppErrorCode) {
    /** The app is either not responding or returning unexpected data. */
    MarketingActivityExtensionAppErrorCode["ApiError"] = "API_ERROR";
    /** The app needs to be installed. */
    MarketingActivityExtensionAppErrorCode["InstallRequiredError"] = "INSTALL_REQUIRED_ERROR";
    /** The shop/user must be onboarded to use the app. */
    MarketingActivityExtensionAppErrorCode["NotOnboardedError"] = "NOT_ONBOARDED_ERROR";
    /** The app has returned an error when invoking the platform. */
    MarketingActivityExtensionAppErrorCode["PlatformError"] = "PLATFORM_ERROR";
    /** The app has returned validation errors. */
    MarketingActivityExtensionAppErrorCode["ValidationError"] = "VALIDATION_ERROR";
})(MarketingActivityExtensionAppErrorCode = exports.MarketingActivityExtensionAppErrorCode || (exports.MarketingActivityExtensionAppErrorCode = {}));
/** The set of valid sort keys for the MarketingActivity query. */
var MarketingActivitySortKeys;
(function (MarketingActivitySortKeys) {
    /** Sort by the `created_at` value. */
    MarketingActivitySortKeys["CreatedAt"] = "CREATED_AT";
    /** Sort by the `id` value. */
    MarketingActivitySortKeys["Id"] = "ID";
    /**
     * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
     * Don't use this sort key when no search query is specified.
     *
     */
    MarketingActivitySortKeys["Relevance"] = "RELEVANCE";
    /** Sort by the `title` value. */
    MarketingActivitySortKeys["Title"] = "TITLE";
})(MarketingActivitySortKeys = exports.MarketingActivitySortKeys || (exports.MarketingActivitySortKeys = {}));
/** Status helps to identify if this marketing activity has been completed, queued, failed etc. */
var MarketingActivityStatus;
(function (MarketingActivityStatus) {
    /** This marketing activity is currently running. */
    MarketingActivityStatus["Active"] = "ACTIVE";
    /** This marketing activity is permanently unavailable. */
    MarketingActivityStatus["Deleted"] = "DELETED";
    /** This marketing activity was deleted and it was triggered from outside of Shopify. */
    MarketingActivityStatus["DeletedExternally"] = "DELETED_EXTERNALLY";
    /** This marketing activity is disconnected and no longer editable. */
    MarketingActivityStatus["Disconnected"] = "DISCONNECTED";
    /** This marketing activity has been edited, but it is not yet created. */
    MarketingActivityStatus["Draft"] = "DRAFT";
    /** This marketing activity is unable to run. */
    MarketingActivityStatus["Failed"] = "FAILED";
    /** This marketing activity has completed running. */
    MarketingActivityStatus["Inactive"] = "INACTIVE";
    /** This marketing activity is currently not running. */
    MarketingActivityStatus["Paused"] = "PAUSED";
    /** This marketing activity is pending creation on the app's marketing platform. */
    MarketingActivityStatus["Pending"] = "PENDING";
    /** This marketing activity is scheduled to run. */
    MarketingActivityStatus["Scheduled"] = "SCHEDULED";
    /** The marketing activity's status is unknown. */
    MarketingActivityStatus["Undefined"] = "UNDEFINED";
})(MarketingActivityStatus = exports.MarketingActivityStatus || (exports.MarketingActivityStatus = {}));
/** StatusBadgeType helps to identify the color of the status badge. */
var MarketingActivityStatusBadgeType;
(function (MarketingActivityStatusBadgeType) {
    /** This status badge has type attention. */
    MarketingActivityStatusBadgeType["Attention"] = "ATTENTION";
    /** This status badge has type default. */
    MarketingActivityStatusBadgeType["Default"] = "DEFAULT";
    /** This status badge has type info. */
    MarketingActivityStatusBadgeType["Info"] = "INFO";
    /** This status badge has type success. */
    MarketingActivityStatusBadgeType["Success"] = "SUCCESS";
    /** This status badge has type warning. */
    MarketingActivityStatusBadgeType["Warning"] = "WARNING";
})(MarketingActivityStatusBadgeType = exports.MarketingActivityStatusBadgeType || (exports.MarketingActivityStatusBadgeType = {}));
/** Possible error codes that can be returned by `MarketingActivityUserError`. */
var MarketingActivityUserErrorCode;
(function (MarketingActivityUserErrorCode) {
    /** The input value is invalid. */
    MarketingActivityUserErrorCode["Invalid"] = "INVALID";
    /** The input value is already taken. */
    MarketingActivityUserErrorCode["Taken"] = "TAKEN";
})(MarketingActivityUserErrorCode = exports.MarketingActivityUserErrorCode || (exports.MarketingActivityUserErrorCode = {}));
/** The budget type for a marketing activity. */
var MarketingBudgetBudgetType;
(function (MarketingBudgetBudgetType) {
    /** A daily budget. */
    MarketingBudgetBudgetType["Daily"] = "DAILY";
    /** A budget for the lifetime of a marketing activity. */
    MarketingBudgetBudgetType["Lifetime"] = "LIFETIME";
})(MarketingBudgetBudgetType = exports.MarketingBudgetBudgetType || (exports.MarketingBudgetBudgetType = {}));
/**
 * The available marketing channels for a marketing activity or event. A marketing channel is broad category of marketing, used for reporting aggregation.
 *
 */
var MarketingChannel;
(function (MarketingChannel) {
    /** Displayed ads. */
    MarketingChannel["Display"] = "DISPLAY";
    /** Email. */
    MarketingChannel["Email"] = "EMAIL";
    /** Referral links. */
    MarketingChannel["Referral"] = "REFERRAL";
    /** Paid search. */
    MarketingChannel["Search"] = "SEARCH";
    /** Social media. */
    MarketingChannel["Social"] = "SOCIAL";
})(MarketingChannel = exports.MarketingChannel || (exports.MarketingChannel = {}));
/** The set of valid sort keys for the MarketingEvent query. */
var MarketingEventSortKeys;
(function (MarketingEventSortKeys) {
    /** Sort by the `id` value. */
    MarketingEventSortKeys["Id"] = "ID";
    /**
     * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
     * Don't use this sort key when no search query is specified.
     *
     */
    MarketingEventSortKeys["Relevance"] = "RELEVANCE";
    /** Sort by the `started_at` value. */
    MarketingEventSortKeys["StartedAt"] = "STARTED_AT";
})(MarketingEventSortKeys = exports.MarketingEventSortKeys || (exports.MarketingEventSortKeys = {}));
/** The available types of marketing event. */
var MarketingTactic;
(function (MarketingTactic) {
    /** An abandoned cart recovery email. */
    MarketingTactic["AbandonedCart"] = "ABANDONED_CART";
    /** An ad, such as a Facebook ad. */
    MarketingTactic["Ad"] = "AD";
    /** An affiliate link. */
    MarketingTactic["Affiliate"] = "AFFILIATE";
    /** A direct visit to the online store. */
    MarketingTactic["Direct"] = "DIRECT";
    /**
     * A display ad.
     * @deprecated `DISPLAY` is deprecated. Use `AD` instead.
     */
    MarketingTactic["Display"] = "DISPLAY";
    /**
     * A follow-up email.
     * @deprecated 'FOLLOW_UP' is deprecated. Use 'TRANSACTIONAL' instead.
     */
    MarketingTactic["FollowUp"] = "FOLLOW_UP";
    /** A link. */
    MarketingTactic["Link"] = "LINK";
    /** A loyalty program. */
    MarketingTactic["Loyalty"] = "LOYALTY";
    /** A messaging app, such as Facebook Messenger. */
    MarketingTactic["Message"] = "MESSAGE";
    /** A newsletter. */
    MarketingTactic["Newsletter"] = "NEWSLETTER";
    /** A notification in the Shopify admin. */
    MarketingTactic["Notification"] = "NOTIFICATION";
    /** A blog post. */
    MarketingTactic["Post"] = "POST";
    /**
     * A promotional receipt.
     * @deprecated 'RECEIPT' is deprecated. Use 'TRANSACTIONAL' instead.
     */
    MarketingTactic["Receipt"] = "RECEIPT";
    /** A retargeting ad. */
    MarketingTactic["Retargeting"] = "RETARGETING";
    /**
     * Paid search.
     * @deprecated `SEARCH` is deprecated. Use `AD` instead.
     */
    MarketingTactic["Search"] = "SEARCH";
    /** Search engine optimization. */
    MarketingTactic["Seo"] = "SEO";
    /** A popup on the online store. */
    MarketingTactic["StorefrontApp"] = "STOREFRONT_APP";
    /** A transactional email. */
    MarketingTactic["Transactional"] = "TRANSACTIONAL";
})(MarketingTactic = exports.MarketingTactic || (exports.MarketingTactic = {}));
/** The possible content types for a media object. */
var MediaContentType;
(function (MediaContentType) {
    /** An externally hosted video. */
    MediaContentType["ExternalVideo"] = "EXTERNAL_VIDEO";
    /** A Shopify-hosted image. */
    MediaContentType["Image"] = "IMAGE";
    /** A 3d model. */
    MediaContentType["Model_3D"] = "MODEL_3D";
    /** A Shopify-hosted video. */
    MediaContentType["Video"] = "VIDEO";
})(MediaContentType = exports.MediaContentType || (exports.MediaContentType = {}));
/** Error types for media. */
var MediaErrorCode;
(function (MediaErrorCode) {
    /** Media could not be created because embed permissions are disabled for this video. */
    MediaErrorCode["ExternalVideoEmbedDisabled"] = "EXTERNAL_VIDEO_EMBED_DISABLED";
    /** Media could not be created because video is either not found or still transcoding. */
    MediaErrorCode["ExternalVideoEmbedNotFoundOrTranscoding"] = "EXTERNAL_VIDEO_EMBED_NOT_FOUND_OR_TRANSCODING";
    /** Media could not be created because the external video has an invalid aspect ratio. */
    MediaErrorCode["ExternalVideoInvalidAspectRatio"] = "EXTERNAL_VIDEO_INVALID_ASPECT_RATIO";
    /** Media could not be created because the external video could not be found. */
    MediaErrorCode["ExternalVideoNotFound"] = "EXTERNAL_VIDEO_NOT_FOUND";
    /** Media could not be created because the external video is not listed or is private. */
    MediaErrorCode["ExternalVideoUnlisted"] = "EXTERNAL_VIDEO_UNLISTED";
    /** Media could not be created because the cumulative file storage limit would be exceeded. */
    MediaErrorCode["FileStorageLimitExceeded"] = "FILE_STORAGE_LIMIT_EXCEEDED";
    /** File could not be processed because the source could not be downloaded. */
    MediaErrorCode["GenericFileDownloadFailure"] = "GENERIC_FILE_DOWNLOAD_FAILURE";
    /** File could not be created because the size is too large. */
    MediaErrorCode["GenericFileInvalidSize"] = "GENERIC_FILE_INVALID_SIZE";
    /** Media could not be processed because the image could not be downloaded. */
    MediaErrorCode["ImageDownloadFailure"] = "IMAGE_DOWNLOAD_FAILURE";
    /** Media could not be processed because the image could not be processed. */
    MediaErrorCode["ImageProcessingFailure"] = "IMAGE_PROCESSING_FAILURE";
    /** Media could not be created because the image has an invalid aspect ratio. */
    MediaErrorCode["InvalidImageAspectRatio"] = "INVALID_IMAGE_ASPECT_RATIO";
    /** Media could not be created because the image size is too large. */
    MediaErrorCode["InvalidImageFileSize"] = "INVALID_IMAGE_FILE_SIZE";
    /** Media could not be created because the image's resolution exceeds the max limit. */
    MediaErrorCode["InvalidImageResolution"] = "INVALID_IMAGE_RESOLUTION";
    /** Media could not be processed because the signed URL was invalid. */
    MediaErrorCode["InvalidSignedUrl"] = "INVALID_SIGNED_URL";
    /** Media timed out because it is currently being modified by another operation. */
    MediaErrorCode["MediaTimeoutError"] = "MEDIA_TIMEOUT_ERROR";
    /** Media could not be created because the model file failed processing. */
    MediaErrorCode["Model3DGlbOutputCreationError"] = "MODEL3D_GLB_OUTPUT_CREATION_ERROR";
    /** Media could not be created because the model can't be converted to USDZ format. */
    MediaErrorCode["Model3DGlbToUsdzConversionError"] = "MODEL3D_GLB_TO_USDZ_CONVERSION_ERROR";
    /** Media could not be created because the model file failed processing. */
    MediaErrorCode["Model3DProcessingFailure"] = "MODEL3D_PROCESSING_FAILURE";
    /** Media could not be created because the model's thumbnail generation failed. */
    MediaErrorCode["Model3DThumbnailGenerationError"] = "MODEL3D_THUMBNAIL_GENERATION_ERROR";
    /** Model failed validation. */
    MediaErrorCode["Model3DValidationError"] = "MODEL3D_VALIDATION_ERROR";
    /** Media error has occured for unknown reason. */
    MediaErrorCode["Unknown"] = "UNKNOWN";
    /** Media could not be created because the image is an unsupported file type. */
    MediaErrorCode["UnsupportedImageFileType"] = "UNSUPPORTED_IMAGE_FILE_TYPE";
    /** Media could not be created because it has an invalid file type. */
    MediaErrorCode["VideoInvalidFiletypeError"] = "VIDEO_INVALID_FILETYPE_ERROR";
    /** Media could not be created because it does not meet the maximum duration requirement. */
    MediaErrorCode["VideoMaxDurationError"] = "VIDEO_MAX_DURATION_ERROR";
    /** Media could not be created because it does not meet the maximum height requirement. */
    MediaErrorCode["VideoMaxHeightError"] = "VIDEO_MAX_HEIGHT_ERROR";
    /** Media could not be created because it does not meet the maximum width requirement. */
    MediaErrorCode["VideoMaxWidthError"] = "VIDEO_MAX_WIDTH_ERROR";
    /** Media could not be created because the metadata could not be read. */
    MediaErrorCode["VideoMetadataReadError"] = "VIDEO_METADATA_READ_ERROR";
    /** Media could not be created because it does not meet the minimum duration requirement. */
    MediaErrorCode["VideoMinDurationError"] = "VIDEO_MIN_DURATION_ERROR";
    /** Media could not be created because it does not meet the minimum height requirement. */
    MediaErrorCode["VideoMinHeightError"] = "VIDEO_MIN_HEIGHT_ERROR";
    /** Media could not be created because it does not meet the minimum width requirement. */
    MediaErrorCode["VideoMinWidthError"] = "VIDEO_MIN_WIDTH_ERROR";
    /** Video failed validation. */
    MediaErrorCode["VideoValidationError"] = "VIDEO_VALIDATION_ERROR";
})(MediaErrorCode = exports.MediaErrorCode || (exports.MediaErrorCode = {}));
/** Host for a Media Resource. */
var MediaHost;
(function (MediaHost) {
    /** Host for Vimeo embedded videos. */
    MediaHost["Vimeo"] = "VIMEO";
    /** Host for YouTube embedded videos. */
    MediaHost["Youtube"] = "YOUTUBE";
})(MediaHost = exports.MediaHost || (exports.MediaHost = {}));
/** The possible statuses for a media preview image. */
var MediaPreviewImageStatus;
(function (MediaPreviewImageStatus) {
    /** Preview image processing has failed. */
    MediaPreviewImageStatus["Failed"] = "FAILED";
    /** Preview image is being processed. */
    MediaPreviewImageStatus["Processing"] = "PROCESSING";
    /** Preview image is ready to be displayed. */
    MediaPreviewImageStatus["Ready"] = "READY";
    /** Preview image is uploaded but not yet processed. */
    MediaPreviewImageStatus["Uploaded"] = "UPLOADED";
})(MediaPreviewImageStatus = exports.MediaPreviewImageStatus || (exports.MediaPreviewImageStatus = {}));
/** The possible statuses for a media object. */
var MediaStatus;
(function (MediaStatus) {
    /** Media processing has failed. */
    MediaStatus["Failed"] = "FAILED";
    /** Media is being processed. */
    MediaStatus["Processing"] = "PROCESSING";
    /** Media is ready to be displayed. */
    MediaStatus["Ready"] = "READY";
    /** Media has been uploaded but not yet processed. */
    MediaStatus["Uploaded"] = "UPLOADED";
})(MediaStatus = exports.MediaStatus || (exports.MediaStatus = {}));
/** Possible error codes that can be returned by `MediaUserError`. */
var MediaUserErrorCode;
(function (MediaUserErrorCode) {
    /** The input value is blank. */
    MediaUserErrorCode["Blank"] = "BLANK";
    /** The input value is invalid. */
    MediaUserErrorCode["Invalid"] = "INVALID";
    /** Invalid media type. */
    MediaUserErrorCode["InvalidMediaType"] = "INVALID_MEDIA_TYPE";
    /** Exceeded the maximum number of 100 variant-media pairs per mutation call. */
    MediaUserErrorCode["MaximumVariantMediaPairsExceeded"] = "MAXIMUM_VARIANT_MEDIA_PAIRS_EXCEEDED";
    /** Media cannot be modified. It is currently being modified by another operation. */
    MediaUserErrorCode["MediaCannotBeModified"] = "MEDIA_CANNOT_BE_MODIFIED";
    /** Media does not exist. */
    MediaUserErrorCode["MediaDoesNotExist"] = "MEDIA_DOES_NOT_EXIST";
    /** Media does not exist on the given product. */
    MediaUserErrorCode["MediaDoesNotExistOnProduct"] = "MEDIA_DOES_NOT_EXIST_ON_PRODUCT";
    /** The specified media is not attached to the specified variant. */
    MediaUserErrorCode["MediaIsNotAttachedToVariant"] = "MEDIA_IS_NOT_ATTACHED_TO_VARIANT";
    /** Model3d creation throttle was exceeded. */
    MediaUserErrorCode["Model3DThrottleExceeded"] = "MODEL3D_THROTTLE_EXCEEDED";
    /** Model validation failed. */
    MediaUserErrorCode["Model3DValidationError"] = "MODEL3D_VALIDATION_ERROR";
    /** Non-ready media are not supported. */
    MediaUserErrorCode["NonReadyMedia"] = "NON_READY_MEDIA";
    /** Product does not exist. */
    MediaUserErrorCode["ProductDoesNotExist"] = "PRODUCT_DOES_NOT_EXIST";
    /** Exceeded the limit of media per product. */
    MediaUserErrorCode["ProductMediaLimitExceeded"] = "PRODUCT_MEDIA_LIMIT_EXCEEDED";
    /** Product variant already has attached media. */
    MediaUserErrorCode["ProductVariantAlreadyHasMedia"] = "PRODUCT_VARIANT_ALREADY_HAS_MEDIA";
    /** Variant does not exist on the given product. */
    MediaUserErrorCode["ProductVariantDoesNotExistOnProduct"] = "PRODUCT_VARIANT_DOES_NOT_EXIST_ON_PRODUCT";
    /** Variant specified in more than one pair. */
    MediaUserErrorCode["ProductVariantSpecifiedMultipleTimes"] = "PRODUCT_VARIANT_SPECIFIED_MULTIPLE_TIMES";
    /** Exceeded the limit of media per shop. */
    MediaUserErrorCode["ShopMediaLimitExceeded"] = "SHOP_MEDIA_LIMIT_EXCEEDED";
    /** Only one mediaId is allowed per variant-media input pair. */
    MediaUserErrorCode["TooManyMediaPerInputPair"] = "TOO_MANY_MEDIA_PER_INPUT_PAIR";
    /** Video creation throttle was exceeded. */
    MediaUserErrorCode["VideoThrottleExceeded"] = "VIDEO_THROTTLE_EXCEEDED";
    /** Video validation failed. */
    MediaUserErrorCode["VideoValidationError"] = "VIDEO_VALIDATION_ERROR";
})(MediaUserErrorCode = exports.MediaUserErrorCode || (exports.MediaUserErrorCode = {}));
/** Warning types for media. */
var MediaWarningCode;
(function (MediaWarningCode) {
    /** 3D model physical size might be invalid. The dimensions of your model are very large. Consider reviewing your model to ensure they are correct. */
    MediaWarningCode["ModelLargePhysicalSize"] = "MODEL_LARGE_PHYSICAL_SIZE";
    /** 3D model physical size might be invalid. The dimensions of your model are very small. Consider reviewing your model to ensure they are correct. */
    MediaWarningCode["ModelSmallPhysicalSize"] = "MODEL_SMALL_PHYSICAL_SIZE";
})(MediaWarningCode = exports.MediaWarningCode || (exports.MediaWarningCode = {}));
/** The class of the discount for combining purposes. */
var MerchandiseDiscountClass;
(function (MerchandiseDiscountClass) {
    /** Combined as an order discount. */
    MerchandiseDiscountClass["Order"] = "ORDER";
    /** Combined as a product discount. */
    MerchandiseDiscountClass["Product"] = "PRODUCT";
})(MerchandiseDiscountClass = exports.MerchandiseDiscountClass || (exports.MerchandiseDiscountClass = {}));
/** Possible error codes that can be returned by `MetafieldDefinitionCreateUserError`. */
var MetafieldDefinitionCreateUserErrorCode;
(function (MetafieldDefinitionCreateUserErrorCode) {
    /** A duplicate option. */
    MetafieldDefinitionCreateUserErrorCode["DuplicateOption"] = "DUPLICATE_OPTION";
    /** The input value isn't included in the list. */
    MetafieldDefinitionCreateUserErrorCode["Inclusion"] = "INCLUSION";
    /** The input value is invalid. */
    MetafieldDefinitionCreateUserErrorCode["Invalid"] = "INVALID";
    /** A field contains an invalid character. */
    MetafieldDefinitionCreateUserErrorCode["InvalidCharacter"] = "INVALID_CHARACTER";
    /** An invalid option. */
    MetafieldDefinitionCreateUserErrorCode["InvalidOption"] = "INVALID_OPTION";
    /** The maximum limit of definitions per owner type has exceeded. */
    MetafieldDefinitionCreateUserErrorCode["LimitExceeded"] = "LIMIT_EXCEEDED";
    /** The pinned limit has been reached for the owner type. */
    MetafieldDefinitionCreateUserErrorCode["PinnedLimitReached"] = "PINNED_LIMIT_REACHED";
    /** The input value needs to be blank. */
    MetafieldDefinitionCreateUserErrorCode["Present"] = "PRESENT";
    /** This namespace and key combination is reserved for standard definitions. */
    MetafieldDefinitionCreateUserErrorCode["ReservedNamespaceKey"] = "RESERVED_NAMESPACE_KEY";
    /** The definition limit per owner type has exceeded. */
    MetafieldDefinitionCreateUserErrorCode["ResourceTypeLimitExceeded"] = "RESOURCE_TYPE_LIMIT_EXCEEDED";
    /** The input value is already taken. */
    MetafieldDefinitionCreateUserErrorCode["Taken"] = "TAKEN";
    /** The input value is too long. */
    MetafieldDefinitionCreateUserErrorCode["TooLong"] = "TOO_LONG";
    /** The input value is too short. */
    MetafieldDefinitionCreateUserErrorCode["TooShort"] = "TOO_SHORT";
    /** This namespace and key combination is already in use for a set of your metafields. */
    MetafieldDefinitionCreateUserErrorCode["UnstructuredAlreadyExists"] = "UNSTRUCTURED_ALREADY_EXISTS";
})(MetafieldDefinitionCreateUserErrorCode = exports.MetafieldDefinitionCreateUserErrorCode || (exports.MetafieldDefinitionCreateUserErrorCode = {}));
/** Possible error codes that can be returned by `MetafieldDefinitionDeleteUserError`. */
var MetafieldDefinitionDeleteUserErrorCode;
(function (MetafieldDefinitionDeleteUserErrorCode) {
    /** An internal error occurred. */
    MetafieldDefinitionDeleteUserErrorCode["InternalError"] = "INTERNAL_ERROR";
    /** Definition not found. */
    MetafieldDefinitionDeleteUserErrorCode["NotFound"] = "NOT_FOUND";
    /** The input value needs to be blank. */
    MetafieldDefinitionDeleteUserErrorCode["Present"] = "PRESENT";
    /** Deleting a reference type metafield definition requires deletion of its associated metafields. */
    MetafieldDefinitionDeleteUserErrorCode["ReferenceTypeDeletionError"] = "REFERENCE_TYPE_DELETION_ERROR";
})(MetafieldDefinitionDeleteUserErrorCode = exports.MetafieldDefinitionDeleteUserErrorCode || (exports.MetafieldDefinitionDeleteUserErrorCode = {}));
/** Possible error codes that can be returned by `MetafieldDefinitionPinUserError`. */
var MetafieldDefinitionPinUserErrorCode;
(function (MetafieldDefinitionPinUserErrorCode) {
    /** The metafield definition is already pinned. */
    MetafieldDefinitionPinUserErrorCode["AlreadyPinned"] = "ALREADY_PINNED";
    /** An internal error occurred. */
    MetafieldDefinitionPinUserErrorCode["InternalError"] = "INTERNAL_ERROR";
    /** The metafield definition was not found. */
    MetafieldDefinitionPinUserErrorCode["NotFound"] = "NOT_FOUND";
    /** The pinned limit has been reached for owner type. */
    MetafieldDefinitionPinUserErrorCode["PinnedLimitReached"] = "PINNED_LIMIT_REACHED";
})(MetafieldDefinitionPinUserErrorCode = exports.MetafieldDefinitionPinUserErrorCode || (exports.MetafieldDefinitionPinUserErrorCode = {}));
/** Possible metafield definition pinned statuses. */
var MetafieldDefinitionPinnedStatus;
(function (MetafieldDefinitionPinnedStatus) {
    /** All metafield definitions. */
    MetafieldDefinitionPinnedStatus["Any"] = "ANY";
    /** Only metafield definitions that are pinned. */
    MetafieldDefinitionPinnedStatus["Pinned"] = "PINNED";
    /** Only metafield definitions that are not pinned. */
    MetafieldDefinitionPinnedStatus["Unpinned"] = "UNPINNED";
})(MetafieldDefinitionPinnedStatus = exports.MetafieldDefinitionPinnedStatus || (exports.MetafieldDefinitionPinnedStatus = {}));
/** The set of valid sort keys for the MetafieldDefinition query. */
var MetafieldDefinitionSortKeys;
(function (MetafieldDefinitionSortKeys) {
    /** Sort by the `id` value. */
    MetafieldDefinitionSortKeys["Id"] = "ID";
    /** Sort by the `name` value. */
    MetafieldDefinitionSortKeys["Name"] = "NAME";
    /** Sort by the `pinned_position` value. */
    MetafieldDefinitionSortKeys["PinnedPosition"] = "PINNED_POSITION";
    /**
     * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
     * Don't use this sort key when no search query is specified.
     *
     */
    MetafieldDefinitionSortKeys["Relevance"] = "RELEVANCE";
})(MetafieldDefinitionSortKeys = exports.MetafieldDefinitionSortKeys || (exports.MetafieldDefinitionSortKeys = {}));
/** Possible error codes that can be returned by `MetafieldDefinitionUnpinUserError`. */
var MetafieldDefinitionUnpinUserErrorCode;
(function (MetafieldDefinitionUnpinUserErrorCode) {
    /** An internal error occurred. */
    MetafieldDefinitionUnpinUserErrorCode["InternalError"] = "INTERNAL_ERROR";
    /** The metafield definition was not found. */
    MetafieldDefinitionUnpinUserErrorCode["NotFound"] = "NOT_FOUND";
    /** The metafield definition isn't pinned. */
    MetafieldDefinitionUnpinUserErrorCode["NotPinned"] = "NOT_PINNED";
})(MetafieldDefinitionUnpinUserErrorCode = exports.MetafieldDefinitionUnpinUserErrorCode || (exports.MetafieldDefinitionUnpinUserErrorCode = {}));
/** Possible error codes that can be returned by `MetafieldDefinitionUpdateUserError`. */
var MetafieldDefinitionUpdateUserErrorCode;
(function (MetafieldDefinitionUpdateUserErrorCode) {
    /** An internal error occurred. */
    MetafieldDefinitionUpdateUserErrorCode["InternalError"] = "INTERNAL_ERROR";
    /** An invalid input. */
    MetafieldDefinitionUpdateUserErrorCode["InvalidInput"] = "INVALID_INPUT";
    /** The metafield definition wasn't found. */
    MetafieldDefinitionUpdateUserErrorCode["NotFound"] = "NOT_FOUND";
    /** The pinned limit has been reached for the owner type. */
    MetafieldDefinitionUpdateUserErrorCode["PinnedLimitReached"] = "PINNED_LIMIT_REACHED";
    /** The input value needs to be blank. */
    MetafieldDefinitionUpdateUserErrorCode["Present"] = "PRESENT";
    /** The input value is too long. */
    MetafieldDefinitionUpdateUserErrorCode["TooLong"] = "TOO_LONG";
})(MetafieldDefinitionUpdateUserErrorCode = exports.MetafieldDefinitionUpdateUserErrorCode || (exports.MetafieldDefinitionUpdateUserErrorCode = {}));
/** Possible metafield definition validation statuses. */
var MetafieldDefinitionValidationStatus;
(function (MetafieldDefinitionValidationStatus) {
    /** All of this definition's metafields are valid. */
    MetafieldDefinitionValidationStatus["AllValid"] = "ALL_VALID";
    /** Asynchronous validation of this definition's metafields is in progress. */
    MetafieldDefinitionValidationStatus["InProgress"] = "IN_PROGRESS";
    /** Some of this definition's metafields are invalid. */
    MetafieldDefinitionValidationStatus["SomeInvalid"] = "SOME_INVALID";
})(MetafieldDefinitionValidationStatus = exports.MetafieldDefinitionValidationStatus || (exports.MetafieldDefinitionValidationStatus = {}));
/** Possible types of a metafield's owner resource. */
var MetafieldOwnerType;
(function (MetafieldOwnerType) {
    /** The Api Permission metafield owner type. */
    MetafieldOwnerType["ApiPermission"] = "API_PERMISSION";
    /** The Article metafield owner type. */
    MetafieldOwnerType["Article"] = "ARTICLE";
    /** The Blog metafield owner type. */
    MetafieldOwnerType["Blog"] = "BLOG";
    /** The Collection metafield owner type. */
    MetafieldOwnerType["Collection"] = "COLLECTION";
    /** The Customer metafield owner type. */
    MetafieldOwnerType["Customer"] = "CUSTOMER";
    /** The Discount metafield owner type. */
    MetafieldOwnerType["Discount"] = "DISCOUNT";
    /** The Draft Order metafield owner type. */
    MetafieldOwnerType["Draftorder"] = "DRAFTORDER";
    /** The Location metafield owner type. */
    MetafieldOwnerType["Location"] = "LOCATION";
    /** The Order metafield owner type. */
    MetafieldOwnerType["Order"] = "ORDER";
    /** The Page metafield owner type. */
    MetafieldOwnerType["Page"] = "PAGE";
    /** The Product metafield owner type. */
    MetafieldOwnerType["Product"] = "PRODUCT";
    /** The Product Image metafield owner type. */
    MetafieldOwnerType["Productimage"] = "PRODUCTIMAGE";
    /** The Product Variant metafield owner type. */
    MetafieldOwnerType["Productvariant"] = "PRODUCTVARIANT";
    /** The Shop metafield owner type. */
    MetafieldOwnerType["Shop"] = "SHOP";
})(MetafieldOwnerType = exports.MetafieldOwnerType || (exports.MetafieldOwnerType = {}));
/** Possible metafield validation statuses. */
var MetafieldValidationStatus;
(function (MetafieldValidationStatus) {
    /** Any validation status (valid or invalid). */
    MetafieldValidationStatus["Any"] = "ANY";
    /** Invalid (according to definition). */
    MetafieldValidationStatus["Invalid"] = "INVALID";
    /** Valid (according to definition). */
    MetafieldValidationStatus["Valid"] = "VALID";
})(MetafieldValidationStatus = exports.MetafieldValidationStatus || (exports.MetafieldValidationStatus = {}));
/**
 * Legacy type information for the stored value.
 * Replaced by `type`.
 *
 */
var MetafieldValueType;
(function (MetafieldValueType) {
    /** A `true` or `false` value. */
    MetafieldValueType["Boolean"] = "BOOLEAN";
    /** A whole number. */
    MetafieldValueType["Integer"] = "INTEGER";
    /** A JSON string. */
    MetafieldValueType["JsonString"] = "JSON_STRING";
    /** A text field. */
    MetafieldValueType["String"] = "STRING";
})(MetafieldValueType = exports.MetafieldValueType || (exports.MetafieldValueType = {}));
/** Possible error codes that can be returned by `MetafieldsSetUserError`. */
var MetafieldsSetUserErrorCode;
(function (MetafieldsSetUserErrorCode) {
    /** ApiPermission metafields can only be created or updated by the app owner. */
    MetafieldsSetUserErrorCode["AppNotAuthorized"] = "APP_NOT_AUTHORIZED";
    /** The input value is blank. */
    MetafieldsSetUserErrorCode["Blank"] = "BLANK";
    /** The input value isn't included in the list. */
    MetafieldsSetUserErrorCode["Inclusion"] = "INCLUSION";
    /** The type is invalid. */
    MetafieldsSetUserErrorCode["InvalidType"] = "INVALID_TYPE";
    /** The value is invalid for metafield type or for definition options. */
    MetafieldsSetUserErrorCode["InvalidValue"] = "INVALID_VALUE";
    /** The input value should be less than or equal to the maximum value allowed. */
    MetafieldsSetUserErrorCode["LessThanOrEqualTo"] = "LESS_THAN_OR_EQUAL_TO";
    /** The input value needs to be blank. */
    MetafieldsSetUserErrorCode["Present"] = "PRESENT";
    /** The input value is too long. */
    MetafieldsSetUserErrorCode["TooLong"] = "TOO_LONG";
    /** The input value is too short. */
    MetafieldsSetUserErrorCode["TooShort"] = "TOO_SHORT";
})(MetafieldsSetUserErrorCode = exports.MetafieldsSetUserErrorCode || (exports.MetafieldsSetUserErrorCode = {}));
/** The set of valid sort keys for the MethodDefinition query. */
var MethodDefinitionSortKeys;
(function (MethodDefinitionSortKeys) {
    /** Sort by the `id` value. */
    MethodDefinitionSortKeys["Id"] = "ID";
    /** Sort by the `rate_provider_type` value. */
    MethodDefinitionSortKeys["RateProviderType"] = "RATE_PROVIDER_TYPE";
    /**
     * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
     * Don't use this sort key when no search query is specified.
     *
     */
    MethodDefinitionSortKeys["Relevance"] = "RELEVANCE";
})(MethodDefinitionSortKeys = exports.MethodDefinitionSortKeys || (exports.MethodDefinitionSortKeys = {}));
/**
 * The possible order action types for a
 * [sales agreement](https://shopify.dev/api/admin-graphql/latest/interfaces/salesagreement).
 *
 */
var OrderActionType;
(function (OrderActionType) {
    /** An order with a purchase or charge. */
    OrderActionType["Order"] = "ORDER";
    /** An edit to the order. */
    OrderActionType["OrderEdit"] = "ORDER_EDIT";
    /** A refund on the order. */
    OrderActionType["Refund"] = "REFUND";
    /** An unknown agreement action. Represents new actions that may be added in future versions. */
    OrderActionType["Unknown"] = "UNKNOWN";
})(OrderActionType = exports.OrderActionType || (exports.OrderActionType = {}));
/** Represents the reason that the order is being canceled. Valid values are: customer, fraud, inventory, declined, other. */
var OrderCancelReason;
(function (OrderCancelReason) {
    /** The customer wanted to cancel the order. */
    OrderCancelReason["Customer"] = "CUSTOMER";
    /** Payment was declined. */
    OrderCancelReason["Declined"] = "DECLINED";
    /** The order was fraudulent. */
    OrderCancelReason["Fraud"] = "FRAUD";
    /** There was insufficient inventory. */
    OrderCancelReason["Inventory"] = "INVENTORY";
    /** The order was canceled for an unlisted reason. */
    OrderCancelReason["Other"] = "OTHER";
})(OrderCancelReason = exports.OrderCancelReason || (exports.OrderCancelReason = {}));
/** Possible error codes that can be returned by `OrderCreateMandatePaymentUserError`. */
var OrderCreateMandatePaymentUserErrorCode;
(function (OrderCreateMandatePaymentUserErrorCode) {
    /** Errors for mandate payment on order. */
    OrderCreateMandatePaymentUserErrorCode["OrderMandatePaymentErrorCode"] = "ORDER_MANDATE_PAYMENT_ERROR_CODE";
})(OrderCreateMandatePaymentUserErrorCode = exports.OrderCreateMandatePaymentUserErrorCode || (exports.OrderCreateMandatePaymentUserErrorCode = {}));
/** Represents the order's current financial status. */
var OrderDisplayFinancialStatus;
(function (OrderDisplayFinancialStatus) {
    /** Displayed as **Authorized**. */
    OrderDisplayFinancialStatus["Authorized"] = "AUTHORIZED";
    /** Displayed as **Expired**. */
    OrderDisplayFinancialStatus["Expired"] = "EXPIRED";
    /** Displayed as **Paid**. */
    OrderDisplayFinancialStatus["Paid"] = "PAID";
    /** Displayed as **Partially paid**. */
    OrderDisplayFinancialStatus["PartiallyPaid"] = "PARTIALLY_PAID";
    /** Displayed as **Partially refunded**. */
    OrderDisplayFinancialStatus["PartiallyRefunded"] = "PARTIALLY_REFUNDED";
    /** Displayed as **Pending**. */
    OrderDisplayFinancialStatus["Pending"] = "PENDING";
    /** Displayed as **Refunded**. */
    OrderDisplayFinancialStatus["Refunded"] = "REFUNDED";
    /** Displayed as **Voided**. */
    OrderDisplayFinancialStatus["Voided"] = "VOIDED";
})(OrderDisplayFinancialStatus = exports.OrderDisplayFinancialStatus || (exports.OrderDisplayFinancialStatus = {}));
/** Represents the order's aggregated fulfillment status for display purposes. */
var OrderDisplayFulfillmentStatus;
(function (OrderDisplayFulfillmentStatus) {
    /** Displayed as **Fulfilled**. All the items in the order have been fulfilled. */
    OrderDisplayFulfillmentStatus["Fulfilled"] = "FULFILLED";
    /** Displayed as **In progress**. Some of the items in the order have been fulfilled, or a request for fulfillment has been sent to the fulfillment service. */
    OrderDisplayFulfillmentStatus["InProgress"] = "IN_PROGRESS";
    /** Displayed as **On hold**. All of the unfulfilled items in this order are on hold. */
    OrderDisplayFulfillmentStatus["OnHold"] = "ON_HOLD";
    /** Displayed as **Open**. None of the items in the order have been fulfilled. Replaced by "UNFULFILLED" status. */
    OrderDisplayFulfillmentStatus["Open"] = "OPEN";
    /** Displayed as **Partially fulfilled**. Some of the items in the order have been fulfilled. */
    OrderDisplayFulfillmentStatus["PartiallyFulfilled"] = "PARTIALLY_FULFILLED";
    /** Displayed as **Pending fulfillment**. A request for fulfillment of some items awaits a response from the fulfillment service. Replaced by the "IN_PROGRESS" status. */
    OrderDisplayFulfillmentStatus["PendingFulfillment"] = "PENDING_FULFILLMENT";
    /** Displayed as **Restocked**. All the items in the order have been restocked. Replaced by the "UNFULFILLED" status. */
    OrderDisplayFulfillmentStatus["Restocked"] = "RESTOCKED";
    /** Displayed as **Scheduled**. All of the unfulfilled items in this order are scheduled for fulfillment at later time. */
    OrderDisplayFulfillmentStatus["Scheduled"] = "SCHEDULED";
    /** Displayed as **Unfulfilled**. None of the items in the order have been fulfilled. */
    OrderDisplayFulfillmentStatus["Unfulfilled"] = "UNFULFILLED";
})(OrderDisplayFulfillmentStatus = exports.OrderDisplayFulfillmentStatus || (exports.OrderDisplayFulfillmentStatus = {}));
/** Possible error codes that can be returned by `OrderInvoiceSendUserError`. */
var OrderInvoiceSendUserErrorCode;
(function (OrderInvoiceSendUserErrorCode) {
    /** An error occurred while sending the invoice. */
    OrderInvoiceSendUserErrorCode["OrderInvoiceSendUnsuccessful"] = "ORDER_INVOICE_SEND_UNSUCCESSFUL";
})(OrderInvoiceSendUserErrorCode = exports.OrderInvoiceSendUserErrorCode || (exports.OrderInvoiceSendUserErrorCode = {}));
/** The type of a payment status. */
var OrderPaymentStatusResult;
(function (OrderPaymentStatusResult) {
    /** The payment is authorized. */
    OrderPaymentStatusResult["Authorized"] = "AUTHORIZED";
    /** The payment is captured. */
    OrderPaymentStatusResult["Captured"] = "CAPTURED";
    /** There was an error initiating the payment. */
    OrderPaymentStatusResult["Error"] = "ERROR";
    /** The payment is still being processed. */
    OrderPaymentStatusResult["Processing"] = "PROCESSING";
    /** The payment is in purchased status. */
    OrderPaymentStatusResult["Purchased"] = "PURCHASED";
    /** Redirect required. */
    OrderPaymentStatusResult["RedirectRequired"] = "REDIRECT_REQUIRED";
    /** The payment is refunded. */
    OrderPaymentStatusResult["Refunded"] = "REFUNDED";
    /** Payment can be retried. */
    OrderPaymentStatusResult["Retryable"] = "RETRYABLE";
    /** The payment succeeded. */
    OrderPaymentStatusResult["Success"] = "SUCCESS";
    /** Status is unknown. */
    OrderPaymentStatusResult["Unknown"] = "UNKNOWN";
    /** The payment is voided. */
    OrderPaymentStatusResult["Voided"] = "VOIDED";
})(OrderPaymentStatusResult = exports.OrderPaymentStatusResult || (exports.OrderPaymentStatusResult = {}));
/** The likelihood that an order is fraudulent. */
var OrderRiskLevel;
(function (OrderRiskLevel) {
    /** There is a high level of risk that this order is fraudulent. */
    OrderRiskLevel["High"] = "HIGH";
    /** There is a low level of risk that this order is fraudulent. */
    OrderRiskLevel["Low"] = "LOW";
    /** There is a medium level of risk that this order is fraudulent. */
    OrderRiskLevel["Medium"] = "MEDIUM";
})(OrderRiskLevel = exports.OrderRiskLevel || (exports.OrderRiskLevel = {}));
/** The set of valid sort keys for the Order query. */
var OrderSortKeys;
(function (OrderSortKeys) {
    /** Sort by the `created_at` value. */
    OrderSortKeys["CreatedAt"] = "CREATED_AT";
    /** Sort by the `customer_name` value. */
    OrderSortKeys["CustomerName"] = "CUSTOMER_NAME";
    /** Sort by the `financial_status` value. */
    OrderSortKeys["FinancialStatus"] = "FINANCIAL_STATUS";
    /** Sort by the `fulfillment_status` value. */
    OrderSortKeys["FulfillmentStatus"] = "FULFILLMENT_STATUS";
    /** Sort by the `id` value. */
    OrderSortKeys["Id"] = "ID";
    /** Sort by the `order_number` value. */
    OrderSortKeys["OrderNumber"] = "ORDER_NUMBER";
    /** Sort by the `processed_at` value. */
    OrderSortKeys["ProcessedAt"] = "PROCESSED_AT";
    /**
     * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
     * Don't use this sort key when no search query is specified.
     *
     */
    OrderSortKeys["Relevance"] = "RELEVANCE";
    /** Sort by the `total_price` value. */
    OrderSortKeys["TotalPrice"] = "TOTAL_PRICE";
    /** Sort by the `updated_at` value. */
    OrderSortKeys["UpdatedAt"] = "UPDATED_AT";
})(OrderSortKeys = exports.OrderSortKeys || (exports.OrderSortKeys = {}));
/** A standardized error code, independent of the payment provider. */
var OrderTransactionErrorCode;
(function (OrderTransactionErrorCode) {
    /** The payment method was invalid. */
    OrderTransactionErrorCode["AmazonPaymentsInvalidPaymentMethod"] = "AMAZON_PAYMENTS_INVALID_PAYMENT_METHOD";
    /** The maximum amount has been captured. */
    OrderTransactionErrorCode["AmazonPaymentsMaxAmountCharged"] = "AMAZON_PAYMENTS_MAX_AMOUNT_CHARGED";
    /** The maximum amount has been refunded. */
    OrderTransactionErrorCode["AmazonPaymentsMaxAmountRefunded"] = "AMAZON_PAYMENTS_MAX_AMOUNT_REFUNDED";
    /** The maximum of 10 authorizations has been captured for an order. */
    OrderTransactionErrorCode["AmazonPaymentsMaxAuthorizationsCaptured"] = "AMAZON_PAYMENTS_MAX_AUTHORIZATIONS_CAPTURED";
    /** The maximum of 10 refunds has been processed for an order. */
    OrderTransactionErrorCode["AmazonPaymentsMaxRefundsProcessed"] = "AMAZON_PAYMENTS_MAX_REFUNDS_PROCESSED";
    /** The order was canceled, which canceled all open authorizations. */
    OrderTransactionErrorCode["AmazonPaymentsOrderReferenceCanceled"] = "AMAZON_PAYMENTS_ORDER_REFERENCE_CANCELED";
    /** The order was not confirmed within three hours. */
    OrderTransactionErrorCode["AmazonPaymentsStale"] = "AMAZON_PAYMENTS_STALE";
    /** Call the card issuer. */
    OrderTransactionErrorCode["CallIssuer"] = "CALL_ISSUER";
    /** The card was declined. */
    OrderTransactionErrorCode["CardDeclined"] = "CARD_DECLINED";
    /** There is an error in the gateway or merchant configuration. */
    OrderTransactionErrorCode["ConfigError"] = "CONFIG_ERROR";
    /** The card is expired. */
    OrderTransactionErrorCode["ExpiredCard"] = "EXPIRED_CARD";
    /** There was an unknown error with processing the payment. */
    OrderTransactionErrorCode["GenericError"] = "GENERIC_ERROR";
    /** The address does not match the card number. */
    OrderTransactionErrorCode["IncorrectAddress"] = "INCORRECT_ADDRESS";
    /** The CVC does not match the card number. */
    OrderTransactionErrorCode["IncorrectCvc"] = "INCORRECT_CVC";
    /** The card number is incorrect. */
    OrderTransactionErrorCode["IncorrectNumber"] = "INCORRECT_NUMBER";
    /** The entered PIN is incorrect. */
    OrderTransactionErrorCode["IncorrectPin"] = "INCORRECT_PIN";
    /** The ZIP or postal code does not match the card number. */
    OrderTransactionErrorCode["IncorrectZip"] = "INCORRECT_ZIP";
    /** The amount is either too high or too low for the provider. */
    OrderTransactionErrorCode["InvalidAmount"] = "INVALID_AMOUNT";
    /** The payment method is not available in the customer's country. */
    OrderTransactionErrorCode["InvalidCountry"] = "INVALID_COUNTRY";
    /** The format of the CVC is incorrect. */
    OrderTransactionErrorCode["InvalidCvc"] = "INVALID_CVC";
    /** The format of the expiry date is incorrect. */
    OrderTransactionErrorCode["InvalidExpiryDate"] = "INVALID_EXPIRY_DATE";
    /** The format of the card number is incorrect. */
    OrderTransactionErrorCode["InvalidNumber"] = "INVALID_NUMBER";
    /** The payment method is momentarily unavailable. */
    OrderTransactionErrorCode["PaymentMethodUnavailable"] = "PAYMENT_METHOD_UNAVAILABLE";
    /**
     * The card has been reported as lost or stolen, and the card issuer has requested that the merchant keep the card and call the number on the back.
     *
     */
    OrderTransactionErrorCode["PickUpCard"] = "PICK_UP_CARD";
    /** There was an error while processing the payment. */
    OrderTransactionErrorCode["ProcessingError"] = "PROCESSING_ERROR";
    /** A real card was used but the gateway was in test mode. */
    OrderTransactionErrorCode["TestModeLiveCard"] = "TEST_MODE_LIVE_CARD";
    /** The gateway or merchant configuration doesn't support a feature, such as network tokenization. */
    OrderTransactionErrorCode["UnsupportedFeature"] = "UNSUPPORTED_FEATURE";
})(OrderTransactionErrorCode = exports.OrderTransactionErrorCode || (exports.OrderTransactionErrorCode = {}));
/** The different kinds of order transactions. */
var OrderTransactionKind;
(function (OrderTransactionKind) {
    /**
     * An amount reserved against the cardholder's funding source.
     * Money does not change hands until the authorization is captured.
     *
     */
    OrderTransactionKind["Authorization"] = "AUTHORIZATION";
    /** A transfer of the money that was reserved by an authorization. */
    OrderTransactionKind["Capture"] = "CAPTURE";
    /**
     * The money returned to the customer when they've paid too much during a cash transaction.
     *
     */
    OrderTransactionKind["Change"] = "CHANGE";
    /** An authorization for a payment taken with an EMV credit card reader. */
    OrderTransactionKind["EmvAuthorization"] = "EMV_AUTHORIZATION";
    /**
     * A partial or full return of captured funds to the cardholder.
     * A refund can happen only after a capture is processed.
     *
     */
    OrderTransactionKind["Refund"] = "REFUND";
    /** An authorization and capture performed together in a single step. */
    OrderTransactionKind["Sale"] = "SALE";
    /** A suggested refund transaction that can be used to create a refund. */
    OrderTransactionKind["SuggestedRefund"] = "SUGGESTED_REFUND";
    /** A cancelation of an authorization transaction. */
    OrderTransactionKind["Void"] = "VOID";
})(OrderTransactionKind = exports.OrderTransactionKind || (exports.OrderTransactionKind = {}));
/** The different states that an `OrderTransaction` can have. */
var OrderTransactionStatus;
(function (OrderTransactionStatus) {
    /** Awaiting a response. */
    OrderTransactionStatus["AwaitingResponse"] = "AWAITING_RESPONSE";
    /** There was an error while processing the transaction. */
    OrderTransactionStatus["Error"] = "ERROR";
    /** The transaction failed. */
    OrderTransactionStatus["Failure"] = "FAILURE";
    /** The transaction is pending. */
    OrderTransactionStatus["Pending"] = "PENDING";
    /** The transaction succeeded. */
    OrderTransactionStatus["Success"] = "SUCCESS";
    /** The transaction status is unknown. */
    OrderTransactionStatus["Unknown"] = "UNKNOWN";
})(OrderTransactionStatus = exports.OrderTransactionStatus || (exports.OrderTransactionStatus = {}));
/** Some of the payment methods used in Shopify. */
var PaymentMethods;
(function (PaymentMethods) {
    PaymentMethods["AmericanExpress"] = "AMERICAN_EXPRESS";
    PaymentMethods["Bitcoin"] = "BITCOIN";
    PaymentMethods["Bogus"] = "BOGUS";
    PaymentMethods["Dankort"] = "DANKORT";
    PaymentMethods["DinersClub"] = "DINERS_CLUB";
    PaymentMethods["Discover"] = "DISCOVER";
    PaymentMethods["Dogecoin"] = "DOGECOIN";
    /** The payment method for Elo payment. */
    PaymentMethods["Elo"] = "ELO";
    PaymentMethods["Forbrugsforeningen"] = "FORBRUGSFORENINGEN";
    /** The payment method for Interac payment. */
    PaymentMethods["Interac"] = "INTERAC";
    PaymentMethods["Jcb"] = "JCB";
    PaymentMethods["Litecoin"] = "LITECOIN";
    PaymentMethods["Maestro"] = "MAESTRO";
    PaymentMethods["Mastercard"] = "MASTERCARD";
    PaymentMethods["Paypal"] = "PAYPAL";
    /** The payment method for UnionPay payment. */
    PaymentMethods["Unionpay"] = "UNIONPAY";
    PaymentMethods["Visa"] = "VISA";
})(PaymentMethods = exports.PaymentMethods || (exports.PaymentMethods = {}));
/** Possible error codes that can be returned by `PaymentTermsCreateUserError`. */
var PaymentTermsCreateUserErrorCode;
(function (PaymentTermsCreateUserErrorCode) {
    /** An error occurred while creating payment terms. */
    PaymentTermsCreateUserErrorCode["PaymentTermsCreationUnsuccessful"] = "PAYMENT_TERMS_CREATION_UNSUCCESSFUL";
})(PaymentTermsCreateUserErrorCode = exports.PaymentTermsCreateUserErrorCode || (exports.PaymentTermsCreateUserErrorCode = {}));
/** Possible error codes that can be returned by `PaymentTermsDeleteUserError`. */
var PaymentTermsDeleteUserErrorCode;
(function (PaymentTermsDeleteUserErrorCode) {
    /** An error occurred while deleting payment terms. */
    PaymentTermsDeleteUserErrorCode["PaymentTermsDeleteUnsuccessful"] = "PAYMENT_TERMS_DELETE_UNSUCCESSFUL";
})(PaymentTermsDeleteUserErrorCode = exports.PaymentTermsDeleteUserErrorCode || (exports.PaymentTermsDeleteUserErrorCode = {}));
/** The type of a payment terms or a payment terms template. */
var PaymentTermsType;
(function (PaymentTermsType) {
    /** The payment terms or payment terms template is a fixed type. It's due on a specified date. */
    PaymentTermsType["Fixed"] = "FIXED";
    /** The payment terms or payment terms template is a net type. It's due a number of days after issue. */
    PaymentTermsType["Net"] = "NET";
    /** The payment terms or payment terms template is due on receipt. */
    PaymentTermsType["Receipt"] = "RECEIPT";
    /** The type of the payment terms or payment terms template is unknown. */
    PaymentTermsType["Unknown"] = "UNKNOWN";
})(PaymentTermsType = exports.PaymentTermsType || (exports.PaymentTermsType = {}));
/** Possible error codes that can be returned by `PaymentTermsUpdateUserError`. */
var PaymentTermsUpdateUserErrorCode;
(function (PaymentTermsUpdateUserErrorCode) {
    /** An error occurred while updating payment terms. */
    PaymentTermsUpdateUserErrorCode["PaymentTermsUpdateUnsuccessful"] = "PAYMENT_TERMS_UPDATE_UNSUCCESSFUL";
})(PaymentTermsUpdateUserErrorCode = exports.PaymentTermsUpdateUserErrorCode || (exports.PaymentTermsUpdateUserErrorCode = {}));
/** Represents a valid PayPal Express subscriptions gateway status. */
var PaypalExpressSubscriptionsGatewayStatus;
(function (PaypalExpressSubscriptionsGatewayStatus) {
    /** The status is disabled. */
    PaypalExpressSubscriptionsGatewayStatus["Disabled"] = "DISABLED";
    /** The status is enabled. */
    PaypalExpressSubscriptionsGatewayStatus["Enabled"] = "ENABLED";
    /** The status is pending. */
    PaypalExpressSubscriptionsGatewayStatus["Pending"] = "PENDING";
})(PaypalExpressSubscriptionsGatewayStatus = exports.PaypalExpressSubscriptionsGatewayStatus || (exports.PaypalExpressSubscriptionsGatewayStatus = {}));
/** Represents a percentage price adjustment type. */
var PriceListAdjustmentType;
(function (PriceListAdjustmentType) {
    /** Percentage decrease type. Prices will have a lower value. */
    PriceListAdjustmentType["PercentageDecrease"] = "PERCENTAGE_DECREASE";
    /** Percentage increase type. Prices will have a higher value. */
    PriceListAdjustmentType["PercentageIncrease"] = "PERCENTAGE_INCREASE";
})(PriceListAdjustmentType = exports.PriceListAdjustmentType || (exports.PriceListAdjustmentType = {}));
/**
 * Represents the origin of a price, either fixed (defined on the price list) or relative (calculated using a price list adjustment configuration).
 *
 */
var PriceListPriceOriginType;
(function (PriceListPriceOriginType) {
    /** The price is defined on the price list. */
    PriceListPriceOriginType["Fixed"] = "FIXED";
    /** The price is relative to the adjustment type and value. */
    PriceListPriceOriginType["Relative"] = "RELATIVE";
})(PriceListPriceOriginType = exports.PriceListPriceOriginType || (exports.PriceListPriceOriginType = {}));
/** Possible error codes that can be returned by `PriceListPriceUserError`. */
var PriceListPriceUserErrorCode;
(function (PriceListPriceUserErrorCode) {
    /** The input value is blank. */
    PriceListPriceUserErrorCode["Blank"] = "BLANK";
    /** The specified currency doesn't match the price list's currency. */
    PriceListPriceUserErrorCode["PriceListCurrencyMismatch"] = "PRICE_LIST_CURRENCY_MISMATCH";
    /** The price list doesn't exist. */
    PriceListPriceUserErrorCode["PriceListNotFound"] = "PRICE_LIST_NOT_FOUND";
    /** Only fixed prices can be deleted. */
    PriceListPriceUserErrorCode["PriceNotFixed"] = "PRICE_NOT_FIXED";
    /** A fixed price for the specified product variant doesn't exist. */
    PriceListPriceUserErrorCode["VariantNotFound"] = "VARIANT_NOT_FOUND";
})(PriceListPriceUserErrorCode = exports.PriceListPriceUserErrorCode || (exports.PriceListPriceUserErrorCode = {}));
/** The set of valid sort keys for the PriceList query. */
var PriceListSortKeys;
(function (PriceListSortKeys) {
    /** Sort by the `id` value. */
    PriceListSortKeys["Id"] = "ID";
    /** Sort by the `name` value. */
    PriceListSortKeys["Name"] = "NAME";
    /**
     * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
     * Don't use this sort key when no search query is specified.
     *
     */
    PriceListSortKeys["Relevance"] = "RELEVANCE";
})(PriceListSortKeys = exports.PriceListSortKeys || (exports.PriceListSortKeys = {}));
/** Possible error codes that can be returned by `PriceListUserError`. */
var PriceListUserErrorCode;
(function (PriceListUserErrorCode) {
    /** A price list context rule cannot have more than one country. */
    PriceListUserErrorCode["ContextRuleCountriesLimit"] = "CONTEXT_RULE_COUNTRIES_LIMIT";
    /** A price list for this country is already taken. */
    PriceListUserErrorCode["ContextRuleCountryTaken"] = "CONTEXT_RULE_COUNTRY_TAKEN";
    /** Only one context rule option may be specified. */
    PriceListUserErrorCode["ContextRuleLimitOneOption"] = "CONTEXT_RULE_LIMIT_ONE_OPTION";
    /**
     * Cannot save the price list with context rule because the limit of context rules per shop was reached.
     * @deprecated The limit is removed.
     */
    PriceListUserErrorCode["ContextRuleLimitReached"] = "CONTEXT_RULE_LIMIT_REACHED";
    /** The specified market wasn't found. */
    PriceListUserErrorCode["ContextRuleMarketNotFound"] = "CONTEXT_RULE_MARKET_NOT_FOUND";
    /** A price list for this market is already taken. */
    PriceListUserErrorCode["ContextRuleMarketTaken"] = "CONTEXT_RULE_MARKET_TAKEN";
    /** A country in a context rule must use a valid currency. */
    PriceListUserErrorCode["CountryCurrencyMismatch"] = "COUNTRY_CURRENCY_MISMATCH";
    /** A price list’s currency must be of the pricing rule’s country. */
    PriceListUserErrorCode["CurrencyCountryMismatch"] = "CURRENCY_COUNTRY_MISMATCH";
    /** A price list’s currency must be the market currency. */
    PriceListUserErrorCode["CurrencyMarketMismatch"] = "CURRENCY_MARKET_MISMATCH";
    /** The price list currency is not supported by the shop's payment gateway. */
    PriceListUserErrorCode["CurrencyNotSupported"] = "CURRENCY_NOT_SUPPORTED";
    /** The adjustment value must be a positive value and not be greater than 100% for `type` `PERCENTAGE_DECREASE` and not be greater than 1000% for `type` `PERCENTAGE_INCREASE`. */
    PriceListUserErrorCode["InvalidAdjustmentValue"] = "INVALID_ADJUSTMENT_VALUE";
    /** The context rule's market does not use the price list currency. */
    PriceListUserErrorCode["MarketCurrencyMismatch"] = "MARKET_CURRENCY_MISMATCH";
    /** Cannot create price list for a primary market. */
    PriceListUserErrorCode["PriceListNotAllowedForPrimaryMarket"] = "PRICE_LIST_NOT_ALLOWED_FOR_PRIMARY_MARKET";
    /** The specified price list doesn't exist. */
    PriceListUserErrorCode["PriceListNotFound"] = "PRICE_LIST_NOT_FOUND";
    /** The input value is already taken. */
    PriceListUserErrorCode["Taken"] = "TAKEN";
})(PriceListUserErrorCode = exports.PriceListUserErrorCode || (exports.PriceListUserErrorCode = {}));
/** The method by which the price rule's value is allocated to its entitled items. */
var PriceRuleAllocationMethod;
(function (PriceRuleAllocationMethod) {
    /** The value will be applied once across the entitled items. */
    PriceRuleAllocationMethod["Across"] = "ACROSS";
    /** The value will be applied to each of the entitled items. */
    PriceRuleAllocationMethod["Each"] = "EACH";
})(PriceRuleAllocationMethod = exports.PriceRuleAllocationMethod || (exports.PriceRuleAllocationMethod = {}));
/** Possible error codes that could be returned by a price rule mutation. */
var PriceRuleErrorCode;
(function (PriceRuleErrorCode) {
    /** The allocation method must be `ACROSS` for the provided target selection. */
    PriceRuleErrorCode["AllocationMethodMustBeAcrossForGivenTargetSelection"] = "ALLOCATION_METHOD_MUST_BE_ACROSS_FOR_GIVEN_TARGET_SELECTION";
    /** The discount must apply on either one-time purchase or subscription items, or both. */
    PriceRuleErrorCode["AppliesOnNothing"] = "APPLIES_ON_NOTHING";
    /** The input value is blank. */
    PriceRuleErrorCode["Blank"] = "BLANK";
    /** Invalid BOGO target selection. */
    PriceRuleErrorCode["BogoInvalidTargetSelection"] = "BOGO_INVALID_TARGET_SELECTION";
    /** Invalid BOGO target type. */
    PriceRuleErrorCode["BogoInvalidTargetType"] = "BOGO_INVALID_TARGET_TYPE";
    /** Invalid BOGO value type. */
    PriceRuleErrorCode["BogoInvalidValueType"] = "BOGO_INVALID_VALUE_TYPE";
    /** Can't use both prerequisite customers and saved search. */
    PriceRuleErrorCode["BothCustomerAndSavedSearchPrerequisitesSelected"] = "BOTH_CUSTOMER_AND_SAVED_SEARCH_PREREQUISITES_SELECTED";
    /** Can't have both prerequisite customers and prerequisite segments. */
    PriceRuleErrorCode["BothCustomerAndSegmentPrerequisitesSelected"] = "BOTH_CUSTOMER_AND_SEGMENT_PREREQUISITES_SELECTED";
    /** Can't have both saved searches and segments prerequisites. */
    PriceRuleErrorCode["BothSavedSearchAndSegmentPrerequisitesSelected"] = "BOTH_SAVED_SEARCH_AND_SEGMENT_PREREQUISITES_SELECTED";
    /** Can't entitle collections in combination with product variants or products. */
    PriceRuleErrorCode["CannotEntitleCollectionsWithProductsOrVariants"] = "CANNOT_ENTITLE_COLLECTIONS_WITH_PRODUCTS_OR_VARIANTS";
    /** Can't use collections as a prequisite in combination with product variants or products. */
    PriceRuleErrorCode["CannotPrerequisiteCollectionWithProductOrVariants"] = "CANNOT_PREREQUISITE_COLLECTION_WITH_PRODUCT_OR_VARIANTS";
    /** The customer prerequisites exceeded the maximum number. */
    PriceRuleErrorCode["CustomerPrerequisitesExceededMax"] = "CUSTOMER_PREREQUISITES_EXCEEDED_MAX";
    /** Invalid customer prerequisites selection. */
    PriceRuleErrorCode["CustomerPrerequisitesInvalidSelection"] = "CUSTOMER_PREREQUISITES_INVALID_SELECTION";
    /** Customer prerequisites are missing. */
    PriceRuleErrorCode["CustomerPrerequisitesMissing"] = "CUSTOMER_PREREQUISITES_MISSING";
    /** A duplicate customer prerequisite ID exists. */
    PriceRuleErrorCode["CustomerPrerequisiteDuplicate"] = "CUSTOMER_PREREQUISITE_DUPLICATE";
    /** A duplicate customer saved search exists. */
    PriceRuleErrorCode["CustomerSavedSearchDuplicate"] = "CUSTOMER_SAVED_SEARCH_DUPLICATE";
    /** The customer saved search exceeded the maximum number. */
    PriceRuleErrorCode["CustomerSavedSearchExceededMax"] = "CUSTOMER_SAVED_SEARCH_EXCEEDED_MAX";
    /** Invalid customer saved search. */
    PriceRuleErrorCode["CustomerSavedSearchInvalid"] = "CUSTOMER_SAVED_SEARCH_INVALID";
    /** The customer segment prerequisites exceeded the maximum number. */
    PriceRuleErrorCode["CustomerSegmentExceededMax"] = "CUSTOMER_SEGMENT_EXCEEDED_MAX";
    /** The customer segment prerequisite ID is invalid. */
    PriceRuleErrorCode["CustomerSegmentInvalid"] = "CUSTOMER_SEGMENT_INVALID";
    /** A duplicate customer segment prerequisite ID exists. */
    PriceRuleErrorCode["CustomerSegmentPrerequisiteDuplicate"] = "CUSTOMER_SEGMENT_PREREQUISITE_DUPLICATE";
    /** A duplicate discount code exists. */
    PriceRuleErrorCode["DiscountCodeDuplicate"] = "DISCOUNT_CODE_DUPLICATE";
    /** The discount end date must be after the start date. */
    PriceRuleErrorCode["EndDateBeforeStartDate"] = "END_DATE_BEFORE_START_DATE";
    /** The input value should be equal to the value allowed. */
    PriceRuleErrorCode["EqualTo"] = "EQUAL_TO";
    /** Can't exceed the maximum number. */
    PriceRuleErrorCode["ExceededMax"] = "EXCEEDED_MAX";
    /** The input value should be greater than the minimum allowed value. */
    PriceRuleErrorCode["GreaterThan"] = "GREATER_THAN";
    /** The input value should be greater than or equal to the minimum value allowed. */
    PriceRuleErrorCode["GreaterThanOrEqualTo"] = "GREATER_THAN_OR_EQUAL_TO";
    /** Unexpected internal error happened. */
    PriceRuleErrorCode["InternalError"] = "INTERNAL_ERROR";
    /** The input value is invalid. */
    PriceRuleErrorCode["Invalid"] = "INVALID";
    /** The `combinesWith` settings are invalid for the discount class. */
    PriceRuleErrorCode["InvalidCombinesWithForDiscountClass"] = "INVALID_COMBINES_WITH_FOR_DISCOUNT_CLASS";
    /** The discountClass is invalid for the price rule. */
    PriceRuleErrorCode["InvalidDiscountClassForPriceRule"] = "INVALID_DISCOUNT_CLASS_FOR_PRICE_RULE";
    /** The target type is invalid when defining a prerequisite shipping price range. */
    PriceRuleErrorCode["InvalidTargetTypePrerequisiteShippingPriceRange"] = "INVALID_TARGET_TYPE_PREREQUISITE_SHIPPING_PRICE_RANGE";
    /** Can't add the same collection twice. */
    PriceRuleErrorCode["ItemEntitlementsDuplicateCollection"] = "ITEM_ENTITLEMENTS_DUPLICATE_COLLECTION";
    /** Can't add the same product twice. */
    PriceRuleErrorCode["ItemEntitlementsDuplicateProduct"] = "ITEM_ENTITLEMENTS_DUPLICATE_PRODUCT";
    /** Can't add the same collection twice. */
    PriceRuleErrorCode["ItemEntitlementsDuplicateVariant"] = "ITEM_ENTITLEMENTS_DUPLICATE_VARIANT";
    /** Can't exceed the maximum number of collection entitlements. */
    PriceRuleErrorCode["ItemEntitlementsExceededMaxCollection"] = "ITEM_ENTITLEMENTS_EXCEEDED_MAX_COLLECTION";
    /** Can't exceed the maximum number of product entitlements. */
    PriceRuleErrorCode["ItemEntitlementsExceededMaxProduct"] = "ITEM_ENTITLEMENTS_EXCEEDED_MAX_PRODUCT";
    /** Can't exceed the maximum number of variant entitlements. */
    PriceRuleErrorCode["ItemEntitlementsExceededMaxVariant"] = "ITEM_ENTITLEMENTS_EXCEEDED_MAX_VARIANT";
    /** Invalid collection. */
    PriceRuleErrorCode["ItemEntitlementsInvalidCollection"] = "ITEM_ENTITLEMENTS_INVALID_COLLECTION";
    /** Invalid product. */
    PriceRuleErrorCode["ItemEntitlementsInvalidProduct"] = "ITEM_ENTITLEMENTS_INVALID_PRODUCT";
    /** Invalid combination of target type and selection. */
    PriceRuleErrorCode["ItemEntitlementsInvalidTargetTypeOrSelection"] = "ITEM_ENTITLEMENTS_INVALID_TARGET_TYPE_OR_SELECTION";
    /** Invalid variant. */
    PriceRuleErrorCode["ItemEntitlementsInvalidVariant"] = "ITEM_ENTITLEMENTS_INVALID_VARIANT";
    /** Entitlements are missing. */
    PriceRuleErrorCode["ItemEntitlementsMissing"] = "ITEM_ENTITLEMENTS_MISSING";
    /** Invalid entitlement type. */
    PriceRuleErrorCode["ItemEntitlementInvalidType"] = "ITEM_ENTITLEMENT_INVALID_TYPE";
    /** Can't add the same collection twice. */
    PriceRuleErrorCode["ItemPrerequisitesDuplicateCollection"] = "ITEM_PREREQUISITES_DUPLICATE_COLLECTION";
    /** Can't add the same product twice. */
    PriceRuleErrorCode["ItemPrerequisitesDuplicateProduct"] = "ITEM_PREREQUISITES_DUPLICATE_PRODUCT";
    /** Can't add the same variant twice. */
    PriceRuleErrorCode["ItemPrerequisitesDuplicateVariant"] = "ITEM_PREREQUISITES_DUPLICATE_VARIANT";
    /** Can't exceed the maximum number of item prerequisites. */
    PriceRuleErrorCode["ItemPrerequisitesExceededMax"] = "ITEM_PREREQUISITES_EXCEEDED_MAX";
    /** Invalid collection. */
    PriceRuleErrorCode["ItemPrerequisitesInvalidCollection"] = "ITEM_PREREQUISITES_INVALID_COLLECTION";
    /** Invalid product. */
    PriceRuleErrorCode["ItemPrerequisitesInvalidProduct"] = "ITEM_PREREQUISITES_INVALID_PRODUCT";
    /** Invalid type. */
    PriceRuleErrorCode["ItemPrerequisitesInvalidType"] = "ITEM_PREREQUISITES_INVALID_TYPE";
    /** Invalid variant. */
    PriceRuleErrorCode["ItemPrerequisitesInvalidVariant"] = "ITEM_PREREQUISITES_INVALID_VARIANT";
    /** Item prerequisites must have at least one item prerequisite if the prerequisite quantity ratio is defined. */
    PriceRuleErrorCode["ItemPrerequisitesMissing"] = "ITEM_PREREQUISITES_MISSING";
    /** Item prerequisites must be empty if the prerequisite quantity ratio isn't defined. */
    PriceRuleErrorCode["ItemPrerequisitesMustBeEmpty"] = "ITEM_PREREQUISITES_MUST_BE_EMPTY";
    /** The input value should be less than the maximum value allowed. */
    PriceRuleErrorCode["LessThan"] = "LESS_THAN";
    /** The input value should be less than or equal to the maximum value allowed. */
    PriceRuleErrorCode["LessThanOrEqualTo"] = "LESS_THAN_OR_EQUAL_TO";
    /** Missing a required argument. */
    PriceRuleErrorCode["MissingArgument"] = "MISSING_ARGUMENT";
    /** The recurring cycle limit must be 1 when a discount doesn't apply on subscription items. */
    PriceRuleErrorCode["MultipleRecurringCycleLimitForNonSubscriptionItems"] = "MULTIPLE_RECURRING_CYCLE_LIMIT_FOR_NON_SUBSCRIPTION_ITEMS";
    /** Only one of the minimum subtotal or minimum quantity condition can be defined. */
    PriceRuleErrorCode["PrerequisiteSubtotalAndQuantityRangeBothPresent"] = "PREREQUISITE_SUBTOTAL_AND_QUANTITY_RANGE_BOTH_PRESENT";
    /** The allocation limit must be a non-zero positive number. */
    PriceRuleErrorCode["PriceRuleAllocationLimitIsZero"] = "PRICE_RULE_ALLOCATION_LIMIT_IS_ZERO";
    /** The allocation limit can only be set on Buy x, get y (BXGY) discounts. */
    PriceRuleErrorCode["PriceRuleAllocationLimitOnNonBogo"] = "PRICE_RULE_ALLOCATION_LIMIT_ON_NON_BOGO";
    /** The number of discount codes in the shop has reached its limit. */
    PriceRuleErrorCode["PriceRuleExceededMaxDiscountCode"] = "PRICE_RULE_EXCEEDED_MAX_DISCOUNT_CODE";
    /** The percentage value must be between 0 and -100. */
    PriceRuleErrorCode["PriceRulePercentageValueOutsideRange"] = "PRICE_RULE_PERCENTAGE_VALUE_OUTSIDE_RANGE";
    /** A duplicate country code exists. */
    PriceRuleErrorCode["ShippingEntitlementsDuplicateCountry"] = "SHIPPING_ENTITLEMENTS_DUPLICATE_COUNTRY";
    /** Can't exceed the maximum number of entitlements. */
    PriceRuleErrorCode["ShippingEntitlementsExceededMax"] = "SHIPPING_ENTITLEMENTS_EXCEEDED_MAX";
    /** The country is unknown. */
    PriceRuleErrorCode["ShippingEntitlementsInvalidCountry"] = "SHIPPING_ENTITLEMENTS_INVALID_COUNTRY";
    /** Invalid target type or selection. */
    PriceRuleErrorCode["ShippingEntitlementsInvalidTargetTypeOrSelection"] = "SHIPPING_ENTITLEMENTS_INVALID_TARGET_TYPE_OR_SELECTION";
    /** Missing entitlements. */
    PriceRuleErrorCode["ShippingEntitlementsMissing"] = "SHIPPING_ENTITLEMENTS_MISSING";
    /** Unsupported destination type. */
    PriceRuleErrorCode["ShippingEntitlementsUnsupportedDestinationType"] = "SHIPPING_ENTITLEMENTS_UNSUPPORTED_DESTINATION_TYPE";
    /** The number of discounts in the shop has reached its limit. */
    PriceRuleErrorCode["ShopExceededMaxPriceRules"] = "SHOP_EXCEEDED_MAX_PRICE_RULES";
    /** The input value is already taken. */
    PriceRuleErrorCode["Taken"] = "TAKEN";
    /** The input value is too long. */
    PriceRuleErrorCode["TooLong"] = "TOO_LONG";
    /** Too many arguments provided. */
    PriceRuleErrorCode["TooManyArguments"] = "TOO_MANY_ARGUMENTS";
    /** The input value is too short. */
    PriceRuleErrorCode["TooShort"] = "TOO_SHORT";
    /** The variant is already entitled through a product. */
    PriceRuleErrorCode["VariantAlreadyEntitledThroughProduct"] = "VARIANT_ALREADY_ENTITLED_THROUGH_PRODUCT";
})(PriceRuleErrorCode = exports.PriceRuleErrorCode || (exports.PriceRuleErrorCode = {}));
/** The list of features that can be supported by a price rule. */
var PriceRuleFeature;
(function (PriceRuleFeature) {
    /** The price rule supports bulk discounts. */
    PriceRuleFeature["Bulk"] = "BULK";
    /** The price rule supports Buy X, Get Y (BXGY) discounts. */
    PriceRuleFeature["BuyOneGetOne"] = "BUY_ONE_GET_ONE";
    /** The price rule supports Buy X, Get Y (BXGY) discounts that specify a custom allocation limit. */
    PriceRuleFeature["BuyOneGetOneWithAllocationLimit"] = "BUY_ONE_GET_ONE_WITH_ALLOCATION_LIMIT";
    /** The price rule supports discounts that require a quantity. */
    PriceRuleFeature["QuantityDiscounts"] = "QUANTITY_DISCOUNTS";
    /** The price rule targets specific customers. */
    PriceRuleFeature["SpecificCustomers"] = "SPECIFIC_CUSTOMERS";
})(PriceRuleFeature = exports.PriceRuleFeature || (exports.PriceRuleFeature = {}));
/** The type of page where a shareable price rule URL lands. */
var PriceRuleShareableUrlTargetType;
(function (PriceRuleShareableUrlTargetType) {
    /** The URL lands on a collection page. */
    PriceRuleShareableUrlTargetType["Collection"] = "COLLECTION";
    /** The URL lands on a home page. */
    PriceRuleShareableUrlTargetType["Home"] = "HOME";
    /** The URL lands on a product page. */
    PriceRuleShareableUrlTargetType["Product"] = "PRODUCT";
})(PriceRuleShareableUrlTargetType = exports.PriceRuleShareableUrlTargetType || (exports.PriceRuleShareableUrlTargetType = {}));
/** The set of valid sort keys for the PriceRule query. */
var PriceRuleSortKeys;
(function (PriceRuleSortKeys) {
    /** Sort by the `created_at` value. */
    PriceRuleSortKeys["CreatedAt"] = "CREATED_AT";
    /** Sort by the `ends_at` value. */
    PriceRuleSortKeys["EndsAt"] = "ENDS_AT";
    /** Sort by the `id` value. */
    PriceRuleSortKeys["Id"] = "ID";
    /**
     * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
     * Don't use this sort key when no search query is specified.
     *
     */
    PriceRuleSortKeys["Relevance"] = "RELEVANCE";
    /** Sort by the `starts_at` value. */
    PriceRuleSortKeys["StartsAt"] = "STARTS_AT";
    /** Sort by the `title` value. */
    PriceRuleSortKeys["Title"] = "TITLE";
    /** Sort by the `updated_at` value. */
    PriceRuleSortKeys["UpdatedAt"] = "UPDATED_AT";
})(PriceRuleSortKeys = exports.PriceRuleSortKeys || (exports.PriceRuleSortKeys = {}));
/** The status of the price rule. */
var PriceRuleStatus;
(function (PriceRuleStatus) {
    /** The price rule is active. */
    PriceRuleStatus["Active"] = "ACTIVE";
    /** The price rule is expired. */
    PriceRuleStatus["Expired"] = "EXPIRED";
    /** The price rule is scheduled. */
    PriceRuleStatus["Scheduled"] = "SCHEDULED";
})(PriceRuleStatus = exports.PriceRuleStatus || (exports.PriceRuleStatus = {}));
/** The type of lines (line_item or shipping_line) to which the price rule applies. */
var PriceRuleTarget;
(function (PriceRuleTarget) {
    /** The price rule applies to line items. */
    PriceRuleTarget["LineItem"] = "LINE_ITEM";
    /** The price rule applies to shipping lines. */
    PriceRuleTarget["ShippingLine"] = "SHIPPING_LINE";
})(PriceRuleTarget = exports.PriceRuleTarget || (exports.PriceRuleTarget = {}));
/** The list of features that can be supported by a price rule. */
var PriceRuleTrait;
(function (PriceRuleTrait) {
    /** The price rule supports bulk discounts. */
    PriceRuleTrait["Bulk"] = "BULK";
    /** The price rule supports Buy X, Get Y (BXGY) discounts. */
    PriceRuleTrait["BuyOneGetOne"] = "BUY_ONE_GET_ONE";
    /** The price rule supports Buy X, Get Y (BXGY) discounts that specify a custom allocation limit. */
    PriceRuleTrait["BuyOneGetOneWithAllocationLimit"] = "BUY_ONE_GET_ONE_WITH_ALLOCATION_LIMIT";
    /** The price rule supports discounts that require a quantity. */
    PriceRuleTrait["QuantityDiscounts"] = "QUANTITY_DISCOUNTS";
    /** The price rule targets specific customers. */
    PriceRuleTrait["SpecificCustomers"] = "SPECIFIC_CUSTOMERS";
})(PriceRuleTrait = exports.PriceRuleTrait || (exports.PriceRuleTrait = {}));
/** Supported private metafield value types. */
var PrivateMetafieldValueType;
(function (PrivateMetafieldValueType) {
    /** An integer metafield. */
    PrivateMetafieldValueType["Integer"] = "INTEGER";
    /** A JSON string metafield. */
    PrivateMetafieldValueType["JsonString"] = "JSON_STRING";
    /** A string metafield. */
    PrivateMetafieldValueType["String"] = "STRING";
})(PrivateMetafieldValueType = exports.PrivateMetafieldValueType || (exports.PrivateMetafieldValueType = {}));
/** Possible error codes that can be returned by `ProductChangeStatusUserError`. */
var ProductChangeStatusUserErrorCode;
(function (ProductChangeStatusUserErrorCode) {
    /** Product could not be found. */
    ProductChangeStatusUserErrorCode["ProductNotFound"] = "PRODUCT_NOT_FOUND";
})(ProductChangeStatusUserErrorCode = exports.ProductChangeStatusUserErrorCode || (exports.ProductChangeStatusUserErrorCode = {}));
/** The set of valid sort keys for the ProductCollection query. */
var ProductCollectionSortKeys;
(function (ProductCollectionSortKeys) {
    /** Sort by the `best-selling` value. */
    ProductCollectionSortKeys["BestSelling"] = "BEST_SELLING";
    /** Sort by the `collection-default` value. */
    ProductCollectionSortKeys["CollectionDefault"] = "COLLECTION_DEFAULT";
    /** Sort by the `created` value. */
    ProductCollectionSortKeys["Created"] = "CREATED";
    /** Sort by the `id` value. */
    ProductCollectionSortKeys["Id"] = "ID";
    /** Sort by the `manual` value. */
    ProductCollectionSortKeys["Manual"] = "MANUAL";
    /** Sort by the `price` value. */
    ProductCollectionSortKeys["Price"] = "PRICE";
    /**
     * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
     * Don't use this sort key when no search query is specified.
     *
     */
    ProductCollectionSortKeys["Relevance"] = "RELEVANCE";
    /** Sort by the `title` value. */
    ProductCollectionSortKeys["Title"] = "TITLE";
})(ProductCollectionSortKeys = exports.ProductCollectionSortKeys || (exports.ProductCollectionSortKeys = {}));
/** The set of valid sort keys for the ProductImage query. */
var ProductImageSortKeys;
(function (ProductImageSortKeys) {
    /** Sort by the `created_at` value. */
    ProductImageSortKeys["CreatedAt"] = "CREATED_AT";
    /** Sort by the `id` value. */
    ProductImageSortKeys["Id"] = "ID";
    /** Sort by the `position` value. */
    ProductImageSortKeys["Position"] = "POSITION";
    /**
     * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
     * Don't use this sort key when no search query is specified.
     *
     */
    ProductImageSortKeys["Relevance"] = "RELEVANCE";
})(ProductImageSortKeys = exports.ProductImageSortKeys || (exports.ProductImageSortKeys = {}));
/** The set of valid sort keys for the ProductMedia query. */
var ProductMediaSortKeys;
(function (ProductMediaSortKeys) {
    /** Sort by the `id` value. */
    ProductMediaSortKeys["Id"] = "ID";
    /** Sort by the `position` value. */
    ProductMediaSortKeys["Position"] = "POSITION";
    /**
     * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
     * Don't use this sort key when no search query is specified.
     *
     */
    ProductMediaSortKeys["Relevance"] = "RELEVANCE";
})(ProductMediaSortKeys = exports.ProductMediaSortKeys || (exports.ProductMediaSortKeys = {}));
/** The set of valid sort keys for the Product query. */
var ProductSortKeys;
(function (ProductSortKeys) {
    /** Sort by the `created_at` value. */
    ProductSortKeys["CreatedAt"] = "CREATED_AT";
    /** Sort by the `id` value. */
    ProductSortKeys["Id"] = "ID";
    /** Sort by the `inventory_total` value. */
    ProductSortKeys["InventoryTotal"] = "INVENTORY_TOTAL";
    /** Sort by the `product_type` value. */
    ProductSortKeys["ProductType"] = "PRODUCT_TYPE";
    /** Sort by the `published_at` value. */
    ProductSortKeys["PublishedAt"] = "PUBLISHED_AT";
    /**
     * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
     * Don't use this sort key when no search query is specified.
     * Pagination isn't supported when using this sort key.
     */
    ProductSortKeys["Relevance"] = "RELEVANCE";
    /** Sort by the `title` value. */
    ProductSortKeys["Title"] = "TITLE";
    /** Sort by the `updated_at` value. */
    ProductSortKeys["UpdatedAt"] = "UPDATED_AT";
    /** Sort by the `vendor` value. */
    ProductSortKeys["Vendor"] = "VENDOR";
})(ProductSortKeys = exports.ProductSortKeys || (exports.ProductSortKeys = {}));
/** The possible product statuses. */
var ProductStatus;
(function (ProductStatus) {
    /** The product is ready to sell and can be published to sales channels and apps. Products with an active status aren't automatically published to sales channels, such as the online store, or apps. By default, existing products are set to active. */
    ProductStatus["Active"] = "ACTIVE";
    /** The product is no longer being sold and isn't available to customers on sales channels and apps. */
    ProductStatus["Archived"] = "ARCHIVED";
    /** The product isn't ready to sell and is unavailable to customers on sales channels and apps. By default, duplicated and unarchived products are set to draft. */
    ProductStatus["Draft"] = "DRAFT";
})(ProductStatus = exports.ProductStatus || (exports.ProductStatus = {}));
/** The valid values for the method of inventory tracking for a product variant. */
var ProductVariantInventoryManagement;
(function (ProductVariantInventoryManagement) {
    /** This product variant's inventory is tracked by a third-party fulfillment service. */
    ProductVariantInventoryManagement["FulfillmentService"] = "FULFILLMENT_SERVICE";
    /** This product variant's inventory is not tracked. */
    ProductVariantInventoryManagement["NotManaged"] = "NOT_MANAGED";
    /** This product variant's inventory is tracked by Shopify. In the unstable API version, this product variant's inventory could also be tracked by both Shopify and a third-party fulfillment service. */
    ProductVariantInventoryManagement["Shopify"] = "SHOPIFY";
})(ProductVariantInventoryManagement = exports.ProductVariantInventoryManagement || (exports.ProductVariantInventoryManagement = {}));
/**
 * The valid values for the inventory policy of a product variant once it is out of stock.
 *
 */
var ProductVariantInventoryPolicy;
(function (ProductVariantInventoryPolicy) {
    /** Customers can buy this product variant after it's out of stock. */
    ProductVariantInventoryPolicy["Continue"] = "CONTINUE";
    /** Customers can't buy this product variant after it's out of stock. */
    ProductVariantInventoryPolicy["Deny"] = "DENY";
})(ProductVariantInventoryPolicy = exports.ProductVariantInventoryPolicy || (exports.ProductVariantInventoryPolicy = {}));
/** The set of valid sort keys for the ProductVariant query. */
var ProductVariantSortKeys;
(function (ProductVariantSortKeys) {
    /** Sort by the `full_title` value. */
    ProductVariantSortKeys["FullTitle"] = "FULL_TITLE";
    /** Sort by the `id` value. */
    ProductVariantSortKeys["Id"] = "ID";
    /** Sort by the `inventory_levels.available` value. */
    ProductVariantSortKeys["InventoryLevelsAvailable"] = "INVENTORY_LEVELS_AVAILABLE";
    /** Sort by the `inventory_management` value. */
    ProductVariantSortKeys["InventoryManagement"] = "INVENTORY_MANAGEMENT";
    /** Sort by the `inventory_policy` value. */
    ProductVariantSortKeys["InventoryPolicy"] = "INVENTORY_POLICY";
    /** Sort by the `inventory_quantity` value. */
    ProductVariantSortKeys["InventoryQuantity"] = "INVENTORY_QUANTITY";
    /** Sort by the `name` value. */
    ProductVariantSortKeys["Name"] = "NAME";
    /** Sort by the `popular` value. */
    ProductVariantSortKeys["Popular"] = "POPULAR";
    /** Sort by the `position` value. */
    ProductVariantSortKeys["Position"] = "POSITION";
    /**
     * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
     * Don't use this sort key when no search query is specified.
     *
     */
    ProductVariantSortKeys["Relevance"] = "RELEVANCE";
    /** Sort by the `sku` value. */
    ProductVariantSortKeys["Sku"] = "SKU";
    /** Sort by the `title` value. */
    ProductVariantSortKeys["Title"] = "TITLE";
})(ProductVariantSortKeys = exports.ProductVariantSortKeys || (exports.ProductVariantSortKeys = {}));
/** Possible error codes that can be returned by `ProductVariantsBulkCreateUserError`. */
var ProductVariantsBulkCreateUserErrorCode;
(function (ProductVariantsBulkCreateUserErrorCode) {
    /** Variant price must be greater than or equal to zero. */
    ProductVariantsBulkCreateUserErrorCode["GreaterThanOrEqualTo"] = "GREATER_THAN_OR_EQUAL_TO";
    /** Invalid input detected. */
    ProductVariantsBulkCreateUserErrorCode["Invalid"] = "INVALID";
    /** Input must be for this product. */
    ProductVariantsBulkCreateUserErrorCode["MustBeForThisProduct"] = "MUST_BE_FOR_THIS_PRODUCT";
    /** Variant options are not enough. */
    ProductVariantsBulkCreateUserErrorCode["NeedToAddOptionValues"] = "NEED_TO_ADD_OPTION_VALUES";
    /** Price cannot take a negative value. */
    ProductVariantsBulkCreateUserErrorCode["NegativePriceValue"] = "NEGATIVE_PRICE_VALUE";
    /** Input is not defined for this shop. */
    ProductVariantsBulkCreateUserErrorCode["NotDefinedForShop"] = "NOT_DEFINED_FOR_SHOP";
    /** On create, this key cannot be used. */
    ProductVariantsBulkCreateUserErrorCode["NoKeyOnCreate"] = "NO_KEY_ON_CREATE";
    /** Variant options are more than the product options. */
    ProductVariantsBulkCreateUserErrorCode["OptionValuesForNumberOfUnknownOptions"] = "OPTION_VALUES_FOR_NUMBER_OF_UNKNOWN_OPTIONS";
    /** Product does not exist. */
    ProductVariantsBulkCreateUserErrorCode["ProductDoesNotExist"] = "PRODUCT_DOES_NOT_EXIST";
    /** You reached the limit of available SKUs in your current plan. */
    ProductVariantsBulkCreateUserErrorCode["SubscriptionViolation"] = "SUBSCRIPTION_VIOLATION";
    /** Inventory locations cannot exceed the allowed resource limit or 10. */
    ProductVariantsBulkCreateUserErrorCode["TooManyInventoryLocations"] = "TOO_MANY_INVENTORY_LOCATIONS";
    /** Quantity could not be set. The location was not found. */
    ProductVariantsBulkCreateUserErrorCode["TrackedVariantLocationNotFound"] = "TRACKED_VARIANT_LOCATION_NOT_FOUND";
    /** Variant already exists. */
    ProductVariantsBulkCreateUserErrorCode["VariantAlreadyExists"] = "VARIANT_ALREADY_EXISTS";
    /** Variant options already exist. Please change the variant option(s). */
    ProductVariantsBulkCreateUserErrorCode["VariantAlreadyExistsChangeOptionValue"] = "VARIANT_ALREADY_EXISTS_CHANGE_OPTION_VALUE";
})(ProductVariantsBulkCreateUserErrorCode = exports.ProductVariantsBulkCreateUserErrorCode || (exports.ProductVariantsBulkCreateUserErrorCode = {}));
/** Possible error codes that can be returned by `ProductVariantsBulkDeleteUserError`. */
var ProductVariantsBulkDeleteUserErrorCode;
(function (ProductVariantsBulkDeleteUserErrorCode) {
    /** The variant does not exist. */
    ProductVariantsBulkDeleteUserErrorCode["AtLeastOneVariantDoesNotBelongToTheProduct"] = "AT_LEAST_ONE_VARIANT_DOES_NOT_BELONG_TO_THE_PRODUCT";
    /** Cannot delete default variant. */
    ProductVariantsBulkDeleteUserErrorCode["CannotDeleteLastVariant"] = "CANNOT_DELETE_LAST_VARIANT";
    /** Product does not exist. */
    ProductVariantsBulkDeleteUserErrorCode["ProductDoesNotExist"] = "PRODUCT_DOES_NOT_EXIST";
})(ProductVariantsBulkDeleteUserErrorCode = exports.ProductVariantsBulkDeleteUserErrorCode || (exports.ProductVariantsBulkDeleteUserErrorCode = {}));
/** Possible error codes that can be returned by `ProductVariantsBulkReorderUserError`. */
var ProductVariantsBulkReorderUserErrorCode;
(function (ProductVariantsBulkReorderUserErrorCode) {
    /** Product variant IDs must be unique. */
    ProductVariantsBulkReorderUserErrorCode["DuplicatedVariantId"] = "DUPLICATED_VARIANT_ID";
    /** Product variant position cannot be zero or negative number. */
    ProductVariantsBulkReorderUserErrorCode["InvalidPosition"] = "INVALID_POSITION";
    /** Product variant does not exist. */
    ProductVariantsBulkReorderUserErrorCode["MissingVariant"] = "MISSING_VARIANT";
    /** Product does not exist. */
    ProductVariantsBulkReorderUserErrorCode["ProductDoesNotExist"] = "PRODUCT_DOES_NOT_EXIST";
})(ProductVariantsBulkReorderUserErrorCode = exports.ProductVariantsBulkReorderUserErrorCode || (exports.ProductVariantsBulkReorderUserErrorCode = {}));
/** Possible error codes that can be returned by `ProductVariantsBulkUpdateUserError`. */
var ProductVariantsBulkUpdateUserErrorCode;
(function (ProductVariantsBulkUpdateUserErrorCode) {
    /** The price of the variant must be greater than or equal to zero. */
    ProductVariantsBulkUpdateUserErrorCode["GreaterThanOrEqualTo"] = "GREATER_THAN_OR_EQUAL_TO";
    /** Variant options are not enough. */
    ProductVariantsBulkUpdateUserErrorCode["NeedToAddOptionValues"] = "NEED_TO_ADD_OPTION_VALUES";
    /** Price cannot take a negative value. */
    ProductVariantsBulkUpdateUserErrorCode["NegativePriceValue"] = "NEGATIVE_PRICE_VALUE";
    /** Inventory quantities cannot be provided during update. */
    ProductVariantsBulkUpdateUserErrorCode["NoInventoryQuantitesDuringUpdate"] = "NO_INVENTORY_QUANTITES_DURING_UPDATE";
    /** Inventory quantities cannot be updated with variants API. */
    ProductVariantsBulkUpdateUserErrorCode["NoInventoryQuantitiesOnVariantsUpdate"] = "NO_INVENTORY_QUANTITIES_ON_VARIANTS_UPDATE";
    /** Variant options are more than the product options. */
    ProductVariantsBulkUpdateUserErrorCode["OptionValuesForNumberOfUnknownOptions"] = "OPTION_VALUES_FOR_NUMBER_OF_UNKNOWN_OPTIONS";
    /** Product does not exist. */
    ProductVariantsBulkUpdateUserErrorCode["ProductDoesNotExist"] = "PRODUCT_DOES_NOT_EXIST";
    /** Product variant does not exist. */
    ProductVariantsBulkUpdateUserErrorCode["ProductVariantDoesNotExist"] = "PRODUCT_VARIANT_DOES_NOT_EXIST";
    /** Product variant is missing ID attribute. */
    ProductVariantsBulkUpdateUserErrorCode["ProductVariantIdMissing"] = "PRODUCT_VARIANT_ID_MISSING";
    /** You reached the limit of available SKUs in your current plan. */
    ProductVariantsBulkUpdateUserErrorCode["SubscriptionViolation"] = "SUBSCRIPTION_VIOLATION";
    /** The variant already exists. */
    ProductVariantsBulkUpdateUserErrorCode["VariantAlreadyExists"] = "VARIANT_ALREADY_EXISTS";
})(ProductVariantsBulkUpdateUserErrorCode = exports.ProductVariantsBulkUpdateUserErrorCode || (exports.ProductVariantsBulkUpdateUserErrorCode = {}));
/** The set of valid sort keys for the ProfileItem query. */
var ProfileItemSortKeys;
(function (ProfileItemSortKeys) {
    /** Sort by the `created_at` value. */
    ProfileItemSortKeys["CreatedAt"] = "CREATED_AT";
    /** Sort by the `id` value. */
    ProfileItemSortKeys["Id"] = "ID";
    /** Sort by the `inventory_total` value. */
    ProfileItemSortKeys["InventoryTotal"] = "INVENTORY_TOTAL";
    /** Sort by the `product_type` value. */
    ProfileItemSortKeys["ProductType"] = "PRODUCT_TYPE";
    /** Sort by the `published_at` value. */
    ProfileItemSortKeys["PublishedAt"] = "PUBLISHED_AT";
    /**
     * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
     * Don't use this sort key when no search query is specified.
     *
     */
    ProfileItemSortKeys["Relevance"] = "RELEVANCE";
    /** Sort by the `title` value. */
    ProfileItemSortKeys["Title"] = "TITLE";
    /** Sort by the `updated_at` value. */
    ProfileItemSortKeys["UpdatedAt"] = "UPDATED_AT";
    /** Sort by the `vendor` value. */
    ProfileItemSortKeys["Vendor"] = "VENDOR";
})(ProfileItemSortKeys = exports.ProfileItemSortKeys || (exports.ProfileItemSortKeys = {}));
/** Possible error codes that can be returned by `PubSubWebhookSubscriptionCreateUserError`. */
var PubSubWebhookSubscriptionCreateUserErrorCode;
(function (PubSubWebhookSubscriptionCreateUserErrorCode) {
    /** Invalid parameters provided. */
    PubSubWebhookSubscriptionCreateUserErrorCode["InvalidParameters"] = "INVALID_PARAMETERS";
})(PubSubWebhookSubscriptionCreateUserErrorCode = exports.PubSubWebhookSubscriptionCreateUserErrorCode || (exports.PubSubWebhookSubscriptionCreateUserErrorCode = {}));
/** Possible error codes that can be returned by `PubSubWebhookSubscriptionUpdateUserError`. */
var PubSubWebhookSubscriptionUpdateUserErrorCode;
(function (PubSubWebhookSubscriptionUpdateUserErrorCode) {
    /** Invalid parameters provided. */
    PubSubWebhookSubscriptionUpdateUserErrorCode["InvalidParameters"] = "INVALID_PARAMETERS";
})(PubSubWebhookSubscriptionUpdateUserErrorCode = exports.PubSubWebhookSubscriptionUpdateUserErrorCode || (exports.PubSubWebhookSubscriptionUpdateUserErrorCode = {}));
/** The type of refund to perform for a particular refund duty. */
var RefundDutyRefundType;
(function (RefundDutyRefundType) {
    /** The duty is fully refunded. */
    RefundDutyRefundType["Full"] = "FULL";
    /** The duty is proportionally refunded based on the quantity of the refunded line item. */
    RefundDutyRefundType["Proportional"] = "PROPORTIONAL";
})(RefundDutyRefundType = exports.RefundDutyRefundType || (exports.RefundDutyRefundType = {}));
/** The type of restock performed for a particular refund line item. */
var RefundLineItemRestockType;
(function (RefundLineItemRestockType) {
    /** The refund line item was canceled. Use this when restocking unfulfilled line items. */
    RefundLineItemRestockType["Cancel"] = "CANCEL";
    /** Deprecated. The refund line item was restocked, without specifically beingidentified as a return or cancelation. This value is not accepted when creating new refunds. */
    RefundLineItemRestockType["LegacyRestock"] = "LEGACY_RESTOCK";
    /** Refund line item was not restocked. */
    RefundLineItemRestockType["NoRestock"] = "NO_RESTOCK";
    /** The refund line item was returned. Use this when restocking line items that were fulfilled. */
    RefundLineItemRestockType["Return"] = "RETURN";
})(RefundLineItemRestockType = exports.RefundLineItemRestockType || (exports.RefundLineItemRestockType = {}));
/** The available icons for resource alerts. */
var ResourceAlertIcon;
(function (ResourceAlertIcon) {
    /** A checkmark inside a circle. */
    ResourceAlertIcon["CheckmarkCircle"] = "CHECKMARK_CIRCLE";
    /** A lowercase `i` inside a circle. */
    ResourceAlertIcon["InformationCircle"] = "INFORMATION_CIRCLE";
})(ResourceAlertIcon = exports.ResourceAlertIcon || (exports.ResourceAlertIcon = {}));
/** The possible severity levels for a resource alert. */
var ResourceAlertSeverity;
(function (ResourceAlertSeverity) {
    /** Indicates a critical alert. For example, a blocked app. */
    ResourceAlertSeverity["Critical"] = "CRITICAL";
    /** Indicates a neutral alert. For example, an accepted dispute. */
    ResourceAlertSeverity["Default"] = "DEFAULT";
    /** @deprecated `ERROR` severity is being deprecated in favour of `WARNING` or `CRITICAL` instead. */
    ResourceAlertSeverity["Error"] = "ERROR";
    /** Indicates an informative alert. For example, an escalated dispute. */
    ResourceAlertSeverity["Info"] = "INFO";
    /** Indicates a success alert. For example, a winning a dispute. */
    ResourceAlertSeverity["Success"] = "SUCCESS";
    /** Indicates an informative alert. For example, a new dispute. */
    ResourceAlertSeverity["Warning"] = "WARNING";
})(ResourceAlertSeverity = exports.ResourceAlertSeverity || (exports.ResourceAlertSeverity = {}));
/** The state of the resource feedback. */
var ResourceFeedbackState;
(function (ResourceFeedbackState) {
    /** No action required from merchant. */
    ResourceFeedbackState["Accepted"] = "ACCEPTED";
    /** The merchant needs to resolve an issue with the resource. */
    ResourceFeedbackState["RequiresAction"] = "REQUIRES_ACTION";
})(ResourceFeedbackState = exports.ResourceFeedbackState || (exports.ResourceFeedbackState = {}));
/** The possible order action types for a sale. */
var SaleActionType;
(function (SaleActionType) {
    /** A purchase or charge. */
    SaleActionType["Order"] = "ORDER";
    /** A removal or return. */
    SaleActionType["Return"] = "RETURN";
    /** An unknown order action. Represents new actions that may be added in future versions. */
    SaleActionType["Unknown"] = "UNKNOWN";
    /** A change to the price, taxes, or discounts for a prior purchase. */
    SaleActionType["Update"] = "UPDATE";
})(SaleActionType = exports.SaleActionType || (exports.SaleActionType = {}));
/** The possible line types for a sale record. One of the possible order line types for a sale is an adjustment. Sales adjustments occur when a refund is issued for a line item that is either more or less than the total value of the line item. Examples are restocking fees and goodwill payments. When this happens, Shopify produces a sales agreement with sale records for each line item that is returned or refunded and an additional sale record for the adjustment (for example, a restocking fee). The sales records for the returned or refunded items represent the reversal of the original line item sale value. The additional adjustment sale record represents the difference between the original total value of all line items that were refunded, and the actual amount refunded. */
var SaleLineType;
(function (SaleLineType) {
    /** A sale adjustment. */
    SaleLineType["Adjustment"] = "ADJUSTMENT";
    /** A duty charge. */
    SaleLineType["Duty"] = "DUTY";
    /** A gift card. */
    SaleLineType["GiftCard"] = "GIFT_CARD";
    /** A product purchased, returned or exchanged. */
    SaleLineType["Product"] = "PRODUCT";
    /** A shipping cost. */
    SaleLineType["Shipping"] = "SHIPPING";
    /** A tip added by the customer. */
    SaleLineType["Tip"] = "TIP";
    /** An unknown sale line. Represents new types that may be added in future versions. */
    SaleLineType["Unknown"] = "UNKNOWN";
})(SaleLineType = exports.SaleLineType || (exports.SaleLineType = {}));
/**
 * The page or pages on the online store where the script should be included.
 *
 */
var ScriptTagDisplayScope;
(function (ScriptTagDisplayScope) {
    /** Include the script on both the web storefront and the order status page. */
    ScriptTagDisplayScope["All"] = "ALL";
    /** Include the script only on the web storefront. */
    ScriptTagDisplayScope["OnlineStore"] = "ONLINE_STORE";
    /** Include the script only on the order status page. */
    ScriptTagDisplayScope["OrderStatus"] = "ORDER_STATUS";
})(ScriptTagDisplayScope = exports.ScriptTagDisplayScope || (exports.ScriptTagDisplayScope = {}));
/** Specifies the type of resources to be returned from a search. */
var SearchResultType;
(function (SearchResultType) {
    SearchResultType["Collection"] = "COLLECTION";
    SearchResultType["Customer"] = "CUSTOMER";
    /** A code discount redeem code. */
    SearchResultType["DiscountRedeemCode"] = "DISCOUNT_REDEEM_CODE";
    SearchResultType["DraftOrder"] = "DRAFT_ORDER";
    /** A file. */
    SearchResultType["File"] = "FILE";
    SearchResultType["OnlineStoreArticle"] = "ONLINE_STORE_ARTICLE";
    SearchResultType["OnlineStoreBlog"] = "ONLINE_STORE_BLOG";
    SearchResultType["OnlineStorePage"] = "ONLINE_STORE_PAGE";
    SearchResultType["Order"] = "ORDER";
    SearchResultType["PriceRule"] = "PRICE_RULE";
    SearchResultType["Product"] = "PRODUCT";
    /** A URL redirect. */
    SearchResultType["UrlRedirect"] = "URL_REDIRECT";
})(SearchResultType = exports.SearchResultType || (exports.SearchResultType = {}));
/** The set of valid sort keys for the Segment query. */
var SegmentSortKeys;
(function (SegmentSortKeys) {
    /** Sort by the `creation_date` value. */
    SegmentSortKeys["CreationDate"] = "CREATION_DATE";
    /** Sort by the `id` value. */
    SegmentSortKeys["Id"] = "ID";
    /** Sort by the `last_edit_date` value. */
    SegmentSortKeys["LastEditDate"] = "LAST_EDIT_DATE";
    /**
     * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
     * Don't use this sort key when no search query is specified.
     *
     */
    SegmentSortKeys["Relevance"] = "RELEVANCE";
})(SegmentSortKeys = exports.SegmentSortKeys || (exports.SegmentSortKeys = {}));
/** Represents the anchor type. */
var SellingPlanAnchorType;
(function (SellingPlanAnchorType) {
    /** Which day of the month, between 1-31. */
    SellingPlanAnchorType["Monthday"] = "MONTHDAY";
    /** Which day of the week, between 1-7. */
    SellingPlanAnchorType["Weekday"] = "WEEKDAY";
    /** Which days of the month and year, month between 1-12, and day between 1-31. */
    SellingPlanAnchorType["Yearday"] = "YEARDAY";
})(SellingPlanAnchorType = exports.SellingPlanAnchorType || (exports.SellingPlanAnchorType = {}));
/**
 * The category of the selling plan. For the `OTHER` category,
 *          you must fill out our [request form](https://docs.google.com/forms/d/e/1FAIpQLSeU18Xmw0Q61V8wdH-dfGafFqIBfRchQKUO8WAF3yJTvgyyZQ/viewform),
 *          where we'll review your request for a new purchase option.
 */
var SellingPlanCategory;
(function (SellingPlanCategory) {
    /** The selling plan is for anything not in one of the other categories. */
    SellingPlanCategory["Other"] = "OTHER";
    /** The selling plan is for pre-orders. */
    SellingPlanCategory["PreOrder"] = "PRE_ORDER";
    /** The selling plan is for subscriptions. */
    SellingPlanCategory["Subscription"] = "SUBSCRIPTION";
    /** The selling plan is for try before you buy purchases. */
    SellingPlanCategory["TryBeforeYouBuy"] = "TRY_BEFORE_YOU_BUY";
})(SellingPlanCategory = exports.SellingPlanCategory || (exports.SellingPlanCategory = {}));
/** The checkout charge when the full amount isn't charged at checkout. */
var SellingPlanCheckoutChargeType;
(function (SellingPlanCheckoutChargeType) {
    /** The checkout charge is a percentage of the product or variant price. */
    SellingPlanCheckoutChargeType["Percentage"] = "PERCENTAGE";
    /** The checkout charge is a fixed price amount. */
    SellingPlanCheckoutChargeType["Price"] = "PRICE";
})(SellingPlanCheckoutChargeType = exports.SellingPlanCheckoutChargeType || (exports.SellingPlanCheckoutChargeType = {}));
/** Possible intentions of a Delivery Policy. */
var SellingPlanFixedDeliveryPolicyIntent;
(function (SellingPlanFixedDeliveryPolicyIntent) {
    /**
     * A merchant-centric delivery policy. Mark this delivery policy to define when the merchant should start fulfillment.
     *
     */
    SellingPlanFixedDeliveryPolicyIntent["FulfillmentBegin"] = "FULFILLMENT_BEGIN";
})(SellingPlanFixedDeliveryPolicyIntent = exports.SellingPlanFixedDeliveryPolicyIntent || (exports.SellingPlanFixedDeliveryPolicyIntent = {}));
/** The fulfillment or delivery behavior of the first fulfillment when the orderis placed before the anchor. */
var SellingPlanFixedDeliveryPolicyPreAnchorBehavior;
(function (SellingPlanFixedDeliveryPolicyPreAnchorBehavior) {
    /**
     * Orders placed can be fulfilled / delivered immediately. Orders placed inside a cutoff can be fulfilled / delivered at the next anchor.
     *
     */
    SellingPlanFixedDeliveryPolicyPreAnchorBehavior["Asap"] = "ASAP";
    /**
     * Orders placed can be fulfilled / delivered at the next anchor date.
     * Orders placed inside a cutoff will skip the next anchor and can be fulfilled /
     * delivered at the following anchor.
     *
     */
    SellingPlanFixedDeliveryPolicyPreAnchorBehavior["Next"] = "NEXT";
})(SellingPlanFixedDeliveryPolicyPreAnchorBehavior = exports.SellingPlanFixedDeliveryPolicyPreAnchorBehavior || (exports.SellingPlanFixedDeliveryPolicyPreAnchorBehavior = {}));
/** Describes what triggers fulfillment. */
var SellingPlanFulfillmentTrigger;
(function (SellingPlanFulfillmentTrigger) {
    /** Use the anchor values to calculate fulfillment date. */
    SellingPlanFulfillmentTrigger["Anchor"] = "ANCHOR";
    /** As soon as possible. */
    SellingPlanFulfillmentTrigger["Asap"] = "ASAP";
    /** At an exact time defined by the fulfillment_exact_time field. */
    SellingPlanFulfillmentTrigger["ExactTime"] = "EXACT_TIME";
    /** Unknown. Usually to be determined in the future. */
    SellingPlanFulfillmentTrigger["Unknown"] = "UNKNOWN";
})(SellingPlanFulfillmentTrigger = exports.SellingPlanFulfillmentTrigger || (exports.SellingPlanFulfillmentTrigger = {}));
/** The set of valid sort keys for the SellingPlanGroup query. */
var SellingPlanGroupSortKeys;
(function (SellingPlanGroupSortKeys) {
    /** Sort by the `created_at` value. */
    SellingPlanGroupSortKeys["CreatedAt"] = "CREATED_AT";
    /** Sort by the `id` value. */
    SellingPlanGroupSortKeys["Id"] = "ID";
    /** Sort by the `name` value. */
    SellingPlanGroupSortKeys["Name"] = "NAME";
    /**
     * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
     * Don't use this sort key when no search query is specified.
     *
     */
    SellingPlanGroupSortKeys["Relevance"] = "RELEVANCE";
    /** Sort by the `updated_at` value. */
    SellingPlanGroupSortKeys["UpdatedAt"] = "UPDATED_AT";
})(SellingPlanGroupSortKeys = exports.SellingPlanGroupSortKeys || (exports.SellingPlanGroupSortKeys = {}));
/** Possible error codes that can be returned by `SellingPlanGroupUserError`. */
var SellingPlanGroupUserErrorCode;
(function (SellingPlanGroupUserErrorCode) {
    /** Billing and delivery policy types must be the same. */
    SellingPlanGroupUserErrorCode["BillingAndDeliveryPolicyTypesMustBeTheSame"] = "BILLING_AND_DELIVERY_POLICY_TYPES_MUST_BE_THE_SAME";
    /** The input value is blank. */
    SellingPlanGroupUserErrorCode["Blank"] = "BLANK";
    /** A fixed billing policy's checkout charge value and type must match. */
    SellingPlanGroupUserErrorCode["CheckoutChargeValueAndTypeMustMatch"] = "CHECKOUT_CHARGE_VALUE_AND_TYPE_MUST_MATCH";
    /** The input value should be equal to the value allowed. */
    SellingPlanGroupUserErrorCode["EqualTo"] = "EQUAL_TO";
    /** Could not add the resource to the selling plan group. */
    SellingPlanGroupUserErrorCode["ErrorAddingResourceToGroup"] = "ERROR_ADDING_RESOURCE_TO_GROUP";
    /** A fixed billing policy's fulfillment_exact_time must not be present when the fulfillment_trigger isn't EXACT_TIME. */
    SellingPlanGroupUserErrorCode["FulfillmentExactTimeNotAllowed"] = "FULFILLMENT_EXACT_TIME_NOT_ALLOWED";
    /** A fixed billing policy's fulfillment_exact_time can't be blank when the fulfillment_trigger is EXACT_TIME. */
    SellingPlanGroupUserErrorCode["FulfillmentExactTimeRequired"] = "FULFILLMENT_EXACT_TIME_REQUIRED";
    /** The input value should be greater than the minimum allowed value. */
    SellingPlanGroupUserErrorCode["GreaterThan"] = "GREATER_THAN";
    /** The input value should be greater than or equal to the minimum value allowed. */
    SellingPlanGroupUserErrorCode["GreaterThanOrEqualTo"] = "GREATER_THAN_OR_EQUAL_TO";
    /** Selling plan group could not be deleted. */
    SellingPlanGroupUserErrorCode["GroupCouldNotBeDeleted"] = "GROUP_COULD_NOT_BE_DELETED";
    /** Selling plan group does not exist. */
    SellingPlanGroupUserErrorCode["GroupDoesNotExist"] = "GROUP_DOES_NOT_EXIST";
    /** The input value isn't included in the list. */
    SellingPlanGroupUserErrorCode["Inclusion"] = "INCLUSION";
    /** The input value is invalid. */
    SellingPlanGroupUserErrorCode["Invalid"] = "INVALID";
    /** The input value should be less than the maximum value allowed. */
    SellingPlanGroupUserErrorCode["LessThan"] = "LESS_THAN";
    /** The input value should be less than or equal to the maximum value allowed. */
    SellingPlanGroupUserErrorCode["LessThanOrEqualTo"] = "LESS_THAN_OR_EQUAL_TO";
    /** The input value is not a number. */
    SellingPlanGroupUserErrorCode["NotANumber"] = "NOT_A_NUMBER";
    /** The record with the ID used as the input value couldn't be found. */
    SellingPlanGroupUserErrorCode["NotFound"] = "NOT_FOUND";
    /** Only one billing policy type can be defined. */
    SellingPlanGroupUserErrorCode["OnlyNeedOneBillingPolicyType"] = "ONLY_NEED_ONE_BILLING_POLICY_TYPE";
    /** A fixed billing policy's checkout charge can have at most one value. */
    SellingPlanGroupUserErrorCode["OnlyNeedOneCheckoutChargeValue"] = "ONLY_NEED_ONE_CHECKOUT_CHARGE_VALUE";
    /** Only one delivery policy type can be defined. */
    SellingPlanGroupUserErrorCode["OnlyNeedOneDeliveryPolicyType"] = "ONLY_NEED_ONE_DELIVERY_POLICY_TYPE";
    /** Only one pricing policy type can be defined. */
    SellingPlanGroupUserErrorCode["OnlyNeedOnePricingPolicyType"] = "ONLY_NEED_ONE_PRICING_POLICY_TYPE";
    /** Only one pricing policy adjustment value type can be defined. */
    SellingPlanGroupUserErrorCode["OnlyNeedOnePricingPolicyValue"] = "ONLY_NEED_ONE_PRICING_POLICY_VALUE";
    /** A selling plan can't have both fixed and recurring billing policies. */
    SellingPlanGroupUserErrorCode["OnlyOneOfFixedOrRecurringBilling"] = "ONLY_ONE_OF_FIXED_OR_RECURRING_BILLING";
    /** A selling plan can't have both fixed and recurring delivery policies. */
    SellingPlanGroupUserErrorCode["OnlyOneOfFixedOrRecurringDelivery"] = "ONLY_ONE_OF_FIXED_OR_RECURRING_DELIVERY";
    /** Selling plan does not exist. */
    SellingPlanGroupUserErrorCode["PlanDoesNotExist"] = "PLAN_DOES_NOT_EXIST";
    /** Selling plan ID must be specified to update. */
    SellingPlanGroupUserErrorCode["PlanIdMustBeSpecifiedToUpdate"] = "PLAN_ID_MUST_BE_SPECIFIED_TO_UPDATE";
    /** The input value needs to be blank. */
    SellingPlanGroupUserErrorCode["Present"] = "PRESENT";
    /** Pricing policy's adjustment value and adjustment type must match. */
    SellingPlanGroupUserErrorCode["PricingPolicyAdjustmentValueAndTypeMustMatch"] = "PRICING_POLICY_ADJUSTMENT_VALUE_AND_TYPE_MUST_MATCH";
    /** Product does not exist. */
    SellingPlanGroupUserErrorCode["ProductDoesNotExist"] = "PRODUCT_DOES_NOT_EXIST";
    /** Product variant does not exist. */
    SellingPlanGroupUserErrorCode["ProductVariantDoesNotExist"] = "PRODUCT_VARIANT_DOES_NOT_EXIST";
    /** A fixed billing policy's remaining_balance_charge_exact_time must not be present when the remaining_balance_charge_trigger isn't EXACT_TIME. */
    SellingPlanGroupUserErrorCode["RemainingBalanceChargeExactTimeNotAllowed"] = "REMAINING_BALANCE_CHARGE_EXACT_TIME_NOT_ALLOWED";
    /** A fixed billing policy's remaining_balance_charge_exact_time can't be blank when the remaining_balance_charge_trigger is EXACT_TIME. */
    SellingPlanGroupUserErrorCode["RemainingBalanceChargeExactTimeRequired"] = "REMAINING_BALANCE_CHARGE_EXACT_TIME_REQUIRED";
    /** A fixed billing policy's remaining_balance_charge_time_after_checkout must be present and greater than zero when the remaining_balance_charge_trigger is TIME_AFTER_CHECKOUT. */
    SellingPlanGroupUserErrorCode["RemainingBalanceChargeTimeAfterCheckoutMustBeGreaterThanZero"] = "REMAINING_BALANCE_CHARGE_TIME_AFTER_CHECKOUT_MUST_BE_GREATER_THAN_ZERO";
    /** A fixed billing policy's remaining_balance_charge_trigger can't be NO_REMAINING_BALANCE when the checkout_charge_type is PERCENTAGE and checkout_charge_value is less than 100. */
    SellingPlanGroupUserErrorCode["RemainingBalanceChargeTriggerNoRemainingBalanceOnPartialPercentageCheckoutCharge"] = "REMAINING_BALANCE_CHARGE_TRIGGER_NO_REMAINING_BALANCE_ON_PARTIAL_PERCENTAGE_CHECKOUT_CHARGE";
    /** A fixed billing policy's remaining_balance_charge_trigger can't be NO_REMAINING_BALANCE when the checkout_charge_type is PRICE. */
    SellingPlanGroupUserErrorCode["RemainingBalanceChargeTriggerNoRemainingBalanceOnPriceCheckoutCharge"] = "REMAINING_BALANCE_CHARGE_TRIGGER_NO_REMAINING_BALANCE_ON_PRICE_CHECKOUT_CHARGE";
    /** A fixed billing policy's remaining_balance_charge_trigger must be NO_REMAINING_BALANCE when the checkout_charge_type is PERCENTAGE and checkout_charge_value is 100. */
    SellingPlanGroupUserErrorCode["RemainingBalanceChargeTriggerOnFullCheckout"] = "REMAINING_BALANCE_CHARGE_TRIGGER_ON_FULL_CHECKOUT";
    /** The selling plan list provided contains 1 or more invalid IDs. */
    SellingPlanGroupUserErrorCode["ResourceListContainsInvalidIds"] = "RESOURCE_LIST_CONTAINS_INVALID_IDS";
    /** A fixed delivery policy's anchors must not be present when the fulfillment_trigger isn't ANCHOR. */
    SellingPlanGroupUserErrorCode["SellingPlanAnchorsNotAllowed"] = "SELLING_PLAN_ANCHORS_NOT_ALLOWED";
    /** A fixed delivery policy's anchors must be present when the fulfillment_trigger is ANCHOR. */
    SellingPlanGroupUserErrorCode["SellingPlanAnchorsRequired"] = "SELLING_PLAN_ANCHORS_REQUIRED";
    /** Selling plan's billing and delivery policies anchors must be equal. */
    SellingPlanGroupUserErrorCode["SellingPlanBillingAndDeliveryPolicyAnchorsMustBeEqual"] = "SELLING_PLAN_BILLING_AND_DELIVERY_POLICY_ANCHORS_MUST_BE_EQUAL";
    /** Selling plan's billing cycle must be a multiple of delivery cycle. */
    SellingPlanGroupUserErrorCode["SellingPlanBillingCycleMustBeAMultipleOfDeliveryCycle"] = "SELLING_PLAN_BILLING_CYCLE_MUST_BE_A_MULTIPLE_OF_DELIVERY_CYCLE";
    /** Missing billing policy. */
    SellingPlanGroupUserErrorCode["SellingPlanBillingPolicyMissing"] = "SELLING_PLAN_BILLING_POLICY_MISSING";
    /** Must include at least one selling plan. */
    SellingPlanGroupUserErrorCode["SellingPlanCountLowerBound"] = "SELLING_PLAN_COUNT_LOWER_BOUND";
    /** Exceeded the selling plan limit (31). */
    SellingPlanGroupUserErrorCode["SellingPlanCountUpperBound"] = "SELLING_PLAN_COUNT_UPPER_BOUND";
    /** Missing delivery policy. */
    SellingPlanGroupUserErrorCode["SellingPlanDeliveryPolicyMissing"] = "SELLING_PLAN_DELIVERY_POLICY_MISSING";
    /** Cannot have multiple selling plans with the same name. */
    SellingPlanGroupUserErrorCode["SellingPlanDuplicateName"] = "SELLING_PLAN_DUPLICATE_NAME";
    /** Cannot have multiple selling plans with the same options. */
    SellingPlanGroupUserErrorCode["SellingPlanDuplicateOptions"] = "SELLING_PLAN_DUPLICATE_OPTIONS";
    /** A fixed selling plan can have at most one pricing policy. */
    SellingPlanGroupUserErrorCode["SellingPlanFixedPricingPoliciesLimit"] = "SELLING_PLAN_FIXED_PRICING_POLICIES_LIMIT";
    /** Selling plan's billing policy max cycles must be greater than min cycles. */
    SellingPlanGroupUserErrorCode["SellingPlanMaxCyclesMustBeGreaterThanMinCycles"] = "SELLING_PLAN_MAX_CYCLES_MUST_BE_GREATER_THAN_MIN_CYCLES";
    /** Cannot define option2 on this selling plan as there's no label on the parent selling plan group. */
    SellingPlanGroupUserErrorCode["SellingPlanMissingOption2LabelOnParentGroup"] = "SELLING_PLAN_MISSING_OPTION2_LABEL_ON_PARENT_GROUP";
    /** Cannot define option3 on this selling plan as there's no label on the parent selling plan group. */
    SellingPlanGroupUserErrorCode["SellingPlanMissingOption3LabelOnParentGroup"] = "SELLING_PLAN_MISSING_OPTION3_LABEL_ON_PARENT_GROUP";
    /** Selling plan's option2 is required because option2 exists. */
    SellingPlanGroupUserErrorCode["SellingPlanOption2RequiredAsDefinedOnParentGroup"] = "SELLING_PLAN_OPTION2_REQUIRED_AS_DEFINED_ON_PARENT_GROUP";
    /** Selling plan's option3 is required because option3 exists. */
    SellingPlanGroupUserErrorCode["SellingPlanOption3RequiredAsDefinedOnParentGroup"] = "SELLING_PLAN_OPTION3_REQUIRED_AS_DEFINED_ON_PARENT_GROUP";
    /** Selling plans can't have more than 2 pricing policies. */
    SellingPlanGroupUserErrorCode["SellingPlanPricingPoliciesLimit"] = "SELLING_PLAN_PRICING_POLICIES_LIMIT";
    /** Selling plan's pricing policies must contain one fixed pricing policy. */
    SellingPlanGroupUserErrorCode["SellingPlanPricingPoliciesMustContainAFixedPricingPolicy"] = "SELLING_PLAN_PRICING_POLICIES_MUST_CONTAIN_A_FIXED_PRICING_POLICY";
    /** The input value is already taken. */
    SellingPlanGroupUserErrorCode["Taken"] = "TAKEN";
    /** The input value is too big. */
    SellingPlanGroupUserErrorCode["TooBig"] = "TOO_BIG";
    /** The input value is too long. */
    SellingPlanGroupUserErrorCode["TooLong"] = "TOO_LONG";
    /** The input value is too short. */
    SellingPlanGroupUserErrorCode["TooShort"] = "TOO_SHORT";
    /** The input value is the wrong length. */
    SellingPlanGroupUserErrorCode["WrongLength"] = "WRONG_LENGTH";
})(SellingPlanGroupUserErrorCode = exports.SellingPlanGroupUserErrorCode || (exports.SellingPlanGroupUserErrorCode = {}));
/** Represents valid selling plan interval. */
var SellingPlanInterval;
(function (SellingPlanInterval) {
    /** Day interval. */
    SellingPlanInterval["Day"] = "DAY";
    /** Month interval. */
    SellingPlanInterval["Month"] = "MONTH";
    /** Week interval. */
    SellingPlanInterval["Week"] = "WEEK";
    /** Year interval. */
    SellingPlanInterval["Year"] = "YEAR";
})(SellingPlanInterval = exports.SellingPlanInterval || (exports.SellingPlanInterval = {}));
/** Represents a selling plan pricing policy adjustment type. */
var SellingPlanPricingPolicyAdjustmentType;
(function (SellingPlanPricingPolicyAdjustmentType) {
    /** Fixed amount off adjustment. */
    SellingPlanPricingPolicyAdjustmentType["FixedAmount"] = "FIXED_AMOUNT";
    /** Percentage off adjustment. */
    SellingPlanPricingPolicyAdjustmentType["Percentage"] = "PERCENTAGE";
    /** Price of the policy. */
    SellingPlanPricingPolicyAdjustmentType["Price"] = "PRICE";
})(SellingPlanPricingPolicyAdjustmentType = exports.SellingPlanPricingPolicyAdjustmentType || (exports.SellingPlanPricingPolicyAdjustmentType = {}));
/** Whether the delivery policy is merchant or buyer-centric. */
var SellingPlanRecurringDeliveryPolicyIntent;
(function (SellingPlanRecurringDeliveryPolicyIntent) {
    /**
     * A merchant-centric delivery policy. Mark this delivery policy to define when the merchant should start fulfillment.
     *
     */
    SellingPlanRecurringDeliveryPolicyIntent["FulfillmentBegin"] = "FULFILLMENT_BEGIN";
})(SellingPlanRecurringDeliveryPolicyIntent = exports.SellingPlanRecurringDeliveryPolicyIntent || (exports.SellingPlanRecurringDeliveryPolicyIntent = {}));
/** The fulfillment or delivery behaviors of the first fulfillment when the orderis placed before the anchor. */
var SellingPlanRecurringDeliveryPolicyPreAnchorBehavior;
(function (SellingPlanRecurringDeliveryPolicyPreAnchorBehavior) {
    /**
     * The orders placed can be fulfilled or delivered immediately. The orders placed inside a cutoff can be fulfilled or delivered at the next anchor.
     *
     */
    SellingPlanRecurringDeliveryPolicyPreAnchorBehavior["Asap"] = "ASAP";
    /**
     * The orders placed can be fulfilled or delivered at the next anchor date.
     * The orders placed inside a cutoff will skip the next anchor and can be fulfilled or
     * delivered at the following anchor.
     *
     */
    SellingPlanRecurringDeliveryPolicyPreAnchorBehavior["Next"] = "NEXT";
})(SellingPlanRecurringDeliveryPolicyPreAnchorBehavior = exports.SellingPlanRecurringDeliveryPolicyPreAnchorBehavior || (exports.SellingPlanRecurringDeliveryPolicyPreAnchorBehavior = {}));
/** When to capture the payment for the remaining amount due. */
var SellingPlanRemainingBalanceChargeTrigger;
(function (SellingPlanRemainingBalanceChargeTrigger) {
    /** At an exact time defined by the remaining_balance_charge_exact_time field. */
    SellingPlanRemainingBalanceChargeTrigger["ExactTime"] = "EXACT_TIME";
    /** When there's no remaining balance to be charged after checkout. */
    SellingPlanRemainingBalanceChargeTrigger["NoRemainingBalance"] = "NO_REMAINING_BALANCE";
    /** After the duration defined by the remaining_balance_charge_time_after_checkout field. */
    SellingPlanRemainingBalanceChargeTrigger["TimeAfterCheckout"] = "TIME_AFTER_CHECKOUT";
})(SellingPlanRemainingBalanceChargeTrigger = exports.SellingPlanRemainingBalanceChargeTrigger || (exports.SellingPlanRemainingBalanceChargeTrigger = {}));
/** When to reserve inventory for a selling plan. */
var SellingPlanReserve;
(function (SellingPlanReserve) {
    /** Reserve inventory when order is fulfilled. */
    SellingPlanReserve["OnFulfillment"] = "ON_FULFILLMENT";
    /** Reserve inventory at time of sale. */
    SellingPlanReserve["OnSale"] = "ON_SALE";
})(SellingPlanReserve = exports.SellingPlanReserve || (exports.SellingPlanReserve = {}));
/** The class of the discount for combining purposes. */
var ShippingDiscountClass;
(function (ShippingDiscountClass) {
    /** Combined as a shipping discount. */
    ShippingDiscountClass["Shipping"] = "SHIPPING";
})(ShippingDiscountClass = exports.ShippingDiscountClass || (exports.ShippingDiscountClass = {}));
/**
 * Possible branding of a shop.
 * Branding can be used to define the look of a shop including its styling and logo in the Shopify Admin.
 *
 */
var ShopBranding;
(function (ShopBranding) {
    /** Shop has Rogers branding. */
    ShopBranding["Rogers"] = "ROGERS";
    /** Shop has Shopify branding. */
    ShopBranding["Shopify"] = "SHOPIFY";
    /** Shop has Shopify Gold branding. */
    ShopBranding["ShopifyGold"] = "SHOPIFY_GOLD";
    /** Shop has Shopify Plus branding. */
    ShopBranding["ShopifyPlus"] = "SHOPIFY_PLUS";
})(ShopBranding = exports.ShopBranding || (exports.ShopBranding = {}));
/**
 * Represents the shop's customer account requirement preference.
 *
 */
var ShopCustomerAccountsSetting;
(function (ShopCustomerAccountsSetting) {
    ShopCustomerAccountsSetting["Disabled"] = "DISABLED";
    ShopCustomerAccountsSetting["Optional"] = "OPTIONAL";
    ShopCustomerAccountsSetting["Required"] = "REQUIRED";
})(ShopCustomerAccountsSetting = exports.ShopCustomerAccountsSetting || (exports.ShopCustomerAccountsSetting = {}));
/** Possible error codes that can be returned by `ShopPolicyUserError`. */
var ShopPolicyErrorCode;
(function (ShopPolicyErrorCode) {
    /** The input value is too big. */
    ShopPolicyErrorCode["TooBig"] = "TOO_BIG";
})(ShopPolicyErrorCode = exports.ShopPolicyErrorCode || (exports.ShopPolicyErrorCode = {}));
/** Available shop policy types. */
var ShopPolicyType;
(function (ShopPolicyType) {
    /** The legal notice. */
    ShopPolicyType["LegalNotice"] = "LEGAL_NOTICE";
    /** The privacy policy. */
    ShopPolicyType["PrivacyPolicy"] = "PRIVACY_POLICY";
    /** The refund policy. */
    ShopPolicyType["RefundPolicy"] = "REFUND_POLICY";
    /** The shipping policy. */
    ShopPolicyType["ShippingPolicy"] = "SHIPPING_POLICY";
    /** The purchase options cancellation policy. */
    ShopPolicyType["SubscriptionPolicy"] = "SUBSCRIPTION_POLICY";
    /** The terms of sale. */
    ShopPolicyType["TermsOfSale"] = "TERMS_OF_SALE";
    /** The terms of service. */
    ShopPolicyType["TermsOfService"] = "TERMS_OF_SERVICE";
})(ShopPolicyType = exports.ShopPolicyType || (exports.ShopPolicyType = {}));
/** Possible sort of tags. */
var ShopTagSort;
(function (ShopTagSort) {
    /** Alphabetical sort. */
    ShopTagSort["Alphabetical"] = "ALPHABETICAL";
    /** Popularity sort. */
    ShopTagSort["Popular"] = "POPULAR";
})(ShopTagSort = exports.ShopTagSort || (exports.ShopTagSort = {}));
/** The bank account status. */
var ShopifyPaymentsBankAccountStatus;
(function (ShopifyPaymentsBankAccountStatus) {
    /** A payout to the bank account failed. */
    ShopifyPaymentsBankAccountStatus["Errored"] = "ERRORED";
    /** A bank account that hasn't had any activity and that's not validated. */
    ShopifyPaymentsBankAccountStatus["New"] = "NEW";
    /** It was determined that the bank account exists. */
    ShopifyPaymentsBankAccountStatus["Validated"] = "VALIDATED";
    /** Bank account validation was successful. */
    ShopifyPaymentsBankAccountStatus["Verified"] = "VERIFIED";
})(ShopifyPaymentsBankAccountStatus = exports.ShopifyPaymentsBankAccountStatus || (exports.ShopifyPaymentsBankAccountStatus = {}));
/** The possible dispute evidence file types. */
var ShopifyPaymentsDisputeEvidenceFileType;
(function (ShopifyPaymentsDisputeEvidenceFileType) {
    /** Cancellation Policy File. */
    ShopifyPaymentsDisputeEvidenceFileType["CancellationPolicyFile"] = "CANCELLATION_POLICY_FILE";
    /** Customer Communication File. */
    ShopifyPaymentsDisputeEvidenceFileType["CustomerCommunicationFile"] = "CUSTOMER_COMMUNICATION_FILE";
    /** Refund Policy File. */
    ShopifyPaymentsDisputeEvidenceFileType["RefundPolicyFile"] = "REFUND_POLICY_FILE";
    /** Service Documentation File. */
    ShopifyPaymentsDisputeEvidenceFileType["ServiceDocumentationFile"] = "SERVICE_DOCUMENTATION_FILE";
    /** Shipping Documentation File. */
    ShopifyPaymentsDisputeEvidenceFileType["ShippingDocumentationFile"] = "SHIPPING_DOCUMENTATION_FILE";
    /** Uncategorized File. */
    ShopifyPaymentsDisputeEvidenceFileType["UncategorizedFile"] = "UNCATEGORIZED_FILE";
})(ShopifyPaymentsDisputeEvidenceFileType = exports.ShopifyPaymentsDisputeEvidenceFileType || (exports.ShopifyPaymentsDisputeEvidenceFileType = {}));
/** The reason for the dispute provided by the cardholder's bank. */
var ShopifyPaymentsDisputeReason;
(function (ShopifyPaymentsDisputeReason) {
    /** The customer's bank can't process the charge. */
    ShopifyPaymentsDisputeReason["BankCannotProcess"] = "BANK_CANNOT_PROCESS";
    /** The customer claims that the purchased product was returned or the transaction was otherwise canceled, but you haven't yet provided a refund or credit. */
    ShopifyPaymentsDisputeReason["CreditNotProcessed"] = "CREDIT_NOT_PROCESSED";
    /** The customer initiated the dispute. Contact the customer for additional details on why the payment was disputed. */
    ShopifyPaymentsDisputeReason["CustomerInitiated"] = "CUSTOMER_INITIATED";
    /** The customer's bank can't proceed with the debit since it hasn't been authorized. */
    ShopifyPaymentsDisputeReason["DebitNotAuthorized"] = "DEBIT_NOT_AUTHORIZED";
    /** The customer claims they were charged multiple times for the same product or service. */
    ShopifyPaymentsDisputeReason["Duplicate"] = "DUPLICATE";
    /** The cardholder claims that they didn’t authorize the payment. */
    ShopifyPaymentsDisputeReason["Fraudulent"] = "FRAUDULENT";
    /** The dispute is uncategorized, so you should contact the customer for additional details to find out why the payment was disputed. */
    ShopifyPaymentsDisputeReason["General"] = "GENERAL";
    /** The customer account associated with the purchase is incorrect. */
    ShopifyPaymentsDisputeReason["IncorrectAccountDetails"] = "INCORRECT_ACCOUNT_DETAILS";
    /** The customer's bank account has insufficient funds. */
    ShopifyPaymentsDisputeReason["InsufficientFunds"] = "INSUFFICIENT_FUNDS";
    /** The customer claims they did not receive the products or services purchased. */
    ShopifyPaymentsDisputeReason["ProductNotReceived"] = "PRODUCT_NOT_RECEIVED";
    /** The product or service was received but was defective, damaged, or not as described. */
    ShopifyPaymentsDisputeReason["ProductUnacceptable"] = "PRODUCT_UNACCEPTABLE";
    /** The customer claims that you continued to charge them after a subscription was canceled. */
    ShopifyPaymentsDisputeReason["SubscriptionCancelled"] = "SUBSCRIPTION_CANCELLED";
    /** The customer doesn’t recognize the payment appearing on their card statement. */
    ShopifyPaymentsDisputeReason["Unrecognized"] = "UNRECOGNIZED";
})(ShopifyPaymentsDisputeReason = exports.ShopifyPaymentsDisputeReason || (exports.ShopifyPaymentsDisputeReason = {}));
/** The interval at which payouts are sent to the connected bank account. */
var ShopifyPaymentsPayoutInterval;
(function (ShopifyPaymentsPayoutInterval) {
    /** Each business day. */
    ShopifyPaymentsPayoutInterval["Daily"] = "DAILY";
    /** Payouts will not be automatically made. */
    ShopifyPaymentsPayoutInterval["Manual"] = "MANUAL";
    /** Each month, on the day of month specified by monthlyAnchor. */
    ShopifyPaymentsPayoutInterval["Monthly"] = "MONTHLY";
    /** Each week, on the day of week specified by weeklyAnchor. */
    ShopifyPaymentsPayoutInterval["Weekly"] = "WEEKLY";
})(ShopifyPaymentsPayoutInterval = exports.ShopifyPaymentsPayoutInterval || (exports.ShopifyPaymentsPayoutInterval = {}));
/** The transfer status of the payout. */
var ShopifyPaymentsPayoutStatus;
(function (ShopifyPaymentsPayoutStatus) {
    /** The payout has been canceled by Shopify. */
    ShopifyPaymentsPayoutStatus["Canceled"] = "CANCELED";
    /** The payout has been declined by the bank. */
    ShopifyPaymentsPayoutStatus["Failed"] = "FAILED";
    /** The payout has been submitted to the bank. */
    ShopifyPaymentsPayoutStatus["InTransit"] = "IN_TRANSIT";
    /** The payout has been successfully deposited into the bank. */
    ShopifyPaymentsPayoutStatus["Paid"] = "PAID";
    /**
     * The payout has been created and had transactions assigned to it, but
     * it has not yet been submitted to the bank.
     *
     */
    ShopifyPaymentsPayoutStatus["Scheduled"] = "SCHEDULED";
})(ShopifyPaymentsPayoutStatus = exports.ShopifyPaymentsPayoutStatus || (exports.ShopifyPaymentsPayoutStatus = {}));
/** The possible transaction types for a payout. */
var ShopifyPaymentsPayoutTransactionType;
(function (ShopifyPaymentsPayoutTransactionType) {
    /** The payout is a deposit. */
    ShopifyPaymentsPayoutTransactionType["Deposit"] = "DEPOSIT";
    /** The payout is a withdrawal. */
    ShopifyPaymentsPayoutTransactionType["Withdrawal"] = "WITHDRAWAL";
})(ShopifyPaymentsPayoutTransactionType = exports.ShopifyPaymentsPayoutTransactionType || (exports.ShopifyPaymentsPayoutTransactionType = {}));
/** The types of possible verification documents. */
var ShopifyPaymentsVerificationDocumentType;
(function (ShopifyPaymentsVerificationDocumentType) {
    /** The subject's driver's license. */
    ShopifyPaymentsVerificationDocumentType["DriversLicense"] = "DRIVERS_LICENSE";
    /** A government's identification document of the subject. */
    ShopifyPaymentsVerificationDocumentType["GovernmentIdentification"] = "GOVERNMENT_IDENTIFICATION";
    /** The subject's passport. */
    ShopifyPaymentsVerificationDocumentType["Passport"] = "PASSPORT";
})(ShopifyPaymentsVerificationDocumentType = exports.ShopifyPaymentsVerificationDocumentType || (exports.ShopifyPaymentsVerificationDocumentType = {}));
/** The status of a verification. */
var ShopifyPaymentsVerificationStatus;
(function (ShopifyPaymentsVerificationStatus) {
    /** The verification request has been submitted but a response has not yet been given. */
    ShopifyPaymentsVerificationStatus["Pending"] = "PENDING";
    /** The verification has not yet been verified. */
    ShopifyPaymentsVerificationStatus["Unverified"] = "UNVERIFIED";
    /** The verification has been verified. */
    ShopifyPaymentsVerificationStatus["Verified"] = "VERIFIED";
})(ShopifyPaymentsVerificationStatus = exports.ShopifyPaymentsVerificationStatus || (exports.ShopifyPaymentsVerificationStatus = {}));
/** Represents the fallback avatar image for a staff member. This is used only if the staff member has no avatar image. */
var StaffMemberDefaultImage;
(function (StaffMemberDefaultImage) {
    /** Returns a default avatar image for the staff member. */
    StaffMemberDefaultImage["Default"] = "DEFAULT";
    /** Returns a URL that returns a 404 error if the image is not present. */
    StaffMemberDefaultImage["NotFound"] = "NOT_FOUND";
    /** Returns a transparent avatar image for the staff member. */
    StaffMemberDefaultImage["Transparent"] = "TRANSPARENT";
})(StaffMemberDefaultImage = exports.StaffMemberDefaultImage || (exports.StaffMemberDefaultImage = {}));
/** Represents access permissions for a staff member. */
var StaffMemberPermission;
(function (StaffMemberPermission) {
    /** The staff member can manage and install apps and channels. */
    StaffMemberPermission["Applications"] = "APPLICATIONS";
    /** The staff member can manage and install sales channels. */
    StaffMemberPermission["Channels"] = "CHANNELS";
    /** The staff member can view, create, update, and delete customers, and respond to customer messages in the Shopify Messaging API. */
    StaffMemberPermission["Customers"] = "CUSTOMERS";
    /** The staff member can view the Shopify Home page, which includes sales information and other shop data. */
    StaffMemberPermission["Dashboard"] = "DASHBOARD";
    /** The staff member can view, buy, and manage domains. */
    StaffMemberPermission["Domains"] = "DOMAINS";
    /** The staff member can create, update, and delete draft orders. */
    StaffMemberPermission["DraftOrders"] = "DRAFT_ORDERS";
    /** The staff member can update orders. */
    StaffMemberPermission["EditOrders"] = "EDIT_ORDERS";
    /**
     * The staff has the same permissions as the [store owner](https://shopify.dev/en/manual/your-account/staff-accounts/staff-permissions#store-owner-permissions) with some exceptions, such as modifying the account billing or deleting staff accounts.
     * @deprecated Use the list of the staff member's explicit permissions returned in the `StaffMember.permissions.userPermissions` field instead of `full` permission.
     */
    StaffMemberPermission["Full"] = "FULL";
    /** The staff member can view, create, issue, and export gift cards to a CSV file. */
    StaffMemberPermission["GiftCards"] = "GIFT_CARDS";
    /** The staff member can view and modify links and navigation menus. */
    StaffMemberPermission["Links"] = "LINKS";
    /** The staff member can create, update, and delete locations where inventory is stocked or managed. */
    StaffMemberPermission["Locations"] = "LOCATIONS";
    /** The staff member can view and create discount codes and automatic discounts, and export discounts to a CSV file. */
    StaffMemberPermission["Marketing"] = "MARKETING";
    /** The staff member can view, create, and automate marketing campaigns. */
    StaffMemberPermission["MarketingSection"] = "MARKETING_SECTION";
    /** The staff member can view, create, update, delete, and cancel orders, and receive order notifications. The staff member can still create draft orders without this permission. */
    StaffMemberPermission["Orders"] = "ORDERS";
    /**
     * The staff member can view the Overview and Live view pages,
     *             which include sales information, and other shop and sales channels data.
     */
    StaffMemberPermission["Overviews"] = "OVERVIEWS";
    /** The staff member can view, create, update, publish, and delete blog posts and pages. */
    StaffMemberPermission["Pages"] = "PAGES";
    /** The staff member can pay for an order by using a vaulted card. */
    StaffMemberPermission["PayOrdersByVaultedCard"] = "PAY_ORDERS_BY_VAULTED_CARD";
    /** The staff member can view the preferences and configuration of a shop. */
    StaffMemberPermission["Preferences"] = "PREFERENCES";
    /** The staff member can view, create, import, and update products, collections, and inventory. */
    StaffMemberPermission["Products"] = "PRODUCTS";
    /** The staff member can view and create all reports, which includes sales information and other shop data. */
    StaffMemberPermission["Reports"] = "REPORTS";
    /** The staff member can view, update, and publish themes. */
    StaffMemberPermission["Themes"] = "THEMES";
    /**
     * The staff member can view and create translations.
     * @deprecated Unused.
     */
    StaffMemberPermission["Translations"] = "TRANSLATIONS";
})(StaffMemberPermission = exports.StaffMemberPermission || (exports.StaffMemberPermission = {}));
/**
 * The possible HTTP methods that can be used when sending a request to upload a file using information from a
 * [StagedMediaUploadTarget](https://shopify.dev/api/admin-graphql/latest/objects/StagedMediaUploadTarget).
 *
 */
var StagedUploadHttpMethodType;
(function (StagedUploadHttpMethodType) {
    /** The POST HTTP method. */
    StagedUploadHttpMethodType["Post"] = "POST";
    /** The PUT HTTP method. */
    StagedUploadHttpMethodType["Put"] = "PUT";
})(StagedUploadHttpMethodType = exports.StagedUploadHttpMethodType || (exports.StagedUploadHttpMethodType = {}));
/** The resource type to receive. */
var StagedUploadTargetGenerateUploadResource;
(function (StagedUploadTargetGenerateUploadResource) {
    /**
     * Represents bulk mutation variables.
     *
     * For example, bulk mutation variables can be used for bulk operations using the
     * [bulkOperationRunMutation mutation](https://shopify.dev/api/admin-graphql/latest/mutations/bulkOperationRunMutation).
     *
     */
    StagedUploadTargetGenerateUploadResource["BulkMutationVariables"] = "BULK_MUTATION_VARIABLES";
    /**
     * An image associated with a collection.
     *
     * For example, after uploading an image, you can use the
     * [collectionUpdate mutation](https://shopify.dev/api/admin-graphql/latest/mutations/collectionUpdate)
     * to add the image to a collection.
     *
     */
    StagedUploadTargetGenerateUploadResource["CollectionImage"] = "COLLECTION_IMAGE";
    /**
     * Represents any file other than HTML.
     *
     * For example, after uploading the file, you can add the file to the
     * [Files page](https://shopify.com/admin/settings/files) in Shopify admin using the
     * [fileCreate mutation](https://shopify.dev/api/admin-graphql/latest/mutations/fileCreate).
     *
     */
    StagedUploadTargetGenerateUploadResource["File"] = "FILE";
    /**
     * An image.
     *
     * For example, after uploading an image, you can add the image to a product using the
     * [productCreateMedia mutation](https://shopify.dev/api/admin-graphql/latest/mutations/productCreateMedia)
     * or to the [Files page](https://shopify.com/admin/settings/files) in Shopify admin using the
     * [fileCreate mutation](https://shopify.dev/api/admin-graphql/latest/mutations/fileCreate).
     *
     */
    StagedUploadTargetGenerateUploadResource["Image"] = "IMAGE";
    /**
     * A Shopify hosted 3d model.
     *
     * For example, after uploading the 3d model, you can add the 3d model to a product using the
     * [productCreateMedia mutation](https://shopify.dev/api/admin-graphql/latest/mutations/productCreateMedia).
     *
     */
    StagedUploadTargetGenerateUploadResource["Model_3D"] = "MODEL_3D";
    /**
     * An image that's associated with a product.
     *
     * For example, after uploading the image, you can add the image to a product using the
     * [productCreateMedia mutation](https://shopify.dev/api/admin-graphql/latest/mutations/productCreateMedia).
     *
     */
    StagedUploadTargetGenerateUploadResource["ProductImage"] = "PRODUCT_IMAGE";
    /**
     * An image.
     *
     * For example, after uploading the image, you can add the image to the
     * [Files page](https://shopify.com/admin/settings/files) in Shopify admin using the
     * [fileCreate mutation](https://shopify.dev/api/admin-graphql/latest/mutations/fileCreate).
     *
     */
    StagedUploadTargetGenerateUploadResource["ShopImage"] = "SHOP_IMAGE";
    /**
     * Represents a redirect CSV file.
     *
     * Example usage: This resource can be used for creating a
     * [UrlRedirectImport](https://shopify.dev/api/admin-graphql/2022-04/objects/UrlRedirectImport)
     * object for use in the
     * [urlRedirectImportCreate mutation](https://shopify.dev/api/admin-graphql/latest/mutations/urlRedirectImportCreate).
     *
     */
    StagedUploadTargetGenerateUploadResource["UrlRedirectImport"] = "URL_REDIRECT_IMPORT";
    /**
     * A Shopify-hosted video.
     *
     * For example, after uploading the video, you can add the video to a product using the
     * [productCreateMedia mutation](https://shopify.dev/api/admin-graphql/latest/mutations/productCreateMedia)
     * or to the [Files page](https://shopify.com/admin/settings/files) in Shopify admin using the
     * [fileCreate mutation](https://shopify.dev/api/admin-graphql/latest/mutations/fileCreate).
     *
     */
    StagedUploadTargetGenerateUploadResource["Video"] = "VIDEO";
})(StagedUploadTargetGenerateUploadResource = exports.StagedUploadTargetGenerateUploadResource || (exports.StagedUploadTargetGenerateUploadResource = {}));
/** Possible error codes that can be returned by `StandardMetafieldDefinitionEnableUserError`. */
var StandardMetafieldDefinitionEnableUserErrorCode;
(function (StandardMetafieldDefinitionEnableUserErrorCode) {
    /** The input value is invalid. */
    StandardMetafieldDefinitionEnableUserErrorCode["Invalid"] = "INVALID";
    /** The maximum number of definitions per owner type has been exceeded. */
    StandardMetafieldDefinitionEnableUserErrorCode["LimitExceeded"] = "LIMIT_EXCEEDED";
    /** The input value is already taken. */
    StandardMetafieldDefinitionEnableUserErrorCode["Taken"] = "TAKEN";
    /** The standard metafield definition template was not found. */
    StandardMetafieldDefinitionEnableUserErrorCode["TemplateNotFound"] = "TEMPLATE_NOT_FOUND";
    /** The namespace and key is already in use for a set of your metafields. */
    StandardMetafieldDefinitionEnableUserErrorCode["UnstructuredAlreadyExists"] = "UNSTRUCTURED_ALREADY_EXISTS";
})(StandardMetafieldDefinitionEnableUserErrorCode = exports.StandardMetafieldDefinitionEnableUserErrorCode || (exports.StandardMetafieldDefinitionEnableUserErrorCode = {}));
/**
 * The possible error codes associated with making billing attempts. The error codes supplement the
 * `error_message` to provide consistent results and help with dunning management.
 *
 */
var SubscriptionBillingAttemptErrorCode;
(function (SubscriptionBillingAttemptErrorCode) {
    /** The amount is too small. */
    SubscriptionBillingAttemptErrorCode["AmountTooSmall"] = "AMOUNT_TOO_SMALL";
    /**
     * There was an error during the authentication.
     *
     */
    SubscriptionBillingAttemptErrorCode["AuthenticationError"] = "AUTHENTICATION_ERROR";
    /** Payment method was canceled by buyer. */
    SubscriptionBillingAttemptErrorCode["BuyerCanceledPaymentMethod"] = "BUYER_CANCELED_PAYMENT_METHOD";
    /** Customer is invalid. */
    SubscriptionBillingAttemptErrorCode["CustomerInvalid"] = "CUSTOMER_INVALID";
    /** Customer was not found. */
    SubscriptionBillingAttemptErrorCode["CustomerNotFound"] = "CUSTOMER_NOT_FOUND";
    /**
     * Payment method is expired.
     *
     */
    SubscriptionBillingAttemptErrorCode["ExpiredPaymentMethod"] = "EXPIRED_PAYMENT_METHOD";
    /** The billing agreement ID or the transaction ID for the customer's payment method is invalid. */
    SubscriptionBillingAttemptErrorCode["InvalidCustomerBillingAgreement"] = "INVALID_CUSTOMER_BILLING_AGREEMENT";
    /**
     * Payment method is invalid. Please update or create a new payment method.
     *
     */
    SubscriptionBillingAttemptErrorCode["InvalidPaymentMethod"] = "INVALID_PAYMENT_METHOD";
    /** The shipping address is either missing or invalid. */
    SubscriptionBillingAttemptErrorCode["InvalidShippingAddress"] = "INVALID_SHIPPING_ADDRESS";
    /** A payment has already been made for this invoice. */
    SubscriptionBillingAttemptErrorCode["InvoiceAlreadyPaid"] = "INVOICE_ALREADY_PAID";
    /**
     * Payment method was declined by processor.
     *
     */
    SubscriptionBillingAttemptErrorCode["PaymentMethodDeclined"] = "PAYMENT_METHOD_DECLINED";
    /** Payment method cannot be used with the current payment gateway test mode configuration. */
    SubscriptionBillingAttemptErrorCode["PaymentMethodIncompatibleWithGatewayConfig"] = "PAYMENT_METHOD_INCOMPATIBLE_WITH_GATEWAY_CONFIG";
    /**
     * Payment method was not found.
     *
     */
    SubscriptionBillingAttemptErrorCode["PaymentMethodNotFound"] = "PAYMENT_METHOD_NOT_FOUND";
    /**
     * Payment provider is not enabled.
     *
     */
    SubscriptionBillingAttemptErrorCode["PaymentProviderIsNotEnabled"] = "PAYMENT_PROVIDER_IS_NOT_ENABLED";
    /**
     * Gateway is in test mode and attempted to bill a live payment method.
     *
     */
    SubscriptionBillingAttemptErrorCode["TestMode"] = "TEST_MODE";
    /**
     * There was an unexpected error during the billing attempt.
     *
     */
    SubscriptionBillingAttemptErrorCode["UnexpectedError"] = "UNEXPECTED_ERROR";
})(SubscriptionBillingAttemptErrorCode = exports.SubscriptionBillingAttemptErrorCode || (exports.SubscriptionBillingAttemptErrorCode = {}));
/** The possible status values of a subscription billing cycle. */
var SubscriptionBillingCycleBillingCycleStatus;
(function (SubscriptionBillingCycleBillingCycleStatus) {
    /** The billing cycle is billed. */
    SubscriptionBillingCycleBillingCycleStatus["Billed"] = "BILLED";
    /** The billing cycle hasn't been billed. */
    SubscriptionBillingCycleBillingCycleStatus["Unbilled"] = "UNBILLED";
})(SubscriptionBillingCycleBillingCycleStatus = exports.SubscriptionBillingCycleBillingCycleStatus || (exports.SubscriptionBillingCycleBillingCycleStatus = {}));
/** Possible error codes that can be returned by `SubscriptionBillingCycleUserError`. */
var SubscriptionBillingCycleErrorCode;
(function (SubscriptionBillingCycleErrorCode) {
    /** Billing date cannot be set on skipped billing cycle. */
    SubscriptionBillingCycleErrorCode["BillingDateSetOnSkipped"] = "BILLING_DATE_SET_ON_SKIPPED";
    /** Can't find the billing cycle. */
    SubscriptionBillingCycleErrorCode["CycleNotFound"] = "CYCLE_NOT_FOUND";
    /** Billing cycle schedule edit input provided is empty. Must take in parameters to modify schedule. */
    SubscriptionBillingCycleErrorCode["EmptyBillingCycleEditScheduleInput"] = "EMPTY_BILLING_CYCLE_EDIT_SCHEDULE_INPUT";
    /** The input value is invalid. */
    SubscriptionBillingCycleErrorCode["Invalid"] = "INVALID";
    /** The index selector is invalid. */
    SubscriptionBillingCycleErrorCode["InvalidCycleIndex"] = "INVALID_CYCLE_INDEX";
    /** The date selector is invalid. */
    SubscriptionBillingCycleErrorCode["InvalidDate"] = "INVALID_DATE";
    /** There's no contract or schedule edit associated with the targeted billing cycle(s). */
    SubscriptionBillingCycleErrorCode["NoCycleEdits"] = "NO_CYCLE_EDITS";
    /** Billing date of a cycle cannot be set to a value outside of its billing date range. */
    SubscriptionBillingCycleErrorCode["OutOfBounds"] = "OUT_OF_BOUNDS";
})(SubscriptionBillingCycleErrorCode = exports.SubscriptionBillingCycleErrorCode || (exports.SubscriptionBillingCycleErrorCode = {}));
/** Possible reasons for editing the billing cycle's schedule. */
var SubscriptionBillingCycleScheduleEditInputScheduleEditReason;
(function (SubscriptionBillingCycleScheduleEditInputScheduleEditReason) {
    /** Buyer initiated the schedule edit. */
    SubscriptionBillingCycleScheduleEditInputScheduleEditReason["BuyerInitiated"] = "BUYER_INITIATED";
    /** Developer initiated the schedule edit. */
    SubscriptionBillingCycleScheduleEditInputScheduleEditReason["DevInitiated"] = "DEV_INITIATED";
    /** Merchant initiated the schedule edit. */
    SubscriptionBillingCycleScheduleEditInputScheduleEditReason["MerchantInitiated"] = "MERCHANT_INITIATED";
})(SubscriptionBillingCycleScheduleEditInputScheduleEditReason = exports.SubscriptionBillingCycleScheduleEditInputScheduleEditReason || (exports.SubscriptionBillingCycleScheduleEditInputScheduleEditReason = {}));
/** The set of valid sort keys for the SubscriptionBillingCycles query. */
var SubscriptionBillingCyclesSortKeys;
(function (SubscriptionBillingCyclesSortKeys) {
    /** Sort by the `cycle_index` value. */
    SubscriptionBillingCyclesSortKeys["CycleIndex"] = "CYCLE_INDEX";
    /** Sort by the `id` value. */
    SubscriptionBillingCyclesSortKeys["Id"] = "ID";
    /**
     * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
     * Don't use this sort key when no search query is specified.
     *
     */
    SubscriptionBillingCyclesSortKeys["Relevance"] = "RELEVANCE";
})(SubscriptionBillingCyclesSortKeys = exports.SubscriptionBillingCyclesSortKeys || (exports.SubscriptionBillingCyclesSortKeys = {}));
/** Select subscription billing cycles to be targeted. */
var SubscriptionBillingCyclesTargetSelection;
(function (SubscriptionBillingCyclesTargetSelection) {
    /** Target all future subscription billing cycles. */
    SubscriptionBillingCyclesTargetSelection["All"] = "ALL";
})(SubscriptionBillingCyclesTargetSelection = exports.SubscriptionBillingCyclesTargetSelection || (exports.SubscriptionBillingCyclesTargetSelection = {}));
/** Possible error codes that can be returned by `SubscriptionContractUserError`. */
var SubscriptionContractErrorCode;
(function (SubscriptionContractErrorCode) {
    /** The input value is invalid. */
    SubscriptionContractErrorCode["Invalid"] = "INVALID";
})(SubscriptionContractErrorCode = exports.SubscriptionContractErrorCode || (exports.SubscriptionContractErrorCode = {}));
/** The possible status values of the last payment on a subscription contract. */
var SubscriptionContractLastPaymentStatus;
(function (SubscriptionContractLastPaymentStatus) {
    /** Failed subscription billing attempt. */
    SubscriptionContractLastPaymentStatus["Failed"] = "FAILED";
    /** Successful subscription billing attempt. */
    SubscriptionContractLastPaymentStatus["Succeeded"] = "SUCCEEDED";
})(SubscriptionContractLastPaymentStatus = exports.SubscriptionContractLastPaymentStatus || (exports.SubscriptionContractLastPaymentStatus = {}));
/** The possible status values of a subscription. */
var SubscriptionContractSubscriptionStatus;
(function (SubscriptionContractSubscriptionStatus) {
    /** The contract is active and continuing per its policies. */
    SubscriptionContractSubscriptionStatus["Active"] = "ACTIVE";
    /** The contract was ended by an unplanned customer action. */
    SubscriptionContractSubscriptionStatus["Cancelled"] = "CANCELLED";
    /** The contract has ended per the expected circumstances. All billing and deliverycycles of the subscriptions were executed. */
    SubscriptionContractSubscriptionStatus["Expired"] = "EXPIRED";
    /** The contract ended because billing failed and no further billing attempts are expected. */
    SubscriptionContractSubscriptionStatus["Failed"] = "FAILED";
    /** The contract is temporarily paused and is expected to resume in the future. */
    SubscriptionContractSubscriptionStatus["Paused"] = "PAUSED";
})(SubscriptionContractSubscriptionStatus = exports.SubscriptionContractSubscriptionStatus || (exports.SubscriptionContractSubscriptionStatus = {}));
/** The reason a discount on a subscription draft was rejected. */
var SubscriptionDiscountRejectionReason;
(function (SubscriptionDiscountRejectionReason) {
    /** Discount is inactive. */
    SubscriptionDiscountRejectionReason["CurrentlyInactive"] = "CURRENTLY_INACTIVE";
    /** Given customer does not qualify for the discount. */
    SubscriptionDiscountRejectionReason["CustomerNotEligible"] = "CUSTOMER_NOT_ELIGIBLE";
    /** Customer usage limit has been reached. */
    SubscriptionDiscountRejectionReason["CustomerUsageLimitReached"] = "CUSTOMER_USAGE_LIMIT_REACHED";
    /** Purchase type does not qualify for the discount. */
    SubscriptionDiscountRejectionReason["IncompatiblePurchaseType"] = "INCOMPATIBLE_PURCHASE_TYPE";
    /** Internal error during discount code validation. */
    SubscriptionDiscountRejectionReason["InternalError"] = "INTERNAL_ERROR";
    /** Discount code is not found. */
    SubscriptionDiscountRejectionReason["NotFound"] = "NOT_FOUND";
    /** Discount does not apply to any of the given line items. */
    SubscriptionDiscountRejectionReason["NoEntitledLineItems"] = "NO_ENTITLED_LINE_ITEMS";
    /** No applicable shipping lines. */
    SubscriptionDiscountRejectionReason["NoEntitledShippingLines"] = "NO_ENTITLED_SHIPPING_LINES";
    /** Purchase amount of items does not qualify for the discount. */
    SubscriptionDiscountRejectionReason["PurchaseNotInRange"] = "PURCHASE_NOT_IN_RANGE";
    /** Quantity of items does not qualify for the discount. */
    SubscriptionDiscountRejectionReason["QuantityNotInRange"] = "QUANTITY_NOT_IN_RANGE";
    /** Discount usage limit has been reached. */
    SubscriptionDiscountRejectionReason["UsageLimitReached"] = "USAGE_LIMIT_REACHED";
})(SubscriptionDiscountRejectionReason = exports.SubscriptionDiscountRejectionReason || (exports.SubscriptionDiscountRejectionReason = {}));
/** Possible error codes that can be returned by `SubscriptionDraftUserError`. */
var SubscriptionDraftErrorCode;
(function (SubscriptionDraftErrorCode) {
    /** This line has already been removed. */
    SubscriptionDraftErrorCode["AlreadyRemoved"] = "ALREADY_REMOVED";
    /** Cannot commit a contract draft with this mutation. Please use SubscriptionDraftCommit. */
    SubscriptionDraftErrorCode["BillingCycleAbsent"] = "BILLING_CYCLE_ABSENT";
    /** Billing policy cannot be updated for billing cycle contract drafts. */
    SubscriptionDraftErrorCode["BillingCycleContractDraftBillingPolicyInvalid"] = "BILLING_CYCLE_CONTRACT_DRAFT_BILLING_POLICY_INVALID";
    /** Delivery policy cannot be updated for billing cycle contract drafts. */
    SubscriptionDraftErrorCode["BillingCycleContractDraftDeliveryPolicyInvalid"] = "BILLING_CYCLE_CONTRACT_DRAFT_DELIVERY_POLICY_INVALID";
    /** Cannot commit a billing cycle contract draft with this mutation. Please use SubscriptionBillingCycleContractDraftCommit. */
    SubscriptionDraftErrorCode["BillingCyclePresent"] = "BILLING_CYCLE_PRESENT";
    /** The input value is blank. */
    SubscriptionDraftErrorCode["Blank"] = "BLANK";
    /** Subscription draft has been already committed. */
    SubscriptionDraftErrorCode["Committed"] = "COMMITTED";
    /** Contract draft must be a billing cycle contract draft for contract concatenation. */
    SubscriptionDraftErrorCode["ConcatenationBillingCycleContractDraftRequired"] = "CONCATENATION_BILLING_CYCLE_CONTRACT_DRAFT_REQUIRED";
    /** Currency is not enabled. */
    SubscriptionDraftErrorCode["CurrencyNotEnabled"] = "CURRENCY_NOT_ENABLED";
    /** The customer doesn't exist. */
    SubscriptionDraftErrorCode["CustomerDoesNotExist"] = "CUSTOMER_DOES_NOT_EXIST";
    /** The payment method customer must be the same as the contract customer. */
    SubscriptionDraftErrorCode["CustomerMismatch"] = "CUSTOMER_MISMATCH";
    /** The after cycle attribute must be unique between cycle discounts. */
    SubscriptionDraftErrorCode["CycleDiscountsUniqueAfterCycle"] = "CYCLE_DISCOUNTS_UNIQUE_AFTER_CYCLE";
    /** Billing cycle selector cannot select billing cycle outside of index range. */
    SubscriptionDraftErrorCode["CycleIndexOutOfRange"] = "CYCLE_INDEX_OUT_OF_RANGE";
    /** Billing cycle selector requires exactly one of index or date to be provided. */
    SubscriptionDraftErrorCode["CycleSelectorValidateOneOf"] = "CYCLE_SELECTOR_VALIDATE_ONE_OF";
    /** Billing cycle selector cannot select billing cycle outside of start date range. */
    SubscriptionDraftErrorCode["CycleStartDateOutOfRange"] = "CYCLE_START_DATE_OUT_OF_RANGE";
    /** The delivery method can't be blank if any lines require shipping. */
    SubscriptionDraftErrorCode["DeliveryMethodRequired"] = "DELIVERY_METHOD_REQUIRED";
    /** The delivery policy interval must be a multiple of the billing policy interval. */
    SubscriptionDraftErrorCode["DeliveryMustBeMultipleOfBilling"] = "DELIVERY_MUST_BE_MULTIPLE_OF_BILLING";
    /** Concatenated contracts cannot contain duplicate subscription contracts. */
    SubscriptionDraftErrorCode["DuplicateConcatenatedContracts"] = "DUPLICATE_CONCATENATED_CONTRACTS";
    /** Maximum number of concatenated contracts on a billing cycle contract draft exceeded. */
    SubscriptionDraftErrorCode["ExceededMaxConcatenatedContracts"] = "EXCEEDED_MAX_CONCATENATED_CONTRACTS";
    /** The input value should be greater than the minimum allowed value. */
    SubscriptionDraftErrorCode["GreaterThan"] = "GREATER_THAN";
    /** The input value should be greater than or equal to the minimum value allowed. */
    SubscriptionDraftErrorCode["GreaterThanOrEqualTo"] = "GREATER_THAN_OR_EQUAL_TO";
    /** Cannot update a subscription contract with a future contract or schedule edit. */
    SubscriptionDraftErrorCode["HasFutureEdits"] = "HAS_FUTURE_EDITS";
    /** The input value is invalid. */
    SubscriptionDraftErrorCode["Invalid"] = "INVALID";
    /** The adjustment value must the same type as the adjustment type. */
    SubscriptionDraftErrorCode["InvalidAdjustmentType"] = "INVALID_ADJUSTMENT_TYPE";
    /** The adjustment value must be either fixed_value or percentage. */
    SubscriptionDraftErrorCode["InvalidAdjustmentValue"] = "INVALID_ADJUSTMENT_VALUE";
    /** Next billing date is invalid. */
    SubscriptionDraftErrorCode["InvalidBillingDate"] = "INVALID_BILLING_DATE";
    /** Must have at least one line. */
    SubscriptionDraftErrorCode["InvalidLines"] = "INVALID_LINES";
    /** Note length is too long. */
    SubscriptionDraftErrorCode["InvalidNoteLength"] = "INVALID_NOTE_LENGTH";
    /** The input value should be less than the maximum value allowed. */
    SubscriptionDraftErrorCode["LessThan"] = "LESS_THAN";
    /** The input value should be less than or equal to the maximum value allowed. */
    SubscriptionDraftErrorCode["LessThanOrEqualTo"] = "LESS_THAN_OR_EQUAL_TO";
    /** The value is not an integer. */
    SubscriptionDraftErrorCode["NotAnInteger"] = "NOT_AN_INTEGER";
    /** Value is not in range. */
    SubscriptionDraftErrorCode["NotInRange"] = "NOT_IN_RANGE";
    /** Discount must have at least one entitled line. */
    SubscriptionDraftErrorCode["NoEntitledLines"] = "NO_ENTITLED_LINES";
    /** Input value is not present. */
    SubscriptionDraftErrorCode["Presence"] = "PRESENCE";
    /** The maximum number of cycles must be greater than the minimum. */
    SubscriptionDraftErrorCode["SellingPlanMaxCyclesMustBeGreaterThanMinCycles"] = "SELLING_PLAN_MAX_CYCLES_MUST_BE_GREATER_THAN_MIN_CYCLES";
    /** Another operation updated the contract concurrently as the commit was in progress. */
    SubscriptionDraftErrorCode["StaleContract"] = "STALE_CONTRACT";
    /** The input value is too long. */
    SubscriptionDraftErrorCode["TooLong"] = "TOO_LONG";
    /** The input value is too short. */
    SubscriptionDraftErrorCode["TooShort"] = "TOO_SHORT";
    /** Billing cycle selector cannot select upcoming billing cycle past limit. */
    SubscriptionDraftErrorCode["UpcomingCycleLimitExceeded"] = "UPCOMING_CYCLE_LIMIT_EXCEEDED";
})(SubscriptionDraftErrorCode = exports.SubscriptionDraftErrorCode || (exports.SubscriptionDraftErrorCode = {}));
/** Specifies the kind of the suggested order transaction. */
var SuggestedOrderTransactionKind;
(function (SuggestedOrderTransactionKind) {
    /** A suggested refund transaction for an order. */
    SuggestedOrderTransactionKind["SuggestedRefund"] = "SUGGESTED_REFUND";
})(SuggestedOrderTransactionKind = exports.SuggestedOrderTransactionKind || (exports.SuggestedOrderTransactionKind = {}));
/** Available customer tax exemptions. */
var TaxExemption;
(function (TaxExemption) {
    /** This customer is exempt from specific taxes for holding a valid COMMERCIAL_FISHERY_EXEMPTION in British Columbia. */
    TaxExemption["CaBcCommercialFisheryExemption"] = "CA_BC_COMMERCIAL_FISHERY_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid CONTRACTOR_EXEMPTION in British Columbia. */
    TaxExemption["CaBcContractorExemption"] = "CA_BC_CONTRACTOR_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid PRODUCTION_AND_MACHINERY_EXEMPTION in British Columbia. */
    TaxExemption["CaBcProductionAndMachineryExemption"] = "CA_BC_PRODUCTION_AND_MACHINERY_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in British Columbia. */
    TaxExemption["CaBcResellerExemption"] = "CA_BC_RESELLER_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid SUB_CONTRACTOR_EXEMPTION in British Columbia. */
    TaxExemption["CaBcSubContractorExemption"] = "CA_BC_SUB_CONTRACTOR_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid DIPLOMAT_EXEMPTION in Canada. */
    TaxExemption["CaDiplomatExemption"] = "CA_DIPLOMAT_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid COMMERCIAL_FISHERY_EXEMPTION in Manitoba. */
    TaxExemption["CaMbCommercialFisheryExemption"] = "CA_MB_COMMERCIAL_FISHERY_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid FARMER_EXEMPTION in Manitoba. */
    TaxExemption["CaMbFarmerExemption"] = "CA_MB_FARMER_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Manitoba. */
    TaxExemption["CaMbResellerExemption"] = "CA_MB_RESELLER_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid COMMERCIAL_FISHERY_EXEMPTION in Nova Scotia. */
    TaxExemption["CaNsCommercialFisheryExemption"] = "CA_NS_COMMERCIAL_FISHERY_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid FARMER_EXEMPTION in Nova Scotia. */
    TaxExemption["CaNsFarmerExemption"] = "CA_NS_FARMER_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid PURCHASE_EXEMPTION in Ontario. */
    TaxExemption["CaOnPurchaseExemption"] = "CA_ON_PURCHASE_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid COMMERCIAL_FISHERY_EXEMPTION in Prince Edward Island. */
    TaxExemption["CaPeCommercialFisheryExemption"] = "CA_PE_COMMERCIAL_FISHERY_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid COMMERCIAL_FISHERY_EXEMPTION in Saskatchewan. */
    TaxExemption["CaSkCommercialFisheryExemption"] = "CA_SK_COMMERCIAL_FISHERY_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid CONTRACTOR_EXEMPTION in Saskatchewan. */
    TaxExemption["CaSkContractorExemption"] = "CA_SK_CONTRACTOR_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid FARMER_EXEMPTION in Saskatchewan. */
    TaxExemption["CaSkFarmerExemption"] = "CA_SK_FARMER_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid PRODUCTION_AND_MACHINERY_EXEMPTION in Saskatchewan. */
    TaxExemption["CaSkProductionAndMachineryExemption"] = "CA_SK_PRODUCTION_AND_MACHINERY_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Saskatchewan. */
    TaxExemption["CaSkResellerExemption"] = "CA_SK_RESELLER_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid SUB_CONTRACTOR_EXEMPTION in Saskatchewan. */
    TaxExemption["CaSkSubContractorExemption"] = "CA_SK_SUB_CONTRACTOR_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid STATUS_CARD_EXEMPTION in Canada. */
    TaxExemption["CaStatusCardExemption"] = "CA_STATUS_CARD_EXEMPTION";
    /** This customer is exempt from VAT for purchases within the EU that is shipping from outside of customer's country. */
    TaxExemption["EuReverseChargeExemptionRule"] = "EU_REVERSE_CHARGE_EXEMPTION_RULE";
    /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Alaska. */
    TaxExemption["UsAkResellerExemption"] = "US_AK_RESELLER_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Alabama. */
    TaxExemption["UsAlResellerExemption"] = "US_AL_RESELLER_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Arkansas. */
    TaxExemption["UsArResellerExemption"] = "US_AR_RESELLER_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Arizona. */
    TaxExemption["UsAzResellerExemption"] = "US_AZ_RESELLER_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in California. */
    TaxExemption["UsCaResellerExemption"] = "US_CA_RESELLER_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Colorado. */
    TaxExemption["UsCoResellerExemption"] = "US_CO_RESELLER_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Connecticut. */
    TaxExemption["UsCtResellerExemption"] = "US_CT_RESELLER_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Washington DC. */
    TaxExemption["UsDcResellerExemption"] = "US_DC_RESELLER_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Delaware. */
    TaxExemption["UsDeResellerExemption"] = "US_DE_RESELLER_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Florida. */
    TaxExemption["UsFlResellerExemption"] = "US_FL_RESELLER_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Georgia. */
    TaxExemption["UsGaResellerExemption"] = "US_GA_RESELLER_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Hawaii. */
    TaxExemption["UsHiResellerExemption"] = "US_HI_RESELLER_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Iowa. */
    TaxExemption["UsIaResellerExemption"] = "US_IA_RESELLER_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Idaho. */
    TaxExemption["UsIdResellerExemption"] = "US_ID_RESELLER_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Illinois. */
    TaxExemption["UsIlResellerExemption"] = "US_IL_RESELLER_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Indiana. */
    TaxExemption["UsInResellerExemption"] = "US_IN_RESELLER_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Kansas. */
    TaxExemption["UsKsResellerExemption"] = "US_KS_RESELLER_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Kentucky. */
    TaxExemption["UsKyResellerExemption"] = "US_KY_RESELLER_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Louisiana. */
    TaxExemption["UsLaResellerExemption"] = "US_LA_RESELLER_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Massachusetts. */
    TaxExemption["UsMaResellerExemption"] = "US_MA_RESELLER_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Maryland. */
    TaxExemption["UsMdResellerExemption"] = "US_MD_RESELLER_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Maine. */
    TaxExemption["UsMeResellerExemption"] = "US_ME_RESELLER_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Michigan. */
    TaxExemption["UsMiResellerExemption"] = "US_MI_RESELLER_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Minnesota. */
    TaxExemption["UsMnResellerExemption"] = "US_MN_RESELLER_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Missouri. */
    TaxExemption["UsMoResellerExemption"] = "US_MO_RESELLER_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Mississippi. */
    TaxExemption["UsMsResellerExemption"] = "US_MS_RESELLER_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Montana. */
    TaxExemption["UsMtResellerExemption"] = "US_MT_RESELLER_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in North Carolina. */
    TaxExemption["UsNcResellerExemption"] = "US_NC_RESELLER_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in North Dakota. */
    TaxExemption["UsNdResellerExemption"] = "US_ND_RESELLER_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Nebraska. */
    TaxExemption["UsNeResellerExemption"] = "US_NE_RESELLER_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in New Hampshire. */
    TaxExemption["UsNhResellerExemption"] = "US_NH_RESELLER_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in New Jersey. */
    TaxExemption["UsNjResellerExemption"] = "US_NJ_RESELLER_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in New Mexico. */
    TaxExemption["UsNmResellerExemption"] = "US_NM_RESELLER_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Nevada. */
    TaxExemption["UsNvResellerExemption"] = "US_NV_RESELLER_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in New York. */
    TaxExemption["UsNyResellerExemption"] = "US_NY_RESELLER_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Ohio. */
    TaxExemption["UsOhResellerExemption"] = "US_OH_RESELLER_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Oklahoma. */
    TaxExemption["UsOkResellerExemption"] = "US_OK_RESELLER_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Oregon. */
    TaxExemption["UsOrResellerExemption"] = "US_OR_RESELLER_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Pennsylvania. */
    TaxExemption["UsPaResellerExemption"] = "US_PA_RESELLER_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Rhode Island. */
    TaxExemption["UsRiResellerExemption"] = "US_RI_RESELLER_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in South Carolina. */
    TaxExemption["UsScResellerExemption"] = "US_SC_RESELLER_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in South Dakota. */
    TaxExemption["UsSdResellerExemption"] = "US_SD_RESELLER_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Tennessee. */
    TaxExemption["UsTnResellerExemption"] = "US_TN_RESELLER_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Texas. */
    TaxExemption["UsTxResellerExemption"] = "US_TX_RESELLER_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Utah. */
    TaxExemption["UsUtResellerExemption"] = "US_UT_RESELLER_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Virginia. */
    TaxExemption["UsVaResellerExemption"] = "US_VA_RESELLER_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Vermont. */
    TaxExemption["UsVtResellerExemption"] = "US_VT_RESELLER_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Washington. */
    TaxExemption["UsWaResellerExemption"] = "US_WA_RESELLER_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Wisconsin. */
    TaxExemption["UsWiResellerExemption"] = "US_WI_RESELLER_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in West Virginia. */
    TaxExemption["UsWvResellerExemption"] = "US_WV_RESELLER_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Wyoming. */
    TaxExemption["UsWyResellerExemption"] = "US_WY_RESELLER_EXEMPTION";
})(TaxExemption = exports.TaxExemption || (exports.TaxExemption = {}));
/** Specifies the type of resources that are translatable. */
var TranslatableResourceType;
(function (TranslatableResourceType) {
    /** A product collection. Translatable fields: `title`, `body_html`, `meta_title`, `meta_description`. */
    TranslatableResourceType["Collection"] = "COLLECTION";
    /**
     * The delivery method definition. For example, "Standard", or "Expedited".
     *         Translatable fields: `name`.
     */
    TranslatableResourceType["DeliveryMethodDefinition"] = "DELIVERY_METHOD_DEFINITION";
    /** An email template. Translatable fields: `title`, `body_html`. */
    TranslatableResourceType["EmailTemplate"] = "EMAIL_TEMPLATE";
    /** A link to direct users. Translatable fields: `title`. */
    TranslatableResourceType["Link"] = "LINK";
    /** A Metafield. Translatable fields: `value`. */
    TranslatableResourceType["Metafield"] = "METAFIELD";
    /** An online store article. Translatable fields: `title`, `body_html`, `summary_html`, `meta_title`, `meta_description`. */
    TranslatableResourceType["OnlineStoreArticle"] = "ONLINE_STORE_ARTICLE";
    /** An online store blog. Translatable fields: `title`, `meta_title`, `meta_description`. */
    TranslatableResourceType["OnlineStoreBlog"] = "ONLINE_STORE_BLOG";
    /** A category of links. Translatable fields: `title`. */
    TranslatableResourceType["OnlineStoreMenu"] = "ONLINE_STORE_MENU";
    /** An online store page. Translatable fields: `title`, `body_html`, `meta_title`, `meta_description`. */
    TranslatableResourceType["OnlineStorePage"] = "ONLINE_STORE_PAGE";
    /** An online store theme. Translatable fields: `dynamic keys based on theme data`. */
    TranslatableResourceType["OnlineStoreTheme"] = "ONLINE_STORE_THEME";
    /** A packing slip template. Translatable fields: `body`. */
    TranslatableResourceType["PackingSlipTemplate"] = "PACKING_SLIP_TEMPLATE";
    /** A payment gateway. Translatable fields: `name`. */
    TranslatableResourceType["PaymentGateway"] = "PAYMENT_GATEWAY";
    /** An online store product. Translatable fields: `title`, `body_html`, `meta_title`, `meta_description`. */
    TranslatableResourceType["Product"] = "PRODUCT";
    /**
     * An online store custom product property name. For example, "Size", "Color", or "Material".
     *         Translatable fields: `name`.
     */
    TranslatableResourceType["ProductOption"] = "PRODUCT_OPTION";
    /** An online store product variant. Translatable fields: `title`, `option1`, `option2`, `option3`. The field `title` has been deprecated. */
    TranslatableResourceType["ProductVariant"] = "PRODUCT_VARIANT";
    /** A selling plan. Translatable fields:`name`, `option1`, `option2`, `option3`, `description`. */
    TranslatableResourceType["SellingPlan"] = "SELLING_PLAN";
    /** A selling plan group. Translatable fields: `name`. */
    TranslatableResourceType["SellingPlanGroup"] = "SELLING_PLAN_GROUP";
    /** A shop. Translatable fields: `meta_title`, `meta_description`. */
    TranslatableResourceType["Shop"] = "SHOP";
    /** A shop policy. Translatable fields: `body`. */
    TranslatableResourceType["ShopPolicy"] = "SHOP_POLICY";
    /**
     * An SMS template. Translatable fields: `body`.
     * @deprecated `SMS_TEMPLATE` is deprecated, it is no longer a translatable resource type.
     */
    TranslatableResourceType["SmsTemplate"] = "SMS_TEMPLATE";
})(TranslatableResourceType = exports.TranslatableResourceType || (exports.TranslatableResourceType = {}));
/** Possible error codes that can be returned by `TranslationUserError`. */
var TranslationErrorCode;
(function (TranslationErrorCode) {
    /** The input value is blank. */
    TranslationErrorCode["Blank"] = "BLANK";
    /** Translation value is invalid. */
    TranslationErrorCode["FailsResourceValidation"] = "FAILS_RESOURCE_VALIDATION";
    /** The input value is invalid. */
    TranslationErrorCode["Invalid"] = "INVALID";
    /** Locale language code is invalid. */
    TranslationErrorCode["InvalidCode"] = "INVALID_CODE";
    /** Locale code format is invalid. */
    TranslationErrorCode["InvalidFormat"] = "INVALID_FORMAT";
    /** Translation key is invalid. */
    TranslationErrorCode["InvalidKeyForModel"] = "INVALID_KEY_FOR_MODEL";
    /** The locale is missing on the market corresponding to the `marketId` argument. */
    TranslationErrorCode["InvalidLocaleForMarket"] = "INVALID_LOCALE_FOR_MARKET";
    /** Locale is invalid for the shop. */
    TranslationErrorCode["InvalidLocaleForShop"] = "INVALID_LOCALE_FOR_SHOP";
    /** Market localizable content is invalid. */
    TranslationErrorCode["InvalidMarketLocalizableContent"] = "INVALID_MARKET_LOCALIZABLE_CONTENT";
    /** Translatable content is invalid. */
    TranslationErrorCode["InvalidTranslatableContent"] = "INVALID_TRANSLATABLE_CONTENT";
    /** The shop isn't allowed to operate on market custom content. */
    TranslationErrorCode["MarketCustomContentNotAllowed"] = "MARKET_CUSTOM_CONTENT_NOT_ALLOWED";
    /** The market corresponding to the `marketId` argument doesn't exist. */
    TranslationErrorCode["MarketDoesNotExist"] = "MARKET_DOES_NOT_EXIST";
    /** The market override locale creation failed. */
    TranslationErrorCode["MarketLocaleCreationFailed"] = "MARKET_LOCALE_CREATION_FAILED";
    /** Resource does not exist. */
    TranslationErrorCode["ResourceNotFound"] = "RESOURCE_NOT_FOUND";
    /** The specified resource can't be customized for a market. */
    TranslationErrorCode["ResourceNotMarketCustomizable"] = "RESOURCE_NOT_MARKET_CUSTOMIZABLE";
    /** Too many translation keys for the resource. */
    TranslationErrorCode["TooManyKeysForResource"] = "TOO_MANY_KEYS_FOR_RESOURCE";
})(TranslationErrorCode = exports.TranslationErrorCode || (exports.TranslationErrorCode = {}));
/** Systems of weights and measures. */
var UnitSystem;
(function (UnitSystem) {
    /** Imperial system of weights and measures. */
    UnitSystem["ImperialSystem"] = "IMPERIAL_SYSTEM";
    /** Metric system of weights and measures. */
    UnitSystem["MetricSystem"] = "METRIC_SYSTEM";
})(UnitSystem = exports.UnitSystem || (exports.UnitSystem = {}));
/** Possible error codes that can be returned by `UrlRedirectBulkDeleteByIdsUserError`. */
var UrlRedirectBulkDeleteByIdsUserErrorCode;
(function (UrlRedirectBulkDeleteByIdsUserErrorCode) {
    /**
     * You must pass one or more [`URLRedirect`](
     *             https://help.shopify.com/en/manual/online-store/menus-and-links/url-redirect
     *           ) object IDs.
     */
    UrlRedirectBulkDeleteByIdsUserErrorCode["IdsEmpty"] = "IDS_EMPTY";
})(UrlRedirectBulkDeleteByIdsUserErrorCode = exports.UrlRedirectBulkDeleteByIdsUserErrorCode || (exports.UrlRedirectBulkDeleteByIdsUserErrorCode = {}));
/** Possible error codes that can be returned by `UrlRedirectBulkDeleteBySavedSearchUserError`. */
var UrlRedirectBulkDeleteBySavedSearchUserErrorCode;
(function (UrlRedirectBulkDeleteBySavedSearchUserErrorCode) {
    /** The saved search's query cannot match all entries or be empty. */
    UrlRedirectBulkDeleteBySavedSearchUserErrorCode["InvalidSavedSearchQuery"] = "INVALID_SAVED_SEARCH_QUERY";
    /** Saved search not found. */
    UrlRedirectBulkDeleteBySavedSearchUserErrorCode["SavedSearchNotFound"] = "SAVED_SEARCH_NOT_FOUND";
})(UrlRedirectBulkDeleteBySavedSearchUserErrorCode = exports.UrlRedirectBulkDeleteBySavedSearchUserErrorCode || (exports.UrlRedirectBulkDeleteBySavedSearchUserErrorCode = {}));
/** Possible error codes that can be returned by `UrlRedirectBulkDeleteBySearchUserError`. */
var UrlRedirectBulkDeleteBySearchUserErrorCode;
(function (UrlRedirectBulkDeleteBySearchUserErrorCode) {
    /** Invalid search string. */
    UrlRedirectBulkDeleteBySearchUserErrorCode["InvalidSearchArgument"] = "INVALID_SEARCH_ARGUMENT";
})(UrlRedirectBulkDeleteBySearchUserErrorCode = exports.UrlRedirectBulkDeleteBySearchUserErrorCode || (exports.UrlRedirectBulkDeleteBySearchUserErrorCode = {}));
/** Possible error codes that can be returned by `UrlRedirectUserError`. */
var UrlRedirectErrorCode;
(function (UrlRedirectErrorCode) {
    /** Redirect could not be created. */
    UrlRedirectErrorCode["CreateFailed"] = "CREATE_FAILED";
    /** Redirect could not be deleted. */
    UrlRedirectErrorCode["DeleteFailed"] = "DELETE_FAILED";
    /** Redirect does not exist. */
    UrlRedirectErrorCode["DoesNotExist"] = "DOES_NOT_EXIST";
    /** Redirect could not be updated. */
    UrlRedirectErrorCode["UpdateFailed"] = "UPDATE_FAILED";
})(UrlRedirectErrorCode = exports.UrlRedirectErrorCode || (exports.UrlRedirectErrorCode = {}));
/** Possible error codes that can be returned by `UrlRedirectImportUserError`. */
var UrlRedirectImportErrorCode;
(function (UrlRedirectImportErrorCode) {
    /** The import has already completed. */
    UrlRedirectImportErrorCode["AlreadyImported"] = "ALREADY_IMPORTED";
    /**
     * CSV file does not exist at given URL.
     * @deprecated This error code is never returned
     */
    UrlRedirectImportErrorCode["FileDoesNotExist"] = "FILE_DOES_NOT_EXIST";
    /** The import is already in progress. */
    UrlRedirectImportErrorCode["InProgress"] = "IN_PROGRESS";
    /** URL redirect import not found. */
    UrlRedirectImportErrorCode["NotFound"] = "NOT_FOUND";
})(UrlRedirectImportErrorCode = exports.UrlRedirectImportErrorCode || (exports.UrlRedirectImportErrorCode = {}));
/** The set of valid sort keys for the UrlRedirect query. */
var UrlRedirectSortKeys;
(function (UrlRedirectSortKeys) {
    /** Sort by the `id` value. */
    UrlRedirectSortKeys["Id"] = "ID";
    /** Sort by the `path` value. */
    UrlRedirectSortKeys["Path"] = "PATH";
    /**
     * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
     * Don't use this sort key when no search query is specified.
     *
     */
    UrlRedirectSortKeys["Relevance"] = "RELEVANCE";
})(UrlRedirectSortKeys = exports.UrlRedirectSortKeys || (exports.UrlRedirectSortKeys = {}));
/** The supported formats for webhook subscriptions. */
var WebhookSubscriptionFormat;
(function (WebhookSubscriptionFormat) {
    WebhookSubscriptionFormat["Json"] = "JSON";
    WebhookSubscriptionFormat["Xml"] = "XML";
})(WebhookSubscriptionFormat = exports.WebhookSubscriptionFormat || (exports.WebhookSubscriptionFormat = {}));
/** The set of valid sort keys for the WebhookSubscription query. */
var WebhookSubscriptionSortKeys;
(function (WebhookSubscriptionSortKeys) {
    /** Sort by the `created_at` value. */
    WebhookSubscriptionSortKeys["CreatedAt"] = "CREATED_AT";
    /** Sort by the `id` value. */
    WebhookSubscriptionSortKeys["Id"] = "ID";
    /**
     * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
     * Don't use this sort key when no search query is specified.
     *
     */
    WebhookSubscriptionSortKeys["Relevance"] = "RELEVANCE";
})(WebhookSubscriptionSortKeys = exports.WebhookSubscriptionSortKeys || (exports.WebhookSubscriptionSortKeys = {}));
/**
 * The supported topics for webhook subscriptions. You can use webhook subscriptions to receive
 * notifications about particular events in a shop.
 *
 * You don't create webhook subscriptions to
 * [mandatory webhooks](https://shopify.dev/apps/webhooks/configuration/mandatory-webhooks).
 * Instead, you configure mandatory webhooks in your Partner Dashboard as part of your app setup.
 *
 */
var WebhookSubscriptionTopic;
(function (WebhookSubscriptionTopic) {
    /** The webhook topic for `app_purchases_one_time/update` events. Occurs whenever a one-time app charge is updated. */
    WebhookSubscriptionTopic["AppPurchasesOneTimeUpdate"] = "APP_PURCHASES_ONE_TIME_UPDATE";
    /** The webhook topic for `app_subscriptions/approaching_capped_amount` events. Occurs when the balance used on an app subscription crosses 90% of the capped amount. */
    WebhookSubscriptionTopic["AppSubscriptionsApproachingCappedAmount"] = "APP_SUBSCRIPTIONS_APPROACHING_CAPPED_AMOUNT";
    /** The webhook topic for `app_subscriptions/update` events. Occurs whenever an app subscription is updated. */
    WebhookSubscriptionTopic["AppSubscriptionsUpdate"] = "APP_SUBSCRIPTIONS_UPDATE";
    /** The webhook topic for `app/uninstalled` events. Occurs whenever a shop has uninstalled the app. */
    WebhookSubscriptionTopic["AppUninstalled"] = "APP_UNINSTALLED";
    /** The webhook topic for `attributed_sessions/first` events. Occurs whenever an order with a "first" attributed session is attributed. Requires the `read_marketing_events` scope. */
    WebhookSubscriptionTopic["AttributedSessionsFirst"] = "ATTRIBUTED_SESSIONS_FIRST";
    /** The webhook topic for `attributed_sessions/last` events. Occurs whenever an order with a "last" attributed session is attributed. Requires the `read_marketing_events` scope. */
    WebhookSubscriptionTopic["AttributedSessionsLast"] = "ATTRIBUTED_SESSIONS_LAST";
    /** The webhook topic for `bulk_operations/finish` events. Notifies when a Bulk Operation finishes. */
    WebhookSubscriptionTopic["BulkOperationsFinish"] = "BULK_OPERATIONS_FINISH";
    /** The webhook topic for `carts/create` events. Occurs when a cart is created in the online store. Other types of carts aren't supported. For example, the webhook doesn't support carts that are created in a custom storefront. Requires the `read_orders` scope. */
    WebhookSubscriptionTopic["CartsCreate"] = "CARTS_CREATE";
    /** The webhook topic for `carts/update` events. Occurs when a cart is updated in the online store. Other types of carts aren't supported. For example, the webhook doesn't support carts that are updated in a custom storefront. Requires the `read_orders` scope. */
    WebhookSubscriptionTopic["CartsUpdate"] = "CARTS_UPDATE";
    /** The webhook topic for `channels/delete` events. Occurs whenever a channel is deleted. Requires the `read_publications` scope. */
    WebhookSubscriptionTopic["ChannelsDelete"] = "CHANNELS_DELETE";
    /** The webhook topic for `checkouts/create` events. Occurs whenever a checkout is created. Requires the `read_orders` scope. */
    WebhookSubscriptionTopic["CheckoutsCreate"] = "CHECKOUTS_CREATE";
    /** The webhook topic for `checkouts/delete` events. Occurs whenever a checkout is deleted. Requires the `read_orders` scope. */
    WebhookSubscriptionTopic["CheckoutsDelete"] = "CHECKOUTS_DELETE";
    /** The webhook topic for `checkouts/update` events. Occurs whenever a checkout is updated. Requires the `read_orders` scope. */
    WebhookSubscriptionTopic["CheckoutsUpdate"] = "CHECKOUTS_UPDATE";
    /** The webhook topic for `collections/create` events. Occurs whenever a collection is created. Requires the `read_products` scope. */
    WebhookSubscriptionTopic["CollectionsCreate"] = "COLLECTIONS_CREATE";
    /** The webhook topic for `collections/delete` events. Occurs whenever a collection is deleted. Requires the `read_products` scope. */
    WebhookSubscriptionTopic["CollectionsDelete"] = "COLLECTIONS_DELETE";
    /** The webhook topic for `collections/update` events. Occurs whenever a collection is updated, including whenever products are added or removed from the collection. Occurs once if multiple products are added or removed from a collection at the same time. Requires the `read_products` scope. */
    WebhookSubscriptionTopic["CollectionsUpdate"] = "COLLECTIONS_UPDATE";
    /** The webhook topic for `collection_listings/add` events. Occurs whenever a collection listing is added. Requires the `read_product_listings` scope. */
    WebhookSubscriptionTopic["CollectionListingsAdd"] = "COLLECTION_LISTINGS_ADD";
    /** The webhook topic for `collection_listings/remove` events. Occurs whenever a collection listing is removed. Requires the `read_product_listings` scope. */
    WebhookSubscriptionTopic["CollectionListingsRemove"] = "COLLECTION_LISTINGS_REMOVE";
    /** The webhook topic for `collection_listings/update` events. Occurs whenever a collection listing is updated. Requires the `read_product_listings` scope. */
    WebhookSubscriptionTopic["CollectionListingsUpdate"] = "COLLECTION_LISTINGS_UPDATE";
    /** The webhook topic for `collection_publications/create` events. Occurs whenever a collection publication listing is created. Requires the `read_publications` scope. */
    WebhookSubscriptionTopic["CollectionPublicationsCreate"] = "COLLECTION_PUBLICATIONS_CREATE";
    /** The webhook topic for `collection_publications/delete` events. Occurs whenever a collection publication listing is deleted. Requires the `read_publications` scope. */
    WebhookSubscriptionTopic["CollectionPublicationsDelete"] = "COLLECTION_PUBLICATIONS_DELETE";
    /** The webhook topic for `collection_publications/update` events. Occurs whenever a collection publication listing is updated. Requires the `read_publications` scope. */
    WebhookSubscriptionTopic["CollectionPublicationsUpdate"] = "COLLECTION_PUBLICATIONS_UPDATE";
    /** The webhook topic for `customers/create` events. Occurs whenever a customer is created. Requires the `read_customers` scope. */
    WebhookSubscriptionTopic["CustomersCreate"] = "CUSTOMERS_CREATE";
    /** The webhook topic for `customers/delete` events. Occurs whenever a customer is deleted. Requires the `read_customers` scope. */
    WebhookSubscriptionTopic["CustomersDelete"] = "CUSTOMERS_DELETE";
    /** The webhook topic for `customers/disable` events. Occurs whenever a customer account is disabled. Requires the `read_customers` scope. */
    WebhookSubscriptionTopic["CustomersDisable"] = "CUSTOMERS_DISABLE";
    /** The webhook topic for `customers/enable` events. Occurs whenever a customer account is enabled. Requires the `read_customers` scope. */
    WebhookSubscriptionTopic["CustomersEnable"] = "CUSTOMERS_ENABLE";
    /** The webhook topic for `customers_marketing_consent/update` events. Occurs whenever a customer's marketing consent is updated. Requires the `read_customers` scope. */
    WebhookSubscriptionTopic["CustomersMarketingConsentUpdate"] = "CUSTOMERS_MARKETING_CONSENT_UPDATE";
    /** The webhook topic for `customers/update` events. Occurs whenever a customer is updated. Requires the `read_customers` scope. */
    WebhookSubscriptionTopic["CustomersUpdate"] = "CUSTOMERS_UPDATE";
    /** The webhook topic for `customer_groups/create` events. Occurs whenever a customer saved search is created. Requires the `read_customers` scope. */
    WebhookSubscriptionTopic["CustomerGroupsCreate"] = "CUSTOMER_GROUPS_CREATE";
    /** The webhook topic for `customer_groups/delete` events. Occurs whenever a customer saved search is deleted. Requires the `read_customers` scope. */
    WebhookSubscriptionTopic["CustomerGroupsDelete"] = "CUSTOMER_GROUPS_DELETE";
    /** The webhook topic for `customer_groups/update` events. Occurs whenever a customer saved search is updated. Requires the `read_customers` scope. */
    WebhookSubscriptionTopic["CustomerGroupsUpdate"] = "CUSTOMER_GROUPS_UPDATE";
    /** The webhook topic for `customer_payment_methods/create` events. Occurs whenever a customer payment method is created. Requires the `read_customer_payment_methods` scope. */
    WebhookSubscriptionTopic["CustomerPaymentMethodsCreate"] = "CUSTOMER_PAYMENT_METHODS_CREATE";
    /** The webhook topic for `customer_payment_methods/revoke` events. Occurs whenever a customer payment method is revoked. Requires the `read_customer_payment_methods` scope. */
    WebhookSubscriptionTopic["CustomerPaymentMethodsRevoke"] = "CUSTOMER_PAYMENT_METHODS_REVOKE";
    /** The webhook topic for `customer_payment_methods/update` events. Occurs whenever a customer payment method is updated. Requires the `read_customer_payment_methods` scope. */
    WebhookSubscriptionTopic["CustomerPaymentMethodsUpdate"] = "CUSTOMER_PAYMENT_METHODS_UPDATE";
    /** The webhook topic for `disputes/create` events. Occurs whenever a dispute is created. Requires the `read_shopify_payments_disputes` scope. */
    WebhookSubscriptionTopic["DisputesCreate"] = "DISPUTES_CREATE";
    /** The webhook topic for `disputes/update` events. Occurs whenever a dispute is updated. Requires the `read_shopify_payments_disputes` scope. */
    WebhookSubscriptionTopic["DisputesUpdate"] = "DISPUTES_UPDATE";
    /** The webhook topic for `domains/create` events. Occurs whenever a domain is created. */
    WebhookSubscriptionTopic["DomainsCreate"] = "DOMAINS_CREATE";
    /** The webhook topic for `domains/destroy` events. Occurs whenever a domain is destroyed. */
    WebhookSubscriptionTopic["DomainsDestroy"] = "DOMAINS_DESTROY";
    /** The webhook topic for `domains/update` events. Occurs whenever a domain is updated. */
    WebhookSubscriptionTopic["DomainsUpdate"] = "DOMAINS_UPDATE";
    /** The webhook topic for `draft_orders/create` events. Occurs whenever a draft order is created. Requires the `read_draft_orders` scope. */
    WebhookSubscriptionTopic["DraftOrdersCreate"] = "DRAFT_ORDERS_CREATE";
    /** The webhook topic for `draft_orders/delete` events. Occurs whenever a draft order is deleted. Requires the `read_draft_orders` scope. */
    WebhookSubscriptionTopic["DraftOrdersDelete"] = "DRAFT_ORDERS_DELETE";
    /** The webhook topic for `draft_orders/update` events. Occurs whenever a draft order is updated. Requires the `read_draft_orders` scope. */
    WebhookSubscriptionTopic["DraftOrdersUpdate"] = "DRAFT_ORDERS_UPDATE";
    /** The webhook topic for `fulfillments/create` events. Occurs whenever a fulfillment is created. Requires at least one of the following scopes: read_fulfillments, read_marketplace_orders. */
    WebhookSubscriptionTopic["FulfillmentsCreate"] = "FULFILLMENTS_CREATE";
    /** The webhook topic for `fulfillments/update` events. Occurs whenever a fulfillment is updated. Requires at least one of the following scopes: read_fulfillments, read_marketplace_orders. */
    WebhookSubscriptionTopic["FulfillmentsUpdate"] = "FULFILLMENTS_UPDATE";
    /** The webhook topic for `fulfillment_events/create` events. Occurs whenever a fulfillment event is created. Requires the `read_fulfillments` scope. */
    WebhookSubscriptionTopic["FulfillmentEventsCreate"] = "FULFILLMENT_EVENTS_CREATE";
    /** The webhook topic for `fulfillment_events/delete` events. Occurs whenever a fulfillment event is deleted. Requires the `read_fulfillments` scope. */
    WebhookSubscriptionTopic["FulfillmentEventsDelete"] = "FULFILLMENT_EVENTS_DELETE";
    /** The webhook topic for `inventory_items/create` events. Occurs whenever an inventory item is created. Requires the `read_inventory` scope. */
    WebhookSubscriptionTopic["InventoryItemsCreate"] = "INVENTORY_ITEMS_CREATE";
    /** The webhook topic for `inventory_items/delete` events. Occurs whenever an inventory item is deleted. Requires the `read_inventory` scope. */
    WebhookSubscriptionTopic["InventoryItemsDelete"] = "INVENTORY_ITEMS_DELETE";
    /** The webhook topic for `inventory_items/update` events. Occurs whenever an inventory item is updated. Requires the `read_inventory` scope. */
    WebhookSubscriptionTopic["InventoryItemsUpdate"] = "INVENTORY_ITEMS_UPDATE";
    /** The webhook topic for `inventory_levels/connect` events. Occurs whenever an inventory level is connected. Requires the `read_inventory` scope. */
    WebhookSubscriptionTopic["InventoryLevelsConnect"] = "INVENTORY_LEVELS_CONNECT";
    /** The webhook topic for `inventory_levels/disconnect` events. Occurs whenever an inventory level is disconnected. Requires the `read_inventory` scope. */
    WebhookSubscriptionTopic["InventoryLevelsDisconnect"] = "INVENTORY_LEVELS_DISCONNECT";
    /** The webhook topic for `inventory_levels/update` events. Occurs whenever an inventory level is updated. Requires the `read_inventory` scope. */
    WebhookSubscriptionTopic["InventoryLevelsUpdate"] = "INVENTORY_LEVELS_UPDATE";
    /** The webhook topic for `locales/create` events. Occurs whenever a shop locale is created Requires the `read_locales` scope. */
    WebhookSubscriptionTopic["LocalesCreate"] = "LOCALES_CREATE";
    /** The webhook topic for `locales/update` events. Occurs whenever a shop locale is updated, such as published or unpublished Requires the `read_locales` scope. */
    WebhookSubscriptionTopic["LocalesUpdate"] = "LOCALES_UPDATE";
    /** The webhook topic for `locations/create` events. Occurs whenever a location is created. Requires the `read_locations` scope. */
    WebhookSubscriptionTopic["LocationsCreate"] = "LOCATIONS_CREATE";
    /** The webhook topic for `locations/delete` events. Occurs whenever a location is deleted. Requires the `read_locations` scope. */
    WebhookSubscriptionTopic["LocationsDelete"] = "LOCATIONS_DELETE";
    /** The webhook topic for `locations/update` events. Occurs whenever a location is updated. Requires the `read_locations` scope. */
    WebhookSubscriptionTopic["LocationsUpdate"] = "LOCATIONS_UPDATE";
    /** The webhook topic for `markets/create` events. Occurs when a new market is created. Requires the `read_markets` scope. */
    WebhookSubscriptionTopic["MarketsCreate"] = "MARKETS_CREATE";
    /** The webhook topic for `markets/delete` events. Occurs when a market is deleted. Requires the `read_markets` scope. */
    WebhookSubscriptionTopic["MarketsDelete"] = "MARKETS_DELETE";
    /** The webhook topic for `markets/update` events. Occurs when a market is updated. Requires the `read_markets` scope. */
    WebhookSubscriptionTopic["MarketsUpdate"] = "MARKETS_UPDATE";
    /** The webhook topic for `orders/cancelled` events. Occurs whenever an order is cancelled. Requires at least one of the following scopes: read_orders, read_marketplace_orders. */
    WebhookSubscriptionTopic["OrdersCancelled"] = "ORDERS_CANCELLED";
    /** The webhook topic for `orders/create` events. Occurs whenever an order is created. Requires at least one of the following scopes: read_orders, read_marketplace_orders. */
    WebhookSubscriptionTopic["OrdersCreate"] = "ORDERS_CREATE";
    /** The webhook topic for `orders/delete` events. Occurs whenever an order is deleted. Requires the `read_orders` scope. */
    WebhookSubscriptionTopic["OrdersDelete"] = "ORDERS_DELETE";
    /** The webhook topic for `orders/edited` events. Occurs whenever an order is edited. Requires at least one of the following scopes: read_orders, read_marketplace_orders. */
    WebhookSubscriptionTopic["OrdersEdited"] = "ORDERS_EDITED";
    /** The webhook topic for `orders/fulfilled` events. Occurs whenever an order is fulfilled. Requires at least one of the following scopes: read_orders, read_marketplace_orders. */
    WebhookSubscriptionTopic["OrdersFulfilled"] = "ORDERS_FULFILLED";
    /** The webhook topic for `orders/paid` events. Occurs whenever an order is paid. Requires at least one of the following scopes: read_orders, read_marketplace_orders. */
    WebhookSubscriptionTopic["OrdersPaid"] = "ORDERS_PAID";
    /** The webhook topic for `orders/partially_fulfilled` events. Occurs whenever an order is partially fulfilled. Requires at least one of the following scopes: read_orders, read_marketplace_orders. */
    WebhookSubscriptionTopic["OrdersPartiallyFulfilled"] = "ORDERS_PARTIALLY_FULFILLED";
    /** The webhook topic for `orders/updated` events. Occurs whenever an order is updated. Requires at least one of the following scopes: read_orders, read_marketplace_orders. */
    WebhookSubscriptionTopic["OrdersUpdated"] = "ORDERS_UPDATED";
    /** The webhook topic for `order_transactions/create` events. Occurs when a order transaction is created or when it's status is updated. Only occurs for transactions with a status of success, failure or error. Requires at least one of the following scopes: read_orders, read_marketplace_orders. */
    WebhookSubscriptionTopic["OrderTransactionsCreate"] = "ORDER_TRANSACTIONS_CREATE";
    /** The webhook topic for `payment_terms/create` events. Occurs whenever payment terms are created. Requires the `read_payment_terms` scope. */
    WebhookSubscriptionTopic["PaymentTermsCreate"] = "PAYMENT_TERMS_CREATE";
    /** The webhook topic for `payment_terms/delete` events. Occurs whenever payment terms are deleted. Requires the `read_payment_terms` scope. */
    WebhookSubscriptionTopic["PaymentTermsDelete"] = "PAYMENT_TERMS_DELETE";
    /** The webhook topic for `payment_terms/update` events. Occurs whenever payment terms are updated. Requires the `read_payment_terms` scope. */
    WebhookSubscriptionTopic["PaymentTermsUpdate"] = "PAYMENT_TERMS_UPDATE";
    /** The webhook topic for `products/create` events. Occurs whenever a product is created. Requires the `read_products` scope. */
    WebhookSubscriptionTopic["ProductsCreate"] = "PRODUCTS_CREATE";
    /** The webhook topic for `products/delete` events. Occurs whenever a product is deleted. Requires the `read_products` scope. */
    WebhookSubscriptionTopic["ProductsDelete"] = "PRODUCTS_DELETE";
    /** The webhook topic for `products/update` events. Occurs whenever a product is updated, or whenever a product is ordered, or whenever a variant is added, removed, or updated. Requires the `read_products` scope. */
    WebhookSubscriptionTopic["ProductsUpdate"] = "PRODUCTS_UPDATE";
    /** The webhook topic for `product_listings/add` events. Occurs whenever an active product is listed on a channel. Requires the `read_product_listings` scope. */
    WebhookSubscriptionTopic["ProductListingsAdd"] = "PRODUCT_LISTINGS_ADD";
    /** The webhook topic for `product_listings/remove` events. Occurs whenever a product listing is removed from the channel. Requires the `read_product_listings` scope. */
    WebhookSubscriptionTopic["ProductListingsRemove"] = "PRODUCT_LISTINGS_REMOVE";
    /** The webhook topic for `product_listings/update` events. Occurs whenever a product publication is updated. Requires the `read_product_listings` scope. */
    WebhookSubscriptionTopic["ProductListingsUpdate"] = "PRODUCT_LISTINGS_UPDATE";
    /** The webhook topic for `product_publications/create` events. Occurs whenever a product publication for an active product is created, or whenever an existing product publication is published. Requires the `read_publications` scope. */
    WebhookSubscriptionTopic["ProductPublicationsCreate"] = "PRODUCT_PUBLICATIONS_CREATE";
    /** The webhook topic for `product_publications/delete` events. Occurs whenever a product publication for an active product is removed, or whenever an existing product publication is unpublished. Requires the `read_publications` scope. */
    WebhookSubscriptionTopic["ProductPublicationsDelete"] = "PRODUCT_PUBLICATIONS_DELETE";
    /** The webhook topic for `product_publications/update` events. Occurs whenever a product publication is updated. Requires the `read_publications` scope. */
    WebhookSubscriptionTopic["ProductPublicationsUpdate"] = "PRODUCT_PUBLICATIONS_UPDATE";
    /** The webhook topic for `profiles/create` events. Occurs whenever a delivery profile is created Requires the `read_shipping` scope. */
    WebhookSubscriptionTopic["ProfilesCreate"] = "PROFILES_CREATE";
    /** The webhook topic for `profiles/delete` events. Occurs whenever a delivery profile is deleted Requires the `read_shipping` scope. */
    WebhookSubscriptionTopic["ProfilesDelete"] = "PROFILES_DELETE";
    /** The webhook topic for `profiles/update` events. Occurs whenever a delivery profile is updated Requires the `read_shipping` scope. */
    WebhookSubscriptionTopic["ProfilesUpdate"] = "PROFILES_UPDATE";
    /** The webhook topic for `refunds/create` events. Occurs whenever a new refund is created without errors on an order, independent from the movement of money. Requires at least one of the following scopes: read_orders, read_marketplace_orders. */
    WebhookSubscriptionTopic["RefundsCreate"] = "REFUNDS_CREATE";
    /** The webhook topic for `scheduled_product_listings/add` events. Occurs whenever a product is scheduled to be published. Requires the `read_product_listings` scope. */
    WebhookSubscriptionTopic["ScheduledProductListingsAdd"] = "SCHEDULED_PRODUCT_LISTINGS_ADD";
    /** The webhook topic for `scheduled_product_listings/remove` events. Occurs whenever a product is no longer scheduled to be published. Requires the `read_product_listings` scope. */
    WebhookSubscriptionTopic["ScheduledProductListingsRemove"] = "SCHEDULED_PRODUCT_LISTINGS_REMOVE";
    /** The webhook topic for `scheduled_product_listings/update` events. Occurs whenever a product's scheduled availability date changes. Requires the `read_product_listings` scope. */
    WebhookSubscriptionTopic["ScheduledProductListingsUpdate"] = "SCHEDULED_PRODUCT_LISTINGS_UPDATE";
    /** The webhook topic for `segments/create` events. Occurs whenever a segment is created. Requires the `read_customers` scope. */
    WebhookSubscriptionTopic["SegmentsCreate"] = "SEGMENTS_CREATE";
    /** The webhook topic for `segments/delete` events. Occurs whenever a segment is deleted. Requires the `read_customers` scope. */
    WebhookSubscriptionTopic["SegmentsDelete"] = "SEGMENTS_DELETE";
    /** The webhook topic for `segments/update` events. Occurs whenever a segment is updated. Requires the `read_customers` scope. */
    WebhookSubscriptionTopic["SegmentsUpdate"] = "SEGMENTS_UPDATE";
    /** The webhook topic for `selling_plan_groups/create` events. Notifies when a SellingPlanGroup is created. Requires the `read_products` scope. */
    WebhookSubscriptionTopic["SellingPlanGroupsCreate"] = "SELLING_PLAN_GROUPS_CREATE";
    /** The webhook topic for `selling_plan_groups/delete` events. Notifies when a SellingPlanGroup is deleted. Requires the `read_products` scope. */
    WebhookSubscriptionTopic["SellingPlanGroupsDelete"] = "SELLING_PLAN_GROUPS_DELETE";
    /** The webhook topic for `selling_plan_groups/update` events. Notifies when a SellingPlanGroup is updated. Requires the `read_products` scope. */
    WebhookSubscriptionTopic["SellingPlanGroupsUpdate"] = "SELLING_PLAN_GROUPS_UPDATE";
    /** The webhook topic for `shipping_addresses/create` events. Occurs whenever a shipping address is created. Requires the `read_shipping` scope. */
    WebhookSubscriptionTopic["ShippingAddressesCreate"] = "SHIPPING_ADDRESSES_CREATE";
    /** The webhook topic for `shipping_addresses/update` events. Occurs whenever a shipping address is updated. Requires the `read_shipping` scope. */
    WebhookSubscriptionTopic["ShippingAddressesUpdate"] = "SHIPPING_ADDRESSES_UPDATE";
    /** The webhook topic for `shop/update` events. Occurs whenever a shop is updated. */
    WebhookSubscriptionTopic["ShopUpdate"] = "SHOP_UPDATE";
    /** The webhook topic for `subscription_billing_attempts/challenged` events. Occurs when the financial instutition challenges the subscripttion billing attempt charge as per 3D Secure. Requires the `read_own_subscription_contracts` scope. */
    WebhookSubscriptionTopic["SubscriptionBillingAttemptsChallenged"] = "SUBSCRIPTION_BILLING_ATTEMPTS_CHALLENGED";
    /** The webhook topic for `subscription_billing_attempts/failure` events. Occurs whenever a subscription billing attempt fails. Requires the `read_own_subscription_contracts` scope. */
    WebhookSubscriptionTopic["SubscriptionBillingAttemptsFailure"] = "SUBSCRIPTION_BILLING_ATTEMPTS_FAILURE";
    /** The webhook topic for `subscription_billing_attempts/success` events. Occurs whenever a subscription billing attempt succeeds. Requires the `read_own_subscription_contracts` scope. */
    WebhookSubscriptionTopic["SubscriptionBillingAttemptsSuccess"] = "SUBSCRIPTION_BILLING_ATTEMPTS_SUCCESS";
    /** The webhook topic for `subscription_contracts/create` events. Occurs whenever a subscription contract is created. Requires the `read_own_subscription_contracts` scope. */
    WebhookSubscriptionTopic["SubscriptionContractsCreate"] = "SUBSCRIPTION_CONTRACTS_CREATE";
    /** The webhook topic for `subscription_contracts/update` events. Occurs whenever a subscription contract is updated. Requires the `read_own_subscription_contracts` scope. */
    WebhookSubscriptionTopic["SubscriptionContractsUpdate"] = "SUBSCRIPTION_CONTRACTS_UPDATE";
    /** The webhook topic for `tax_services/create` events. Occurs whenever a tax service is created. Requires the `read_taxes` scope. */
    WebhookSubscriptionTopic["TaxServicesCreate"] = "TAX_SERVICES_CREATE";
    /** The webhook topic for `tax_services/update` events. Occurs whenver a tax service is updated. Requires the `read_taxes` scope. */
    WebhookSubscriptionTopic["TaxServicesUpdate"] = "TAX_SERVICES_UPDATE";
    /** The webhook topic for `tender_transactions/create` events. Occurs when a tender transaction is created. Requires the `read_orders` scope. */
    WebhookSubscriptionTopic["TenderTransactionsCreate"] = "TENDER_TRANSACTIONS_CREATE";
    /** The webhook topic for `themes/create` events. Occurs whenever a theme is created. Does not occur when theme files are created. Requires the `read_themes` scope. */
    WebhookSubscriptionTopic["ThemesCreate"] = "THEMES_CREATE";
    /** The webhook topic for `themes/delete` events. Occurs whenever a theme is deleted. Does not occur when theme files are deleted. Requires the `read_themes` scope. */
    WebhookSubscriptionTopic["ThemesDelete"] = "THEMES_DELETE";
    /** The webhook topic for `themes/publish` events. Occurs whenever a theme with the main or mobile (deprecated) role is published. Requires the `read_themes` scope. */
    WebhookSubscriptionTopic["ThemesPublish"] = "THEMES_PUBLISH";
    /** The webhook topic for `themes/update` events. Occurs whenever a theme is updated. Does not occur when theme files are updated. Requires the `read_themes` scope. */
    WebhookSubscriptionTopic["ThemesUpdate"] = "THEMES_UPDATE";
    /** The webhook topic for `variants/in_stock` events. Occurs whenever a variant becomes in stock. Requires the `read_products` scope. */
    WebhookSubscriptionTopic["VariantsInStock"] = "VARIANTS_IN_STOCK";
    /** The webhook topic for `variants/out_of_stock` events. Occurs whenever a variant becomes out of stock. Requires the `read_products` scope. */
    WebhookSubscriptionTopic["VariantsOutOfStock"] = "VARIANTS_OUT_OF_STOCK";
})(WebhookSubscriptionTopic = exports.WebhookSubscriptionTopic || (exports.WebhookSubscriptionTopic = {}));
/** Units of measurement for weight. */
var WeightUnit;
(function (WeightUnit) {
    /** Metric system unit of mass. */
    WeightUnit["Grams"] = "GRAMS";
    /** 1 kilogram equals 1000 grams. */
    WeightUnit["Kilograms"] = "KILOGRAMS";
    /** Imperial system unit of mass. */
    WeightUnit["Ounces"] = "OUNCES";
    /** 1 pound equals 16 ounces. */
    WeightUnit["Pounds"] = "POUNDS";
})(WeightUnit = exports.WeightUnit || (exports.WeightUnit = {}));
