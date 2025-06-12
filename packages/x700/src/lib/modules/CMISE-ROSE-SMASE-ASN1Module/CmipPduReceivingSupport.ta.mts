/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
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
import {
    CmipPduType,
    CmipPduType_m_get_invoke /* IMPORTED_LONG_NAMED_BIT */,
    m_get_invoke /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_m_get_rors /* IMPORTED_LONG_NAMED_BIT */,
    m_get_rors /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_m_get_linked_reply /* IMPORTED_LONG_NAMED_BIT */,
    m_get_linked_reply /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_m_set_invoke /* IMPORTED_LONG_NAMED_BIT */,
    m_set_invoke /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_m_setconf_invoke /* IMPORTED_LONG_NAMED_BIT */,
    m_setconf_invoke /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_m_setconf_rors /* IMPORTED_LONG_NAMED_BIT */,
    m_setconf_rors /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_m_setconf_linked_reply /* IMPORTED_LONG_NAMED_BIT */,
    m_setconf_linked_reply /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_m_action_invoke /* IMPORTED_LONG_NAMED_BIT */,
    m_action_invoke /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_m_actionconf_invoke /* IMPORTED_LONG_NAMED_BIT */,
    m_actionconf_invoke /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_m_actionconf_rors /* IMPORTED_LONG_NAMED_BIT */,
    m_actionconf_rors /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_m_actionconf_linked_reply /* IMPORTED_LONG_NAMED_BIT */,
    m_actionconf_linked_reply /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_m_delete_invoke /* IMPORTED_LONG_NAMED_BIT */,
    m_delete_invoke /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_m_delete_rors /* IMPORTED_LONG_NAMED_BIT */,
    m_delete_rors /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_m_delete_linked_reply /* IMPORTED_LONG_NAMED_BIT */,
    m_delete_linked_reply /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_m_create_invoke /* IMPORTED_LONG_NAMED_BIT */,
    m_create_invoke /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_m_create_rors /* IMPORTED_LONG_NAMED_BIT */,
    m_create_rors /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_m_eventReport_invoke /* IMPORTED_LONG_NAMED_BIT */,
    m_eventReport_invoke /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_m_eventReportConf_invoke /* IMPORTED_LONG_NAMED_BIT */,
    m_eventReportConf_invoke /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_m_eventReportConf_rors /* IMPORTED_LONG_NAMED_BIT */,
    m_eventReportConf_rors /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_m_cancelGet_invoke /* IMPORTED_LONG_NAMED_BIT */,
    m_cancelGet_invoke /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_m_cancelGet_rors /* IMPORTED_LONG_NAMED_BIT */,
    m_cancelGet_rors /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_noSuchObjectClass_roer /* IMPORTED_LONG_NAMED_BIT */,
    noSuchObjectClass_roer /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_noSuchObjectlnstance_roer /* IMPORTED_LONG_NAMED_BIT */,
    noSuchObjectlnstance_roer /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_accessDenied_roer /* IMPORTED_LONG_NAMED_BIT */,
    accessDenied_roer /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_syncNotSupported_roer /* IMPORTED_LONG_NAMED_BIT */,
    syncNotSupported_roer /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_invalidFilter_roer /* IMPORTED_LONG_NAMED_BIT */,
    invalidFilter_roer /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_noSuchAttribute_roer /* IMPORTED_LONG_NAMED_BIT */,
    noSuchAttribute_roer /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_invalidAttributeValue_roer /* IMPORTED_LONG_NAMED_BIT */,
    invalidAttributeValue_roer /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_getListError_roer /* IMPORTED_LONG_NAMED_BIT */,
    getListError_roer /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_setListError_roer /* IMPORTED_LONG_NAMED_BIT */,
    setListError_roer /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_noSuchAction_roer /* IMPORTED_LONG_NAMED_BIT */,
    noSuchAction_roer /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_processingfailure_roer /* IMPORTED_LONG_NAMED_BIT */,
    processingfailure_roer /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_duplicateManagedObjectlnstance_roer /* IMPORTED_LONG_NAMED_BIT */,
    duplicateManagedObjectlnstance_roer /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_noSuchReferenceObject_roer /* IMPORTED_LONG_NAMED_BIT */,
    noSuchReferenceObject_roer /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_noSuchEventType_roer /* IMPORTED_LONG_NAMED_BIT */,
    noSuchEventType_roer /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_noSuchArgument_roer /* IMPORTED_LONG_NAMED_BIT */,
    noSuchArgument_roer /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_invalidArgumentValue_roer /* IMPORTED_LONG_NAMED_BIT */,
    invalidArgumentValue_roer /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_invalidscope_roer /* IMPORTED_LONG_NAMED_BIT */,
    invalidscope_roer /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_invalidObjectInstance_roer /* IMPORTED_LONG_NAMED_BIT */,
    invalidObjectInstance_roer /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_missingAttributeValue_roer /* IMPORTED_LONG_NAMED_BIT */,
    missingAttributeValue_roer /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_classlnstanceConflict_roer /* IMPORTED_LONG_NAMED_BIT */,
    classlnstanceConflict_roer /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_complexityLimitation_roer /* IMPORTED_LONG_NAMED_BIT */,
    complexityLimitation_roer /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_misstypedOperation_roer /* IMPORTED_LONG_NAMED_BIT */,
    misstypedOperation_roer /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_noSuchlnvokeID_roer /* IMPORTED_LONG_NAMED_BIT */,
    noSuchlnvokeID_roer /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_operationCanceled_roer /* IMPORTED_LONG_NAMED_BIT */,
    operationCanceled_roer /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_rosReject /* IMPORTED_LONG_NAMED_BIT */,
    rosReject /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_CmipPduType,
    _encode_CmipPduType,
} from '../CMISE-ROSE-SMASE-ASN1Module/CmipPduType.ta.mjs';
export {
    CmipPduType,
    CmipPduType_m_get_invoke /* IMPORTED_LONG_NAMED_BIT */,
    m_get_invoke /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_m_get_rors /* IMPORTED_LONG_NAMED_BIT */,
    m_get_rors /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_m_get_linked_reply /* IMPORTED_LONG_NAMED_BIT */,
    m_get_linked_reply /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_m_set_invoke /* IMPORTED_LONG_NAMED_BIT */,
    m_set_invoke /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_m_setconf_invoke /* IMPORTED_LONG_NAMED_BIT */,
    m_setconf_invoke /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_m_setconf_rors /* IMPORTED_LONG_NAMED_BIT */,
    m_setconf_rors /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_m_setconf_linked_reply /* IMPORTED_LONG_NAMED_BIT */,
    m_setconf_linked_reply /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_m_action_invoke /* IMPORTED_LONG_NAMED_BIT */,
    m_action_invoke /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_m_actionconf_invoke /* IMPORTED_LONG_NAMED_BIT */,
    m_actionconf_invoke /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_m_actionconf_rors /* IMPORTED_LONG_NAMED_BIT */,
    m_actionconf_rors /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_m_actionconf_linked_reply /* IMPORTED_LONG_NAMED_BIT */,
    m_actionconf_linked_reply /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_m_delete_invoke /* IMPORTED_LONG_NAMED_BIT */,
    m_delete_invoke /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_m_delete_rors /* IMPORTED_LONG_NAMED_BIT */,
    m_delete_rors /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_m_delete_linked_reply /* IMPORTED_LONG_NAMED_BIT */,
    m_delete_linked_reply /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_m_create_invoke /* IMPORTED_LONG_NAMED_BIT */,
    m_create_invoke /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_m_create_rors /* IMPORTED_LONG_NAMED_BIT */,
    m_create_rors /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_m_eventReport_invoke /* IMPORTED_LONG_NAMED_BIT */,
    m_eventReport_invoke /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_m_eventReportConf_invoke /* IMPORTED_LONG_NAMED_BIT */,
    m_eventReportConf_invoke /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_m_eventReportConf_rors /* IMPORTED_LONG_NAMED_BIT */,
    m_eventReportConf_rors /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_m_cancelGet_invoke /* IMPORTED_LONG_NAMED_BIT */,
    m_cancelGet_invoke /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_m_cancelGet_rors /* IMPORTED_LONG_NAMED_BIT */,
    m_cancelGet_rors /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_noSuchObjectClass_roer /* IMPORTED_LONG_NAMED_BIT */,
    noSuchObjectClass_roer /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_noSuchObjectlnstance_roer /* IMPORTED_LONG_NAMED_BIT */,
    noSuchObjectlnstance_roer /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_accessDenied_roer /* IMPORTED_LONG_NAMED_BIT */,
    accessDenied_roer /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_syncNotSupported_roer /* IMPORTED_LONG_NAMED_BIT */,
    syncNotSupported_roer /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_invalidFilter_roer /* IMPORTED_LONG_NAMED_BIT */,
    invalidFilter_roer /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_noSuchAttribute_roer /* IMPORTED_LONG_NAMED_BIT */,
    noSuchAttribute_roer /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_invalidAttributeValue_roer /* IMPORTED_LONG_NAMED_BIT */,
    invalidAttributeValue_roer /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_getListError_roer /* IMPORTED_LONG_NAMED_BIT */,
    getListError_roer /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_setListError_roer /* IMPORTED_LONG_NAMED_BIT */,
    setListError_roer /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_noSuchAction_roer /* IMPORTED_LONG_NAMED_BIT */,
    noSuchAction_roer /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_processingfailure_roer /* IMPORTED_LONG_NAMED_BIT */,
    processingfailure_roer /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_duplicateManagedObjectlnstance_roer /* IMPORTED_LONG_NAMED_BIT */,
    duplicateManagedObjectlnstance_roer /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_noSuchReferenceObject_roer /* IMPORTED_LONG_NAMED_BIT */,
    noSuchReferenceObject_roer /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_noSuchEventType_roer /* IMPORTED_LONG_NAMED_BIT */,
    noSuchEventType_roer /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_noSuchArgument_roer /* IMPORTED_LONG_NAMED_BIT */,
    noSuchArgument_roer /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_invalidArgumentValue_roer /* IMPORTED_LONG_NAMED_BIT */,
    invalidArgumentValue_roer /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_invalidscope_roer /* IMPORTED_LONG_NAMED_BIT */,
    invalidscope_roer /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_invalidObjectInstance_roer /* IMPORTED_LONG_NAMED_BIT */,
    invalidObjectInstance_roer /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_missingAttributeValue_roer /* IMPORTED_LONG_NAMED_BIT */,
    missingAttributeValue_roer /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_classlnstanceConflict_roer /* IMPORTED_LONG_NAMED_BIT */,
    classlnstanceConflict_roer /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_complexityLimitation_roer /* IMPORTED_LONG_NAMED_BIT */,
    complexityLimitation_roer /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_misstypedOperation_roer /* IMPORTED_LONG_NAMED_BIT */,
    misstypedOperation_roer /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_noSuchlnvokeID_roer /* IMPORTED_LONG_NAMED_BIT */,
    noSuchlnvokeID_roer /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_operationCanceled_roer /* IMPORTED_LONG_NAMED_BIT */,
    operationCanceled_roer /* IMPORTED_SHORT_NAMED_BIT */,
    CmipPduType_rosReject /* IMPORTED_LONG_NAMED_BIT */,
    rosReject /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_CmipPduType,
    _encode_CmipPduType,
} from '../CMISE-ROSE-SMASE-ASN1Module/CmipPduType.ta.mjs';

/* START_OF_SYMBOL_DEFINITION CmipPduReceivingSupport */
/**
 * @summary CmipPduReceivingSupport
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CmipPduReceivingSupport  ::=  CmipPduType
 * ```
 */
export type CmipPduReceivingSupport = CmipPduType; // DefinedType
/* END_OF_SYMBOL_DEFINITION CmipPduReceivingSupport */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CmipPduReceivingSupport */
let _cached_decoder_for_CmipPduReceivingSupport: $.ASN1Decoder<CmipPduReceivingSupport> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CmipPduReceivingSupport */

/* START_OF_SYMBOL_DEFINITION _decode_CmipPduReceivingSupport */
/**
 * @summary Decodes an ASN.1 element into a(n) CmipPduReceivingSupport
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CmipPduReceivingSupport} The decoded data structure.
 */
export function _decode_CmipPduReceivingSupport(el: _Element) {
    if (!_cached_decoder_for_CmipPduReceivingSupport) {
        _cached_decoder_for_CmipPduReceivingSupport = _decode_CmipPduType;
    }
    return _cached_decoder_for_CmipPduReceivingSupport(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CmipPduReceivingSupport */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CmipPduReceivingSupport */
let _cached_encoder_for_CmipPduReceivingSupport: $.ASN1Encoder<CmipPduReceivingSupport> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CmipPduReceivingSupport */

/* START_OF_SYMBOL_DEFINITION _encode_CmipPduReceivingSupport */
/**
 * @summary Encodes a(n) CmipPduReceivingSupport into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CmipPduReceivingSupport, encoded as an ASN.1 Element.
 */
export function _encode_CmipPduReceivingSupport(
    value: CmipPduReceivingSupport,
    elGetter: $.ASN1Encoder<CmipPduReceivingSupport>
) {
    if (!_cached_encoder_for_CmipPduReceivingSupport) {
        _cached_encoder_for_CmipPduReceivingSupport = _encode_CmipPduType;
    }
    return _cached_encoder_for_CmipPduReceivingSupport(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CmipPduReceivingSupport */

/* eslint-enable */
