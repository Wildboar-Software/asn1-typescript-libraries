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
import { ServiceKey, _decode_ServiceKey, _encode_ServiceKey } from "../IN-CS2-datatypes/ServiceKey.ta.mjs";
// export { ServiceKey, _decode_ServiceKey, _encode_ServiceKey } from "../IN-CS2-datatypes/ServiceKey.ta.mjs";
import { EventTypeBCSM, _enum_for_EventTypeBCSM, EventTypeBCSM_origAttemptAuthorized /* IMPORTED_LONG_ENUMERATION_ITEM */, origAttemptAuthorized /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_collectedInfo /* IMPORTED_LONG_ENUMERATION_ITEM */, collectedInfo /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_analysedInformation /* IMPORTED_LONG_ENUMERATION_ITEM */, analysedInformation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_routeSelectFailure /* IMPORTED_LONG_ENUMERATION_ITEM */, routeSelectFailure /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oCalledPartyBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, oCalledPartyBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oNoAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, oNoAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, oAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oMidCall /* IMPORTED_LONG_ENUMERATION_ITEM */, oMidCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oDisconnect /* IMPORTED_LONG_ENUMERATION_ITEM */, oDisconnect /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oAbandon /* IMPORTED_LONG_ENUMERATION_ITEM */, oAbandon /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_termAttemptAuthorized /* IMPORTED_LONG_ENUMERATION_ITEM */, termAttemptAuthorized /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, tBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tNoAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, tNoAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, tAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tMidCall /* IMPORTED_LONG_ENUMERATION_ITEM */, tMidCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tDisconnect /* IMPORTED_LONG_ENUMERATION_ITEM */, tDisconnect /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tAbandon /* IMPORTED_LONG_ENUMERATION_ITEM */, tAbandon /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oTermSeized /* IMPORTED_LONG_ENUMERATION_ITEM */, oTermSeized /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oSuspended /* IMPORTED_LONG_ENUMERATION_ITEM */, oSuspended /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tSuspended /* IMPORTED_LONG_ENUMERATION_ITEM */, tSuspended /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_origAttempt /* IMPORTED_LONG_ENUMERATION_ITEM */, origAttempt /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_termAttempt /* IMPORTED_LONG_ENUMERATION_ITEM */, termAttempt /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oReAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, oReAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tReAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, tReAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_facilitySelectedAndAvailable /* IMPORTED_LONG_ENUMERATION_ITEM */, facilitySelectedAndAvailable /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_callAccepted /* IMPORTED_LONG_ENUMERATION_ITEM */, callAccepted /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_EventTypeBCSM, _encode_EventTypeBCSM } from "../IN-CS2-datatypes/EventTypeBCSM.ta.mjs";
// export { EventTypeBCSM, _enum_for_EventTypeBCSM, EventTypeBCSM_origAttemptAuthorized /* IMPORTED_LONG_ENUMERATION_ITEM */, origAttemptAuthorized /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_collectedInfo /* IMPORTED_LONG_ENUMERATION_ITEM */, collectedInfo /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_analysedInformation /* IMPORTED_LONG_ENUMERATION_ITEM */, analysedInformation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_routeSelectFailure /* IMPORTED_LONG_ENUMERATION_ITEM */, routeSelectFailure /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oCalledPartyBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, oCalledPartyBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oNoAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, oNoAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, oAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oMidCall /* IMPORTED_LONG_ENUMERATION_ITEM */, oMidCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oDisconnect /* IMPORTED_LONG_ENUMERATION_ITEM */, oDisconnect /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oAbandon /* IMPORTED_LONG_ENUMERATION_ITEM */, oAbandon /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_termAttemptAuthorized /* IMPORTED_LONG_ENUMERATION_ITEM */, termAttemptAuthorized /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, tBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tNoAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, tNoAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, tAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tMidCall /* IMPORTED_LONG_ENUMERATION_ITEM */, tMidCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tDisconnect /* IMPORTED_LONG_ENUMERATION_ITEM */, tDisconnect /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tAbandon /* IMPORTED_LONG_ENUMERATION_ITEM */, tAbandon /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oTermSeized /* IMPORTED_LONG_ENUMERATION_ITEM */, oTermSeized /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oSuspended /* IMPORTED_LONG_ENUMERATION_ITEM */, oSuspended /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tSuspended /* IMPORTED_LONG_ENUMERATION_ITEM */, tSuspended /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_origAttempt /* IMPORTED_LONG_ENUMERATION_ITEM */, origAttempt /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_termAttempt /* IMPORTED_LONG_ENUMERATION_ITEM */, termAttempt /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oReAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, oReAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tReAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, tReAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_facilitySelectedAndAvailable /* IMPORTED_LONG_ENUMERATION_ITEM */, facilitySelectedAndAvailable /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_callAccepted /* IMPORTED_LONG_ENUMERATION_ITEM */, callAccepted /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_EventTypeBCSM, _encode_EventTypeBCSM } from "../IN-CS2-datatypes/EventTypeBCSM.ta.mjs";


/**
 * @summary GapOnService
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GapOnService ::= SEQUENCE {
 *   serviceKey  [0]  ServiceKey,
 *   dpCriteria  [1]  EventTypeBCSM OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class GapOnService {
    constructor (
        /**
         * @summary `serviceKey`.
         * @public
         * @readonly
         */
        readonly serviceKey: ServiceKey,
        /**
         * @summary `dpCriteria`.
         * @public
         * @readonly
         */
        readonly dpCriteria: OPTIONAL<EventTypeBCSM>
    ) {}

    /**
     * @summary Restructures an object into a GapOnService
     * @description
     * 
     * This takes an `object` and converts it to a `GapOnService`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GapOnService`.
     * @returns {GapOnService}
     */
    public static _from_object (_o: { [_K in keyof (GapOnService)]: (GapOnService)[_K] }): GapOnService {
        return new GapOnService(_o.serviceKey, _o.dpCriteria);
    }

        /**
         * @summary The enum used as the type of the component `dpCriteria`
         * @public
         * @static
         */

    public static _enum_for_dpCriteria = _enum_for_EventTypeBCSM;
}

/**
 * @summary The Leading Root Component Types of GapOnService
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GapOnService: $.ComponentSpec[] = [
    new $.ComponentSpec("serviceKey", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("dpCriteria", true, $.hasTag(_TagClass.context, 1), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of GapOnService
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GapOnService: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GapOnService
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GapOnService: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GapOnService: $.ASN1Decoder<GapOnService> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GapOnService
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GapOnService (el: _Element): GapOnService {
    if (!_cached_decoder_for_GapOnService) { _cached_decoder_for_GapOnService = function (el: _Element): GapOnService {
    let serviceKey!: ServiceKey;
    let dpCriteria: OPTIONAL<EventTypeBCSM>;
    const callbacks: $.DecodingMap = {
        "serviceKey": (_el: _Element): void => { serviceKey = $._decode_implicit<ServiceKey>(() => _decode_ServiceKey)(_el); },
        "dpCriteria": (_el: _Element): void => { dpCriteria = $._decode_implicit<EventTypeBCSM>(() => _decode_EventTypeBCSM)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GapOnService,
        _extension_additions_list_spec_for_GapOnService,
        _root_component_type_list_2_spec_for_GapOnService,
        undefined,
    );
    return new GapOnService(
        serviceKey,
        dpCriteria
    );
}; }
    return _cached_decoder_for_GapOnService(el);
}

let _cached_encoder_for_GapOnService: $.ASN1Encoder<GapOnService> | null = null;

/**
 * @summary Encodes a(n) GapOnService into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GapOnService, encoded as an ASN.1 Element.
 */
export
function _encode_GapOnService (value: GapOnService, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GapOnService) { _cached_encoder_for_GapOnService = function (value: GapOnService, elGetter: $.ASN1Encoder<GapOnService>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_ServiceKey, $.BER)(value.serviceKey, $.BER),
            /* IF_ABSENT  */ ((value.dpCriteria === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_EventTypeBCSM, $.BER)(value.dpCriteria, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GapOnService(value, elGetter);
}


/* eslint-enable */
