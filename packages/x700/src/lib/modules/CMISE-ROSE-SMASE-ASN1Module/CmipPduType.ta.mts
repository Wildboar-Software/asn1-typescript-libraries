/* eslint-disable */
import {
    BIT_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION CmipPduType */
/**
 * @summary CmipPduType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CmipPduType  ::=  BIT STRING {
 *   m-get-invoke(1), m-get-rors(2), m-get-linked-reply(3), m-set-invoke(4),
 *   m-setconf-invoke(5), m-setconf-rors(6), m-setconf-linked-reply(7),
 *   m-action-invoke(8), m-actionconf-invoke(9), m-actionconf-rors(10),
 *   m-actionconf-linked-reply(11), m-delete-invoke(12), m-delete-rors(13),
 *   m-delete-linked-reply(14), m-create-invoke(15), m-create-rors(16),
 *   m-eventReport-invoke(17), m-eventReportConf-invoke(18),
 *   m-eventReportConf-rors(19), m-cancelGet-invoke(20), m-cancelGet-rors(21),
 *   noSuchObjectClass-roer(22), noSuchObjectlnstance-roer(23),
 *   accessDenied-roer(24), syncNotSupported-roer(25), invalidFilter-roer(26),
 *   noSuchAttribute-roer(27), invalidAttributeValue-roer(28),
 *   getListError-roer(29), setListError-roer(30), noSuchAction-roer(31),
 *   processingfailure-roer(32), duplicateManagedObjectlnstance-roer(33),
 *   noSuchReferenceObject-roer(34), noSuchEventType-roer(35),
 *   noSuchArgument-roer(36), invalidArgumentValue-roer(37),
 *   invalidscope-roer(38), invalidObjectInstance-roer(39),
 *   missingAttributeValue-roer(40), classlnstanceConflict-roer(41),
 *   complexityLimitation-roer(42), misstypedOperation-roer(43),
 *   noSuchlnvokeID-roer(44), operationCanceled-roer(45), rosReject(46)}
 * ```
 */
export type CmipPduType = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION CmipPduType */

/* START_OF_SYMBOL_DEFINITION CmipPduType_m_get_invoke */
/**
 * @summary CmipPduType_m_get_invoke
 * @constant
 */
export const CmipPduType_m_get_invoke: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION CmipPduType_m_get_invoke */

/* START_OF_SYMBOL_DEFINITION m_get_invoke */
/**
 * @summary m_get_invoke
 * @constant
 */
export const m_get_invoke: number = CmipPduType_m_get_invoke; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION m_get_invoke */

/* START_OF_SYMBOL_DEFINITION CmipPduType_m_get_rors */
/**
 * @summary CmipPduType_m_get_rors
 * @constant
 */
export const CmipPduType_m_get_rors: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION CmipPduType_m_get_rors */

/* START_OF_SYMBOL_DEFINITION m_get_rors */
/**
 * @summary m_get_rors
 * @constant
 */
export const m_get_rors: number = CmipPduType_m_get_rors; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION m_get_rors */

/* START_OF_SYMBOL_DEFINITION CmipPduType_m_get_linked_reply */
/**
 * @summary CmipPduType_m_get_linked_reply
 * @constant
 */
export const CmipPduType_m_get_linked_reply: number = 3; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION CmipPduType_m_get_linked_reply */

/* START_OF_SYMBOL_DEFINITION m_get_linked_reply */
/**
 * @summary m_get_linked_reply
 * @constant
 */
export const m_get_linked_reply: number = CmipPduType_m_get_linked_reply; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION m_get_linked_reply */

/* START_OF_SYMBOL_DEFINITION CmipPduType_m_set_invoke */
/**
 * @summary CmipPduType_m_set_invoke
 * @constant
 */
export const CmipPduType_m_set_invoke: number = 4; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION CmipPduType_m_set_invoke */

/* START_OF_SYMBOL_DEFINITION m_set_invoke */
/**
 * @summary m_set_invoke
 * @constant
 */
export const m_set_invoke: number = CmipPduType_m_set_invoke; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION m_set_invoke */

/* START_OF_SYMBOL_DEFINITION CmipPduType_m_setconf_invoke */
/**
 * @summary CmipPduType_m_setconf_invoke
 * @constant
 */
export const CmipPduType_m_setconf_invoke: number = 5; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION CmipPduType_m_setconf_invoke */

/* START_OF_SYMBOL_DEFINITION m_setconf_invoke */
/**
 * @summary m_setconf_invoke
 * @constant
 */
export const m_setconf_invoke: number = CmipPduType_m_setconf_invoke; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION m_setconf_invoke */

/* START_OF_SYMBOL_DEFINITION CmipPduType_m_setconf_rors */
/**
 * @summary CmipPduType_m_setconf_rors
 * @constant
 */
export const CmipPduType_m_setconf_rors: number = 6; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION CmipPduType_m_setconf_rors */

/* START_OF_SYMBOL_DEFINITION m_setconf_rors */
/**
 * @summary m_setconf_rors
 * @constant
 */
export const m_setconf_rors: number = CmipPduType_m_setconf_rors; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION m_setconf_rors */

/* START_OF_SYMBOL_DEFINITION CmipPduType_m_setconf_linked_reply */
/**
 * @summary CmipPduType_m_setconf_linked_reply
 * @constant
 */
export const CmipPduType_m_setconf_linked_reply: number = 7; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION CmipPduType_m_setconf_linked_reply */

/* START_OF_SYMBOL_DEFINITION m_setconf_linked_reply */
/**
 * @summary m_setconf_linked_reply
 * @constant
 */
export const m_setconf_linked_reply: number = CmipPduType_m_setconf_linked_reply; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION m_setconf_linked_reply */

/* START_OF_SYMBOL_DEFINITION CmipPduType_m_action_invoke */
/**
 * @summary CmipPduType_m_action_invoke
 * @constant
 */
export const CmipPduType_m_action_invoke: number = 8; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION CmipPduType_m_action_invoke */

/* START_OF_SYMBOL_DEFINITION m_action_invoke */
/**
 * @summary m_action_invoke
 * @constant
 */
export const m_action_invoke: number = CmipPduType_m_action_invoke; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION m_action_invoke */

/* START_OF_SYMBOL_DEFINITION CmipPduType_m_actionconf_invoke */
/**
 * @summary CmipPduType_m_actionconf_invoke
 * @constant
 */
export const CmipPduType_m_actionconf_invoke: number = 9; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION CmipPduType_m_actionconf_invoke */

/* START_OF_SYMBOL_DEFINITION m_actionconf_invoke */
/**
 * @summary m_actionconf_invoke
 * @constant
 */
export const m_actionconf_invoke: number = CmipPduType_m_actionconf_invoke; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION m_actionconf_invoke */

/* START_OF_SYMBOL_DEFINITION CmipPduType_m_actionconf_rors */
/**
 * @summary CmipPduType_m_actionconf_rors
 * @constant
 */
export const CmipPduType_m_actionconf_rors: number = 10; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION CmipPduType_m_actionconf_rors */

/* START_OF_SYMBOL_DEFINITION m_actionconf_rors */
/**
 * @summary m_actionconf_rors
 * @constant
 */
export const m_actionconf_rors: number = CmipPduType_m_actionconf_rors; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION m_actionconf_rors */

/* START_OF_SYMBOL_DEFINITION CmipPduType_m_actionconf_linked_reply */
/**
 * @summary CmipPduType_m_actionconf_linked_reply
 * @constant
 */
export const CmipPduType_m_actionconf_linked_reply: number = 11; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION CmipPduType_m_actionconf_linked_reply */

/* START_OF_SYMBOL_DEFINITION m_actionconf_linked_reply */
/**
 * @summary m_actionconf_linked_reply
 * @constant
 */
export const m_actionconf_linked_reply: number = CmipPduType_m_actionconf_linked_reply; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION m_actionconf_linked_reply */

/* START_OF_SYMBOL_DEFINITION CmipPduType_m_delete_invoke */
/**
 * @summary CmipPduType_m_delete_invoke
 * @constant
 */
export const CmipPduType_m_delete_invoke: number = 12; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION CmipPduType_m_delete_invoke */

/* START_OF_SYMBOL_DEFINITION m_delete_invoke */
/**
 * @summary m_delete_invoke
 * @constant
 */
export const m_delete_invoke: number = CmipPduType_m_delete_invoke; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION m_delete_invoke */

/* START_OF_SYMBOL_DEFINITION CmipPduType_m_delete_rors */
/**
 * @summary CmipPduType_m_delete_rors
 * @constant
 */
export const CmipPduType_m_delete_rors: number = 13; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION CmipPduType_m_delete_rors */

/* START_OF_SYMBOL_DEFINITION m_delete_rors */
/**
 * @summary m_delete_rors
 * @constant
 */
export const m_delete_rors: number = CmipPduType_m_delete_rors; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION m_delete_rors */

/* START_OF_SYMBOL_DEFINITION CmipPduType_m_delete_linked_reply */
/**
 * @summary CmipPduType_m_delete_linked_reply
 * @constant
 */
export const CmipPduType_m_delete_linked_reply: number = 14; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION CmipPduType_m_delete_linked_reply */

/* START_OF_SYMBOL_DEFINITION m_delete_linked_reply */
/**
 * @summary m_delete_linked_reply
 * @constant
 */
export const m_delete_linked_reply: number = CmipPduType_m_delete_linked_reply; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION m_delete_linked_reply */

/* START_OF_SYMBOL_DEFINITION CmipPduType_m_create_invoke */
/**
 * @summary CmipPduType_m_create_invoke
 * @constant
 */
export const CmipPduType_m_create_invoke: number = 15; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION CmipPduType_m_create_invoke */

/* START_OF_SYMBOL_DEFINITION m_create_invoke */
/**
 * @summary m_create_invoke
 * @constant
 */
export const m_create_invoke: number = CmipPduType_m_create_invoke; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION m_create_invoke */

/* START_OF_SYMBOL_DEFINITION CmipPduType_m_create_rors */
/**
 * @summary CmipPduType_m_create_rors
 * @constant
 */
export const CmipPduType_m_create_rors: number = 16; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION CmipPduType_m_create_rors */

/* START_OF_SYMBOL_DEFINITION m_create_rors */
/**
 * @summary m_create_rors
 * @constant
 */
export const m_create_rors: number = CmipPduType_m_create_rors; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION m_create_rors */

/* START_OF_SYMBOL_DEFINITION CmipPduType_m_eventReport_invoke */
/**
 * @summary CmipPduType_m_eventReport_invoke
 * @constant
 */
export const CmipPduType_m_eventReport_invoke: number = 17; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION CmipPduType_m_eventReport_invoke */

/* START_OF_SYMBOL_DEFINITION m_eventReport_invoke */
/**
 * @summary m_eventReport_invoke
 * @constant
 */
export const m_eventReport_invoke: number = CmipPduType_m_eventReport_invoke; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION m_eventReport_invoke */

/* START_OF_SYMBOL_DEFINITION CmipPduType_m_eventReportConf_invoke */
/**
 * @summary CmipPduType_m_eventReportConf_invoke
 * @constant
 */
export const CmipPduType_m_eventReportConf_invoke: number = 18; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION CmipPduType_m_eventReportConf_invoke */

/* START_OF_SYMBOL_DEFINITION m_eventReportConf_invoke */
/**
 * @summary m_eventReportConf_invoke
 * @constant
 */
export const m_eventReportConf_invoke: number = CmipPduType_m_eventReportConf_invoke; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION m_eventReportConf_invoke */

/* START_OF_SYMBOL_DEFINITION CmipPduType_m_eventReportConf_rors */
/**
 * @summary CmipPduType_m_eventReportConf_rors
 * @constant
 */
export const CmipPduType_m_eventReportConf_rors: number = 19; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION CmipPduType_m_eventReportConf_rors */

/* START_OF_SYMBOL_DEFINITION m_eventReportConf_rors */
/**
 * @summary m_eventReportConf_rors
 * @constant
 */
export const m_eventReportConf_rors: number = CmipPduType_m_eventReportConf_rors; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION m_eventReportConf_rors */

/* START_OF_SYMBOL_DEFINITION CmipPduType_m_cancelGet_invoke */
/**
 * @summary CmipPduType_m_cancelGet_invoke
 * @constant
 */
export const CmipPduType_m_cancelGet_invoke: number = 20; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION CmipPduType_m_cancelGet_invoke */

/* START_OF_SYMBOL_DEFINITION m_cancelGet_invoke */
/**
 * @summary m_cancelGet_invoke
 * @constant
 */
export const m_cancelGet_invoke: number = CmipPduType_m_cancelGet_invoke; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION m_cancelGet_invoke */

/* START_OF_SYMBOL_DEFINITION CmipPduType_m_cancelGet_rors */
/**
 * @summary CmipPduType_m_cancelGet_rors
 * @constant
 */
export const CmipPduType_m_cancelGet_rors: number = 21; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION CmipPduType_m_cancelGet_rors */

/* START_OF_SYMBOL_DEFINITION m_cancelGet_rors */
/**
 * @summary m_cancelGet_rors
 * @constant
 */
export const m_cancelGet_rors: number = CmipPduType_m_cancelGet_rors; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION m_cancelGet_rors */

/* START_OF_SYMBOL_DEFINITION CmipPduType_noSuchObjectClass_roer */
/**
 * @summary CmipPduType_noSuchObjectClass_roer
 * @constant
 */
export const CmipPduType_noSuchObjectClass_roer: number = 22; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION CmipPduType_noSuchObjectClass_roer */

/* START_OF_SYMBOL_DEFINITION noSuchObjectClass_roer */
/**
 * @summary noSuchObjectClass_roer
 * @constant
 */
export const noSuchObjectClass_roer: number = CmipPduType_noSuchObjectClass_roer; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION noSuchObjectClass_roer */

/* START_OF_SYMBOL_DEFINITION CmipPduType_noSuchObjectlnstance_roer */
/**
 * @summary CmipPduType_noSuchObjectlnstance_roer
 * @constant
 */
export const CmipPduType_noSuchObjectlnstance_roer: number = 23; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION CmipPduType_noSuchObjectlnstance_roer */

/* START_OF_SYMBOL_DEFINITION noSuchObjectlnstance_roer */
/**
 * @summary noSuchObjectlnstance_roer
 * @constant
 */
export const noSuchObjectlnstance_roer: number = CmipPduType_noSuchObjectlnstance_roer; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION noSuchObjectlnstance_roer */

/* START_OF_SYMBOL_DEFINITION CmipPduType_accessDenied_roer */
/**
 * @summary CmipPduType_accessDenied_roer
 * @constant
 */
export const CmipPduType_accessDenied_roer: number = 24; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION CmipPduType_accessDenied_roer */

/* START_OF_SYMBOL_DEFINITION accessDenied_roer */
/**
 * @summary accessDenied_roer
 * @constant
 */
export const accessDenied_roer: number = CmipPduType_accessDenied_roer; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION accessDenied_roer */

/* START_OF_SYMBOL_DEFINITION CmipPduType_syncNotSupported_roer */
/**
 * @summary CmipPduType_syncNotSupported_roer
 * @constant
 */
export const CmipPduType_syncNotSupported_roer: number = 25; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION CmipPduType_syncNotSupported_roer */

/* START_OF_SYMBOL_DEFINITION syncNotSupported_roer */
/**
 * @summary syncNotSupported_roer
 * @constant
 */
export const syncNotSupported_roer: number = CmipPduType_syncNotSupported_roer; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION syncNotSupported_roer */

/* START_OF_SYMBOL_DEFINITION CmipPduType_invalidFilter_roer */
/**
 * @summary CmipPduType_invalidFilter_roer
 * @constant
 */
export const CmipPduType_invalidFilter_roer: number = 26; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION CmipPduType_invalidFilter_roer */

/* START_OF_SYMBOL_DEFINITION invalidFilter_roer */
/**
 * @summary invalidFilter_roer
 * @constant
 */
export const invalidFilter_roer: number = CmipPduType_invalidFilter_roer; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION invalidFilter_roer */

/* START_OF_SYMBOL_DEFINITION CmipPduType_noSuchAttribute_roer */
/**
 * @summary CmipPduType_noSuchAttribute_roer
 * @constant
 */
export const CmipPduType_noSuchAttribute_roer: number = 27; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION CmipPduType_noSuchAttribute_roer */

/* START_OF_SYMBOL_DEFINITION noSuchAttribute_roer */
/**
 * @summary noSuchAttribute_roer
 * @constant
 */
export const noSuchAttribute_roer: number = CmipPduType_noSuchAttribute_roer; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION noSuchAttribute_roer */

/* START_OF_SYMBOL_DEFINITION CmipPduType_invalidAttributeValue_roer */
/**
 * @summary CmipPduType_invalidAttributeValue_roer
 * @constant
 */
export const CmipPduType_invalidAttributeValue_roer: number = 28; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION CmipPduType_invalidAttributeValue_roer */

/* START_OF_SYMBOL_DEFINITION invalidAttributeValue_roer */
/**
 * @summary invalidAttributeValue_roer
 * @constant
 */
export const invalidAttributeValue_roer: number = CmipPduType_invalidAttributeValue_roer; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION invalidAttributeValue_roer */

/* START_OF_SYMBOL_DEFINITION CmipPduType_getListError_roer */
/**
 * @summary CmipPduType_getListError_roer
 * @constant
 */
export const CmipPduType_getListError_roer: number = 29; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION CmipPduType_getListError_roer */

/* START_OF_SYMBOL_DEFINITION getListError_roer */
/**
 * @summary getListError_roer
 * @constant
 */
export const getListError_roer: number = CmipPduType_getListError_roer; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION getListError_roer */

/* START_OF_SYMBOL_DEFINITION CmipPduType_setListError_roer */
/**
 * @summary CmipPduType_setListError_roer
 * @constant
 */
export const CmipPduType_setListError_roer: number = 30; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION CmipPduType_setListError_roer */

/* START_OF_SYMBOL_DEFINITION setListError_roer */
/**
 * @summary setListError_roer
 * @constant
 */
export const setListError_roer: number = CmipPduType_setListError_roer; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION setListError_roer */

/* START_OF_SYMBOL_DEFINITION CmipPduType_noSuchAction_roer */
/**
 * @summary CmipPduType_noSuchAction_roer
 * @constant
 */
export const CmipPduType_noSuchAction_roer: number = 31; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION CmipPduType_noSuchAction_roer */

/* START_OF_SYMBOL_DEFINITION noSuchAction_roer */
/**
 * @summary noSuchAction_roer
 * @constant
 */
export const noSuchAction_roer: number = CmipPduType_noSuchAction_roer; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION noSuchAction_roer */

/* START_OF_SYMBOL_DEFINITION CmipPduType_processingfailure_roer */
/**
 * @summary CmipPduType_processingfailure_roer
 * @constant
 */
export const CmipPduType_processingfailure_roer: number = 32; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION CmipPduType_processingfailure_roer */

/* START_OF_SYMBOL_DEFINITION processingfailure_roer */
/**
 * @summary processingfailure_roer
 * @constant
 */
export const processingfailure_roer: number = CmipPduType_processingfailure_roer; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION processingfailure_roer */

/* START_OF_SYMBOL_DEFINITION CmipPduType_duplicateManagedObjectlnstance_roer */
/**
 * @summary CmipPduType_duplicateManagedObjectlnstance_roer
 * @constant
 */
export const CmipPduType_duplicateManagedObjectlnstance_roer: number = 33; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION CmipPduType_duplicateManagedObjectlnstance_roer */

/* START_OF_SYMBOL_DEFINITION duplicateManagedObjectlnstance_roer */
/**
 * @summary duplicateManagedObjectlnstance_roer
 * @constant
 */
export const duplicateManagedObjectlnstance_roer: number = CmipPduType_duplicateManagedObjectlnstance_roer; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION duplicateManagedObjectlnstance_roer */

/* START_OF_SYMBOL_DEFINITION CmipPduType_noSuchReferenceObject_roer */
/**
 * @summary CmipPduType_noSuchReferenceObject_roer
 * @constant
 */
export const CmipPduType_noSuchReferenceObject_roer: number = 34; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION CmipPduType_noSuchReferenceObject_roer */

/* START_OF_SYMBOL_DEFINITION noSuchReferenceObject_roer */
/**
 * @summary noSuchReferenceObject_roer
 * @constant
 */
export const noSuchReferenceObject_roer: number = CmipPduType_noSuchReferenceObject_roer; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION noSuchReferenceObject_roer */

/* START_OF_SYMBOL_DEFINITION CmipPduType_noSuchEventType_roer */
/**
 * @summary CmipPduType_noSuchEventType_roer
 * @constant
 */
export const CmipPduType_noSuchEventType_roer: number = 35; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION CmipPduType_noSuchEventType_roer */

/* START_OF_SYMBOL_DEFINITION noSuchEventType_roer */
/**
 * @summary noSuchEventType_roer
 * @constant
 */
export const noSuchEventType_roer: number = CmipPduType_noSuchEventType_roer; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION noSuchEventType_roer */

/* START_OF_SYMBOL_DEFINITION CmipPduType_noSuchArgument_roer */
/**
 * @summary CmipPduType_noSuchArgument_roer
 * @constant
 */
export const CmipPduType_noSuchArgument_roer: number = 36; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION CmipPduType_noSuchArgument_roer */

/* START_OF_SYMBOL_DEFINITION noSuchArgument_roer */
/**
 * @summary noSuchArgument_roer
 * @constant
 */
export const noSuchArgument_roer: number = CmipPduType_noSuchArgument_roer; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION noSuchArgument_roer */

/* START_OF_SYMBOL_DEFINITION CmipPduType_invalidArgumentValue_roer */
/**
 * @summary CmipPduType_invalidArgumentValue_roer
 * @constant
 */
export const CmipPduType_invalidArgumentValue_roer: number = 37; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION CmipPduType_invalidArgumentValue_roer */

/* START_OF_SYMBOL_DEFINITION invalidArgumentValue_roer */
/**
 * @summary invalidArgumentValue_roer
 * @constant
 */
export const invalidArgumentValue_roer: number = CmipPduType_invalidArgumentValue_roer; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION invalidArgumentValue_roer */

/* START_OF_SYMBOL_DEFINITION CmipPduType_invalidscope_roer */
/**
 * @summary CmipPduType_invalidscope_roer
 * @constant
 */
export const CmipPduType_invalidscope_roer: number = 38; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION CmipPduType_invalidscope_roer */

/* START_OF_SYMBOL_DEFINITION invalidscope_roer */
/**
 * @summary invalidscope_roer
 * @constant
 */
export const invalidscope_roer: number = CmipPduType_invalidscope_roer; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION invalidscope_roer */

/* START_OF_SYMBOL_DEFINITION CmipPduType_invalidObjectInstance_roer */
/**
 * @summary CmipPduType_invalidObjectInstance_roer
 * @constant
 */
export const CmipPduType_invalidObjectInstance_roer: number = 39; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION CmipPduType_invalidObjectInstance_roer */

/* START_OF_SYMBOL_DEFINITION invalidObjectInstance_roer */
/**
 * @summary invalidObjectInstance_roer
 * @constant
 */
export const invalidObjectInstance_roer: number = CmipPduType_invalidObjectInstance_roer; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION invalidObjectInstance_roer */

/* START_OF_SYMBOL_DEFINITION CmipPduType_missingAttributeValue_roer */
/**
 * @summary CmipPduType_missingAttributeValue_roer
 * @constant
 */
export const CmipPduType_missingAttributeValue_roer: number = 40; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION CmipPduType_missingAttributeValue_roer */

/* START_OF_SYMBOL_DEFINITION missingAttributeValue_roer */
/**
 * @summary missingAttributeValue_roer
 * @constant
 */
export const missingAttributeValue_roer: number = CmipPduType_missingAttributeValue_roer; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION missingAttributeValue_roer */

/* START_OF_SYMBOL_DEFINITION CmipPduType_classlnstanceConflict_roer */
/**
 * @summary CmipPduType_classlnstanceConflict_roer
 * @constant
 */
export const CmipPduType_classlnstanceConflict_roer: number = 41; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION CmipPduType_classlnstanceConflict_roer */

/* START_OF_SYMBOL_DEFINITION classlnstanceConflict_roer */
/**
 * @summary classlnstanceConflict_roer
 * @constant
 */
export const classlnstanceConflict_roer: number = CmipPduType_classlnstanceConflict_roer; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION classlnstanceConflict_roer */

/* START_OF_SYMBOL_DEFINITION CmipPduType_complexityLimitation_roer */
/**
 * @summary CmipPduType_complexityLimitation_roer
 * @constant
 */
export const CmipPduType_complexityLimitation_roer: number = 42; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION CmipPduType_complexityLimitation_roer */

/* START_OF_SYMBOL_DEFINITION complexityLimitation_roer */
/**
 * @summary complexityLimitation_roer
 * @constant
 */
export const complexityLimitation_roer: number = CmipPduType_complexityLimitation_roer; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION complexityLimitation_roer */

/* START_OF_SYMBOL_DEFINITION CmipPduType_misstypedOperation_roer */
/**
 * @summary CmipPduType_misstypedOperation_roer
 * @constant
 */
export const CmipPduType_misstypedOperation_roer: number = 43; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION CmipPduType_misstypedOperation_roer */

/* START_OF_SYMBOL_DEFINITION misstypedOperation_roer */
/**
 * @summary misstypedOperation_roer
 * @constant
 */
export const misstypedOperation_roer: number = CmipPduType_misstypedOperation_roer; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION misstypedOperation_roer */

/* START_OF_SYMBOL_DEFINITION CmipPduType_noSuchlnvokeID_roer */
/**
 * @summary CmipPduType_noSuchlnvokeID_roer
 * @constant
 */
export const CmipPduType_noSuchlnvokeID_roer: number = 44; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION CmipPduType_noSuchlnvokeID_roer */

/* START_OF_SYMBOL_DEFINITION noSuchlnvokeID_roer */
/**
 * @summary noSuchlnvokeID_roer
 * @constant
 */
export const noSuchlnvokeID_roer: number = CmipPduType_noSuchlnvokeID_roer; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION noSuchlnvokeID_roer */

/* START_OF_SYMBOL_DEFINITION CmipPduType_operationCanceled_roer */
/**
 * @summary CmipPduType_operationCanceled_roer
 * @constant
 */
export const CmipPduType_operationCanceled_roer: number = 45; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION CmipPduType_operationCanceled_roer */

/* START_OF_SYMBOL_DEFINITION operationCanceled_roer */
/**
 * @summary operationCanceled_roer
 * @constant
 */
export const operationCanceled_roer: number = CmipPduType_operationCanceled_roer; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION operationCanceled_roer */

/* START_OF_SYMBOL_DEFINITION CmipPduType_rosReject */
/**
 * @summary CmipPduType_rosReject
 * @constant
 */
export const CmipPduType_rosReject: number = 46; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION CmipPduType_rosReject */

/* START_OF_SYMBOL_DEFINITION rosReject */
/**
 * @summary rosReject
 * @constant
 */
export const rosReject: number = CmipPduType_rosReject; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION rosReject */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CmipPduType */
let _cached_decoder_for_CmipPduType: $.ASN1Decoder<CmipPduType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CmipPduType */

/* START_OF_SYMBOL_DEFINITION _decode_CmipPduType */
/**
 * @summary Decodes an ASN.1 element into a(n) CmipPduType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CmipPduType} The decoded data structure.
 */
export function _decode_CmipPduType(el: _Element) {
    if (!_cached_decoder_for_CmipPduType) {
        _cached_decoder_for_CmipPduType = $._decodeBitString;
    }
    return _cached_decoder_for_CmipPduType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CmipPduType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CmipPduType */
let _cached_encoder_for_CmipPduType: $.ASN1Encoder<CmipPduType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CmipPduType */

/* START_OF_SYMBOL_DEFINITION _encode_CmipPduType */
/**
 * @summary Encodes a(n) CmipPduType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CmipPduType, encoded as an ASN.1 Element.
 */
export function _encode_CmipPduType(
    value: CmipPduType,
    elGetter: $.ASN1Encoder<CmipPduType>
) {
    if (!_cached_encoder_for_CmipPduType) {
        _cached_encoder_for_CmipPduType = $._encodeBitString;
    }
    return _cached_encoder_for_CmipPduType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CmipPduType */

/* eslint-enable */
