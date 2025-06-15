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

/**
 * @summary CmipPduType_m_get_invoke
 * @constant
 */
export const CmipPduType_m_get_invoke: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary m_get_invoke
 * @constant
 */
export const m_get_invoke: number = CmipPduType_m_get_invoke; /* SHORT_NAMED_BIT */

/**
 * @summary CmipPduType_m_get_rors
 * @constant
 */
export const CmipPduType_m_get_rors: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary m_get_rors
 * @constant
 */
export const m_get_rors: number = CmipPduType_m_get_rors; /* SHORT_NAMED_BIT */

/**
 * @summary CmipPduType_m_get_linked_reply
 * @constant
 */
export const CmipPduType_m_get_linked_reply: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary m_get_linked_reply
 * @constant
 */
export const m_get_linked_reply: number = CmipPduType_m_get_linked_reply; /* SHORT_NAMED_BIT */

/**
 * @summary CmipPduType_m_set_invoke
 * @constant
 */
export const CmipPduType_m_set_invoke: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary m_set_invoke
 * @constant
 */
export const m_set_invoke: number = CmipPduType_m_set_invoke; /* SHORT_NAMED_BIT */

/**
 * @summary CmipPduType_m_setconf_invoke
 * @constant
 */
export const CmipPduType_m_setconf_invoke: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary m_setconf_invoke
 * @constant
 */
export const m_setconf_invoke: number = CmipPduType_m_setconf_invoke; /* SHORT_NAMED_BIT */

/**
 * @summary CmipPduType_m_setconf_rors
 * @constant
 */
export const CmipPduType_m_setconf_rors: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary m_setconf_rors
 * @constant
 */
export const m_setconf_rors: number = CmipPduType_m_setconf_rors; /* SHORT_NAMED_BIT */

/**
 * @summary CmipPduType_m_setconf_linked_reply
 * @constant
 */
export const CmipPduType_m_setconf_linked_reply: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary m_setconf_linked_reply
 * @constant
 */
export const m_setconf_linked_reply: number = CmipPduType_m_setconf_linked_reply; /* SHORT_NAMED_BIT */

/**
 * @summary CmipPduType_m_action_invoke
 * @constant
 */
export const CmipPduType_m_action_invoke: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary m_action_invoke
 * @constant
 */
export const m_action_invoke: number = CmipPduType_m_action_invoke; /* SHORT_NAMED_BIT */

/**
 * @summary CmipPduType_m_actionconf_invoke
 * @constant
 */
export const CmipPduType_m_actionconf_invoke: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary m_actionconf_invoke
 * @constant
 */
export const m_actionconf_invoke: number = CmipPduType_m_actionconf_invoke; /* SHORT_NAMED_BIT */

/**
 * @summary CmipPduType_m_actionconf_rors
 * @constant
 */
export const CmipPduType_m_actionconf_rors: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary m_actionconf_rors
 * @constant
 */
export const m_actionconf_rors: number = CmipPduType_m_actionconf_rors; /* SHORT_NAMED_BIT */

/**
 * @summary CmipPduType_m_actionconf_linked_reply
 * @constant
 */
export const CmipPduType_m_actionconf_linked_reply: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary m_actionconf_linked_reply
 * @constant
 */
export const m_actionconf_linked_reply: number = CmipPduType_m_actionconf_linked_reply; /* SHORT_NAMED_BIT */

/**
 * @summary CmipPduType_m_delete_invoke
 * @constant
 */
export const CmipPduType_m_delete_invoke: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary m_delete_invoke
 * @constant
 */
export const m_delete_invoke: number = CmipPduType_m_delete_invoke; /* SHORT_NAMED_BIT */

/**
 * @summary CmipPduType_m_delete_rors
 * @constant
 */
export const CmipPduType_m_delete_rors: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary m_delete_rors
 * @constant
 */
export const m_delete_rors: number = CmipPduType_m_delete_rors; /* SHORT_NAMED_BIT */

/**
 * @summary CmipPduType_m_delete_linked_reply
 * @constant
 */
export const CmipPduType_m_delete_linked_reply: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary m_delete_linked_reply
 * @constant
 */
export const m_delete_linked_reply: number = CmipPduType_m_delete_linked_reply; /* SHORT_NAMED_BIT */

/**
 * @summary CmipPduType_m_create_invoke
 * @constant
 */
export const CmipPduType_m_create_invoke: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary m_create_invoke
 * @constant
 */
export const m_create_invoke: number = CmipPduType_m_create_invoke; /* SHORT_NAMED_BIT */

/**
 * @summary CmipPduType_m_create_rors
 * @constant
 */
export const CmipPduType_m_create_rors: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary m_create_rors
 * @constant
 */
export const m_create_rors: number = CmipPduType_m_create_rors; /* SHORT_NAMED_BIT */

/**
 * @summary CmipPduType_m_eventReport_invoke
 * @constant
 */
export const CmipPduType_m_eventReport_invoke: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary m_eventReport_invoke
 * @constant
 */
export const m_eventReport_invoke: number = CmipPduType_m_eventReport_invoke; /* SHORT_NAMED_BIT */

/**
 * @summary CmipPduType_m_eventReportConf_invoke
 * @constant
 */
export const CmipPduType_m_eventReportConf_invoke: number = 18; /* LONG_NAMED_BIT */

/**
 * @summary m_eventReportConf_invoke
 * @constant
 */
export const m_eventReportConf_invoke: number = CmipPduType_m_eventReportConf_invoke; /* SHORT_NAMED_BIT */

/**
 * @summary CmipPduType_m_eventReportConf_rors
 * @constant
 */
export const CmipPduType_m_eventReportConf_rors: number = 19; /* LONG_NAMED_BIT */

/**
 * @summary m_eventReportConf_rors
 * @constant
 */
export const m_eventReportConf_rors: number = CmipPduType_m_eventReportConf_rors; /* SHORT_NAMED_BIT */

/**
 * @summary CmipPduType_m_cancelGet_invoke
 * @constant
 */
export const CmipPduType_m_cancelGet_invoke: number = 20; /* LONG_NAMED_BIT */

/**
 * @summary m_cancelGet_invoke
 * @constant
 */
export const m_cancelGet_invoke: number = CmipPduType_m_cancelGet_invoke; /* SHORT_NAMED_BIT */

/**
 * @summary CmipPduType_m_cancelGet_rors
 * @constant
 */
export const CmipPduType_m_cancelGet_rors: number = 21; /* LONG_NAMED_BIT */

/**
 * @summary m_cancelGet_rors
 * @constant
 */
export const m_cancelGet_rors: number = CmipPduType_m_cancelGet_rors; /* SHORT_NAMED_BIT */

/**
 * @summary CmipPduType_noSuchObjectClass_roer
 * @constant
 */
export const CmipPduType_noSuchObjectClass_roer: number = 22; /* LONG_NAMED_BIT */

/**
 * @summary noSuchObjectClass_roer
 * @constant
 */
export const noSuchObjectClass_roer: number = CmipPduType_noSuchObjectClass_roer; /* SHORT_NAMED_BIT */

/**
 * @summary CmipPduType_noSuchObjectlnstance_roer
 * @constant
 */
export const CmipPduType_noSuchObjectlnstance_roer: number = 23; /* LONG_NAMED_BIT */

/**
 * @summary noSuchObjectlnstance_roer
 * @constant
 */
export const noSuchObjectlnstance_roer: number = CmipPduType_noSuchObjectlnstance_roer; /* SHORT_NAMED_BIT */

/**
 * @summary CmipPduType_accessDenied_roer
 * @constant
 */
export const CmipPduType_accessDenied_roer: number = 24; /* LONG_NAMED_BIT */

/**
 * @summary accessDenied_roer
 * @constant
 */
export const accessDenied_roer: number = CmipPduType_accessDenied_roer; /* SHORT_NAMED_BIT */

/**
 * @summary CmipPduType_syncNotSupported_roer
 * @constant
 */
export const CmipPduType_syncNotSupported_roer: number = 25; /* LONG_NAMED_BIT */

/**
 * @summary syncNotSupported_roer
 * @constant
 */
export const syncNotSupported_roer: number = CmipPduType_syncNotSupported_roer; /* SHORT_NAMED_BIT */

/**
 * @summary CmipPduType_invalidFilter_roer
 * @constant
 */
export const CmipPduType_invalidFilter_roer: number = 26; /* LONG_NAMED_BIT */

/**
 * @summary invalidFilter_roer
 * @constant
 */
export const invalidFilter_roer: number = CmipPduType_invalidFilter_roer; /* SHORT_NAMED_BIT */

/**
 * @summary CmipPduType_noSuchAttribute_roer
 * @constant
 */
export const CmipPduType_noSuchAttribute_roer: number = 27; /* LONG_NAMED_BIT */

/**
 * @summary noSuchAttribute_roer
 * @constant
 */
export const noSuchAttribute_roer: number = CmipPduType_noSuchAttribute_roer; /* SHORT_NAMED_BIT */

/**
 * @summary CmipPduType_invalidAttributeValue_roer
 * @constant
 */
export const CmipPduType_invalidAttributeValue_roer: number = 28; /* LONG_NAMED_BIT */

/**
 * @summary invalidAttributeValue_roer
 * @constant
 */
export const invalidAttributeValue_roer: number = CmipPduType_invalidAttributeValue_roer; /* SHORT_NAMED_BIT */

/**
 * @summary CmipPduType_getListError_roer
 * @constant
 */
export const CmipPduType_getListError_roer: number = 29; /* LONG_NAMED_BIT */

/**
 * @summary getListError_roer
 * @constant
 */
export const getListError_roer: number = CmipPduType_getListError_roer; /* SHORT_NAMED_BIT */

/**
 * @summary CmipPduType_setListError_roer
 * @constant
 */
export const CmipPduType_setListError_roer: number = 30; /* LONG_NAMED_BIT */

/**
 * @summary setListError_roer
 * @constant
 */
export const setListError_roer: number = CmipPduType_setListError_roer; /* SHORT_NAMED_BIT */

/**
 * @summary CmipPduType_noSuchAction_roer
 * @constant
 */
export const CmipPduType_noSuchAction_roer: number = 31; /* LONG_NAMED_BIT */

/**
 * @summary noSuchAction_roer
 * @constant
 */
export const noSuchAction_roer: number = CmipPduType_noSuchAction_roer; /* SHORT_NAMED_BIT */

/**
 * @summary CmipPduType_processingfailure_roer
 * @constant
 */
export const CmipPduType_processingfailure_roer: number = 32; /* LONG_NAMED_BIT */

/**
 * @summary processingfailure_roer
 * @constant
 */
export const processingfailure_roer: number = CmipPduType_processingfailure_roer; /* SHORT_NAMED_BIT */

/**
 * @summary CmipPduType_duplicateManagedObjectlnstance_roer
 * @constant
 */
export const CmipPduType_duplicateManagedObjectlnstance_roer: number = 33; /* LONG_NAMED_BIT */

/**
 * @summary duplicateManagedObjectlnstance_roer
 * @constant
 */
export const duplicateManagedObjectlnstance_roer: number = CmipPduType_duplicateManagedObjectlnstance_roer; /* SHORT_NAMED_BIT */

/**
 * @summary CmipPduType_noSuchReferenceObject_roer
 * @constant
 */
export const CmipPduType_noSuchReferenceObject_roer: number = 34; /* LONG_NAMED_BIT */

/**
 * @summary noSuchReferenceObject_roer
 * @constant
 */
export const noSuchReferenceObject_roer: number = CmipPduType_noSuchReferenceObject_roer; /* SHORT_NAMED_BIT */

/**
 * @summary CmipPduType_noSuchEventType_roer
 * @constant
 */
export const CmipPduType_noSuchEventType_roer: number = 35; /* LONG_NAMED_BIT */

/**
 * @summary noSuchEventType_roer
 * @constant
 */
export const noSuchEventType_roer: number = CmipPduType_noSuchEventType_roer; /* SHORT_NAMED_BIT */

/**
 * @summary CmipPduType_noSuchArgument_roer
 * @constant
 */
export const CmipPduType_noSuchArgument_roer: number = 36; /* LONG_NAMED_BIT */

/**
 * @summary noSuchArgument_roer
 * @constant
 */
export const noSuchArgument_roer: number = CmipPduType_noSuchArgument_roer; /* SHORT_NAMED_BIT */

/**
 * @summary CmipPduType_invalidArgumentValue_roer
 * @constant
 */
export const CmipPduType_invalidArgumentValue_roer: number = 37; /* LONG_NAMED_BIT */

/**
 * @summary invalidArgumentValue_roer
 * @constant
 */
export const invalidArgumentValue_roer: number = CmipPduType_invalidArgumentValue_roer; /* SHORT_NAMED_BIT */

/**
 * @summary CmipPduType_invalidscope_roer
 * @constant
 */
export const CmipPduType_invalidscope_roer: number = 38; /* LONG_NAMED_BIT */

/**
 * @summary invalidscope_roer
 * @constant
 */
export const invalidscope_roer: number = CmipPduType_invalidscope_roer; /* SHORT_NAMED_BIT */

/**
 * @summary CmipPduType_invalidObjectInstance_roer
 * @constant
 */
export const CmipPduType_invalidObjectInstance_roer: number = 39; /* LONG_NAMED_BIT */

/**
 * @summary invalidObjectInstance_roer
 * @constant
 */
export const invalidObjectInstance_roer: number = CmipPduType_invalidObjectInstance_roer; /* SHORT_NAMED_BIT */

/**
 * @summary CmipPduType_missingAttributeValue_roer
 * @constant
 */
export const CmipPduType_missingAttributeValue_roer: number = 40; /* LONG_NAMED_BIT */

/**
 * @summary missingAttributeValue_roer
 * @constant
 */
export const missingAttributeValue_roer: number = CmipPduType_missingAttributeValue_roer; /* SHORT_NAMED_BIT */

/**
 * @summary CmipPduType_classlnstanceConflict_roer
 * @constant
 */
export const CmipPduType_classlnstanceConflict_roer: number = 41; /* LONG_NAMED_BIT */

/**
 * @summary classlnstanceConflict_roer
 * @constant
 */
export const classlnstanceConflict_roer: number = CmipPduType_classlnstanceConflict_roer; /* SHORT_NAMED_BIT */

/**
 * @summary CmipPduType_complexityLimitation_roer
 * @constant
 */
export const CmipPduType_complexityLimitation_roer: number = 42; /* LONG_NAMED_BIT */

/**
 * @summary complexityLimitation_roer
 * @constant
 */
export const complexityLimitation_roer: number = CmipPduType_complexityLimitation_roer; /* SHORT_NAMED_BIT */

/**
 * @summary CmipPduType_misstypedOperation_roer
 * @constant
 */
export const CmipPduType_misstypedOperation_roer: number = 43; /* LONG_NAMED_BIT */

/**
 * @summary misstypedOperation_roer
 * @constant
 */
export const misstypedOperation_roer: number = CmipPduType_misstypedOperation_roer; /* SHORT_NAMED_BIT */

/**
 * @summary CmipPduType_noSuchlnvokeID_roer
 * @constant
 */
export const CmipPduType_noSuchlnvokeID_roer: number = 44; /* LONG_NAMED_BIT */

/**
 * @summary noSuchlnvokeID_roer
 * @constant
 */
export const noSuchlnvokeID_roer: number = CmipPduType_noSuchlnvokeID_roer; /* SHORT_NAMED_BIT */

/**
 * @summary CmipPduType_operationCanceled_roer
 * @constant
 */
export const CmipPduType_operationCanceled_roer: number = 45; /* LONG_NAMED_BIT */

/**
 * @summary operationCanceled_roer
 * @constant
 */
export const operationCanceled_roer: number = CmipPduType_operationCanceled_roer; /* SHORT_NAMED_BIT */

/**
 * @summary CmipPduType_rosReject
 * @constant
 */
export const CmipPduType_rosReject: number = 46; /* LONG_NAMED_BIT */

/**
 * @summary rosReject
 * @constant
 */
export const rosReject: number = CmipPduType_rosReject; /* SHORT_NAMED_BIT */


export const _decode_CmipPduType = $._decodeBitString;


export const _encode_CmipPduType = $._encodeBitString;


/* eslint-enable */
