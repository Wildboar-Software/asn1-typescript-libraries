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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { ChangeMonitorFilter, ChangeMonitorFilter_privateData /* IMPORTED_LONG_NAMED_BIT */, ChangeMonitorFilter_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_ChangeMonitorFilter, _encode_ChangeMonitorFilter } from "../CSTA-capability-exchange/ChangeMonitorFilter.ta.mjs";
// export { ChangeMonitorFilter, ChangeMonitorFilter_privateData /* IMPORTED_LONG_NAMED_BIT */, ChangeMonitorFilter_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_ChangeMonitorFilter, _encode_ChangeMonitorFilter } from "../CSTA-capability-exchange/ChangeMonitorFilter.ta.mjs";
import { MonitorStart, MonitorStart_monitorObjectDevice /* IMPORTED_LONG_NAMED_BIT */, monitorObjectDevice /* IMPORTED_SHORT_NAMED_BIT */, MonitorStart_monitorObjectCall /* IMPORTED_LONG_NAMED_BIT */, monitorObjectCall /* IMPORTED_SHORT_NAMED_BIT */, MonitorStart_requestedMonitorFilter /* IMPORTED_LONG_NAMED_BIT */, requestedMonitorFilter /* IMPORTED_SHORT_NAMED_BIT */, MonitorStart_monitorTypeCall /* IMPORTED_LONG_NAMED_BIT */, monitorTypeCall /* IMPORTED_SHORT_NAMED_BIT */, MonitorStart_monitorTypeDevice /* IMPORTED_LONG_NAMED_BIT */, monitorTypeDevice /* IMPORTED_SHORT_NAMED_BIT */, MonitorStart_monitorMediaClassParameter /* IMPORTED_LONG_NAMED_BIT */, monitorMediaClassParameter /* IMPORTED_SHORT_NAMED_BIT */, MonitorStart_monitorMediaClassAudio /* IMPORTED_LONG_NAMED_BIT */, monitorMediaClassAudio /* IMPORTED_SHORT_NAMED_BIT */, MonitorStart_monitorMediaClassData /* IMPORTED_LONG_NAMED_BIT */, monitorMediaClassData /* IMPORTED_SHORT_NAMED_BIT */, MonitorStart_monitorMediaClassImage /* IMPORTED_LONG_NAMED_BIT */, monitorMediaClassImage /* IMPORTED_SHORT_NAMED_BIT */, MonitorStart_monitorMediaClassVoice /* IMPORTED_LONG_NAMED_BIT */, monitorMediaClassVoice /* IMPORTED_SHORT_NAMED_BIT */, MonitorStart_monitorMediaClassChat /* IMPORTED_LONG_NAMED_BIT */, monitorMediaClassChat /* IMPORTED_SHORT_NAMED_BIT */, MonitorStart_monitorMediaClassEmail /* IMPORTED_LONG_NAMED_BIT */, monitorMediaClassEmail /* IMPORTED_SHORT_NAMED_BIT */, MonitorStart_monitorMediaClassMessage /* IMPORTED_LONG_NAMED_BIT */, monitorMediaClassMessage /* IMPORTED_SHORT_NAMED_BIT */, MonitorStart_monitorMediaClassIM /* IMPORTED_LONG_NAMED_BIT */, monitorMediaClassIM /* IMPORTED_SHORT_NAMED_BIT */, MonitorStart_monitorMediaClassSMS /* IMPORTED_LONG_NAMED_BIT */, monitorMediaClassSMS /* IMPORTED_SHORT_NAMED_BIT */, MonitorStart_monitorMediaClassMMS /* IMPORTED_LONG_NAMED_BIT */, monitorMediaClassMMS /* IMPORTED_SHORT_NAMED_BIT */, MonitorStart_monitorExistingCallsInAck /* IMPORTED_LONG_NAMED_BIT */, monitorExistingCallsInAck /* IMPORTED_SHORT_NAMED_BIT */, MonitorStart_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, MonitorStart_callIDOnly /* IMPORTED_LONG_NAMED_BIT */, callIDOnly /* IMPORTED_SHORT_NAMED_BIT */, MonitorStart_swDomainDefaultForMonitorTypeIsDevice /* IMPORTED_LONG_NAMED_BIT */, swDomainDefaultForMonitorTypeIsDevice /* IMPORTED_SHORT_NAMED_BIT */, MonitorStart_acceptsMonitorStartWhileOOS /* IMPORTED_LONG_NAMED_BIT */, acceptsMonitorStartWhileOOS /* IMPORTED_SHORT_NAMED_BIT */, _decode_MonitorStart, _encode_MonitorStart } from "../CSTA-capability-exchange/MonitorStart.ta.mjs";
// export { MonitorStart, MonitorStart_monitorObjectDevice /* IMPORTED_LONG_NAMED_BIT */, monitorObjectDevice /* IMPORTED_SHORT_NAMED_BIT */, MonitorStart_monitorObjectCall /* IMPORTED_LONG_NAMED_BIT */, monitorObjectCall /* IMPORTED_SHORT_NAMED_BIT */, MonitorStart_requestedMonitorFilter /* IMPORTED_LONG_NAMED_BIT */, requestedMonitorFilter /* IMPORTED_SHORT_NAMED_BIT */, MonitorStart_monitorTypeCall /* IMPORTED_LONG_NAMED_BIT */, monitorTypeCall /* IMPORTED_SHORT_NAMED_BIT */, MonitorStart_monitorTypeDevice /* IMPORTED_LONG_NAMED_BIT */, monitorTypeDevice /* IMPORTED_SHORT_NAMED_BIT */, MonitorStart_monitorMediaClassParameter /* IMPORTED_LONG_NAMED_BIT */, monitorMediaClassParameter /* IMPORTED_SHORT_NAMED_BIT */, MonitorStart_monitorMediaClassAudio /* IMPORTED_LONG_NAMED_BIT */, monitorMediaClassAudio /* IMPORTED_SHORT_NAMED_BIT */, MonitorStart_monitorMediaClassData /* IMPORTED_LONG_NAMED_BIT */, monitorMediaClassData /* IMPORTED_SHORT_NAMED_BIT */, MonitorStart_monitorMediaClassImage /* IMPORTED_LONG_NAMED_BIT */, monitorMediaClassImage /* IMPORTED_SHORT_NAMED_BIT */, MonitorStart_monitorMediaClassVoice /* IMPORTED_LONG_NAMED_BIT */, monitorMediaClassVoice /* IMPORTED_SHORT_NAMED_BIT */, MonitorStart_monitorMediaClassChat /* IMPORTED_LONG_NAMED_BIT */, monitorMediaClassChat /* IMPORTED_SHORT_NAMED_BIT */, MonitorStart_monitorMediaClassEmail /* IMPORTED_LONG_NAMED_BIT */, monitorMediaClassEmail /* IMPORTED_SHORT_NAMED_BIT */, MonitorStart_monitorMediaClassMessage /* IMPORTED_LONG_NAMED_BIT */, monitorMediaClassMessage /* IMPORTED_SHORT_NAMED_BIT */, MonitorStart_monitorMediaClassIM /* IMPORTED_LONG_NAMED_BIT */, monitorMediaClassIM /* IMPORTED_SHORT_NAMED_BIT */, MonitorStart_monitorMediaClassSMS /* IMPORTED_LONG_NAMED_BIT */, monitorMediaClassSMS /* IMPORTED_SHORT_NAMED_BIT */, MonitorStart_monitorMediaClassMMS /* IMPORTED_LONG_NAMED_BIT */, monitorMediaClassMMS /* IMPORTED_SHORT_NAMED_BIT */, MonitorStart_monitorExistingCallsInAck /* IMPORTED_LONG_NAMED_BIT */, monitorExistingCallsInAck /* IMPORTED_SHORT_NAMED_BIT */, MonitorStart_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, MonitorStart_callIDOnly /* IMPORTED_LONG_NAMED_BIT */, callIDOnly /* IMPORTED_SHORT_NAMED_BIT */, MonitorStart_swDomainDefaultForMonitorTypeIsDevice /* IMPORTED_LONG_NAMED_BIT */, swDomainDefaultForMonitorTypeIsDevice /* IMPORTED_SHORT_NAMED_BIT */, MonitorStart_acceptsMonitorStartWhileOOS /* IMPORTED_LONG_NAMED_BIT */, acceptsMonitorStartWhileOOS /* IMPORTED_SHORT_NAMED_BIT */, _decode_MonitorStart, _encode_MonitorStart } from "../CSTA-capability-exchange/MonitorStart.ta.mjs";
import { MonitorStop, MonitorStop_privateData /* IMPORTED_LONG_NAMED_BIT */, MonitorStop_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, MonitorStop_switchingFunctionSupportsSending /* IMPORTED_LONG_NAMED_BIT */, switchingFunctionSupportsSending /* IMPORTED_SHORT_NAMED_BIT */, MonitorStop_switchingFunctionSupportsReceiving /* IMPORTED_LONG_NAMED_BIT */, switchingFunctionSupportsReceiving /* IMPORTED_SHORT_NAMED_BIT */, _decode_MonitorStop, _encode_MonitorStop } from "../CSTA-capability-exchange/MonitorStop.ta.mjs";
// export { MonitorStop, MonitorStop_privateData /* IMPORTED_LONG_NAMED_BIT */, MonitorStop_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, MonitorStop_switchingFunctionSupportsSending /* IMPORTED_LONG_NAMED_BIT */, switchingFunctionSupportsSending /* IMPORTED_SHORT_NAMED_BIT */, MonitorStop_switchingFunctionSupportsReceiving /* IMPORTED_LONG_NAMED_BIT */, switchingFunctionSupportsReceiving /* IMPORTED_SHORT_NAMED_BIT */, _decode_MonitorStop, _encode_MonitorStop } from "../CSTA-capability-exchange/MonitorStop.ta.mjs";
import { GetMonitors, GetMonitors_privateData /* IMPORTED_LONG_NAMED_BIT */, GetMonitors_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, GetMonitors_segmentedResponseProvided /* IMPORTED_LONG_NAMED_BIT */, segmentedResponseProvided /* IMPORTED_SHORT_NAMED_BIT */, _decode_GetMonitors, _encode_GetMonitors } from "../CSTA-capability-exchange/GetMonitors.ta.mjs";
// export { GetMonitors, GetMonitors_privateData /* IMPORTED_LONG_NAMED_BIT */, GetMonitors_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, GetMonitors_segmentedResponseProvided /* IMPORTED_LONG_NAMED_BIT */, segmentedResponseProvided /* IMPORTED_SHORT_NAMED_BIT */, _decode_GetMonitors, _encode_GetMonitors } from "../CSTA-capability-exchange/GetMonitors.ta.mjs";
import { MonitorInfo, MonitorInfo_segmentID /* IMPORTED_LONG_NAMED_BIT */, segmentID /* IMPORTED_SHORT_NAMED_BIT */, MonitorInfo_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_MonitorInfo, _encode_MonitorInfo } from "../CSTA-capability-exchange/MonitorInfo.ta.mjs";
// export { MonitorInfo, MonitorInfo_segmentID /* IMPORTED_LONG_NAMED_BIT */, segmentID /* IMPORTED_SHORT_NAMED_BIT */, MonitorInfo_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_MonitorInfo, _encode_MonitorInfo } from "../CSTA-capability-exchange/MonitorInfo.ta.mjs";


/**
 * @summary MonitoringServList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MonitoringServList ::= SEQUENCE
 * {     changeMonitorFilter         [ 0] IMPLICIT ChangeMonitorFilter         OPTIONAL,
 *     monitorStart             [ 1] IMPLICIT MonitorStart             OPTIONAL,
 *     monitorStop             [ 2] IMPLICIT MonitorStop             OPTIONAL,
 *     getMonitors            [ 3] IMPLICIT GetMonitors            OPTIONAL,
 *     monitorInfo            [ 4] IMPLICIT MonitorInfo            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class MonitoringServList {
    constructor (
        /**
         * @summary `changeMonitorFilter`.
         * @public
         * @readonly
         */
        readonly changeMonitorFilter: OPTIONAL<ChangeMonitorFilter>,
        /**
         * @summary `monitorStart`.
         * @public
         * @readonly
         */
        readonly monitorStart: OPTIONAL<MonitorStart>,
        /**
         * @summary `monitorStop`.
         * @public
         * @readonly
         */
        readonly monitorStop: OPTIONAL<MonitorStop>,
        /**
         * @summary `getMonitors`.
         * @public
         * @readonly
         */
        readonly getMonitors: OPTIONAL<GetMonitors>,
        /**
         * @summary `monitorInfo`.
         * @public
         * @readonly
         */
        readonly monitorInfo: OPTIONAL<MonitorInfo>
    ) {}

    /**
     * @summary Restructures an object into a MonitoringServList
     * @description
     * 
     * This takes an `object` and converts it to a `MonitoringServList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MonitoringServList`.
     * @returns {MonitoringServList}
     */
    public static _from_object (_o: { [_K in keyof (MonitoringServList)]: (MonitoringServList)[_K] }): MonitoringServList {
        return new MonitoringServList(_o.changeMonitorFilter, _o.monitorStart, _o.monitorStop, _o.getMonitors, _o.monitorInfo);
    }


}

/**
 * @summary The Leading Root Component Types of MonitoringServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MonitoringServList: $.ComponentSpec[] = [
    new $.ComponentSpec("changeMonitorFilter", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("monitorStart", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("monitorStop", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("getMonitors", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("monitorInfo", true, $.hasTag(_TagClass.context, 4), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of MonitoringServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MonitoringServList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MonitoringServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MonitoringServList: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MonitoringServList: $.ASN1Decoder<MonitoringServList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MonitoringServList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MonitoringServList (el: _Element): MonitoringServList {
    if (!_cached_decoder_for_MonitoringServList) { _cached_decoder_for_MonitoringServList = function (el: _Element): MonitoringServList {
    let changeMonitorFilter: OPTIONAL<ChangeMonitorFilter>;
    let monitorStart: OPTIONAL<MonitorStart>;
    let monitorStop: OPTIONAL<MonitorStop>;
    let getMonitors: OPTIONAL<GetMonitors>;
    let monitorInfo: OPTIONAL<MonitorInfo>;
    const callbacks: $.DecodingMap = {
        "changeMonitorFilter": (_el: _Element): void => { changeMonitorFilter = $._decode_implicit<ChangeMonitorFilter>(() => _decode_ChangeMonitorFilter)(_el); },
        "monitorStart": (_el: _Element): void => { monitorStart = $._decode_implicit<MonitorStart>(() => _decode_MonitorStart)(_el); },
        "monitorStop": (_el: _Element): void => { monitorStop = $._decode_implicit<MonitorStop>(() => _decode_MonitorStop)(_el); },
        "getMonitors": (_el: _Element): void => { getMonitors = $._decode_implicit<GetMonitors>(() => _decode_GetMonitors)(_el); },
        "monitorInfo": (_el: _Element): void => { monitorInfo = $._decode_implicit<MonitorInfo>(() => _decode_MonitorInfo)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MonitoringServList,
        _extension_additions_list_spec_for_MonitoringServList,
        _root_component_type_list_2_spec_for_MonitoringServList,
        undefined,
    );
    return new MonitoringServList(
        changeMonitorFilter,
        monitorStart,
        monitorStop,
        getMonitors,
        monitorInfo
    );
}; }
    return _cached_decoder_for_MonitoringServList(el);
}

let _cached_encoder_for_MonitoringServList: $.ASN1Encoder<MonitoringServList> | null = null;

/**
 * @summary Encodes a(n) MonitoringServList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MonitoringServList, encoded as an ASN.1 Element.
 */
export
function _encode_MonitoringServList (value: MonitoringServList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MonitoringServList) { _cached_encoder_for_MonitoringServList = function (value: MonitoringServList, elGetter: $.ASN1Encoder<MonitoringServList>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.changeMonitorFilter === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_ChangeMonitorFilter, $.BER)(value.changeMonitorFilter, $.BER)),
            /* IF_ABSENT  */ ((value.monitorStart === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_MonitorStart, $.BER)(value.monitorStart, $.BER)),
            /* IF_ABSENT  */ ((value.monitorStop === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_MonitorStop, $.BER)(value.monitorStop, $.BER)),
            /* IF_ABSENT  */ ((value.getMonitors === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_GetMonitors, $.BER)(value.getMonitors, $.BER)),
            /* IF_ABSENT  */ ((value.monitorInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_MonitorInfo, $.BER)(value.monitorInfo, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MonitoringServList(value, elGetter);
}


/* eslint-enable */
