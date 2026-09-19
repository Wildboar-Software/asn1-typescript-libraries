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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DiameterChargingData, _decode_DiameterChargingData, _encode_DiameterChargingData } from "../TS33128Payloads/DiameterChargingData.ta.mjs";
// export { DiameterChargingData, _decode_DiameterChargingData, _encode_DiameterChargingData } from "../TS33128Payloads/DiameterChargingData.ta.mjs";
import { RfChargingEvent, _enum_for_RfChargingEvent, RfChargingEvent_aoC_Information /* IMPORTED_LONG_ENUMERATION_ITEM */, aoC_Information /* IMPORTED_SHORT_ENUMERATION_ITEM */, RfChargingEvent_pS_Information /* IMPORTED_LONG_ENUMERATION_ITEM */, pS_Information /* IMPORTED_SHORT_ENUMERATION_ITEM */, RfChargingEvent_iMS_Information /* IMPORTED_LONG_ENUMERATION_ITEM */, iMS_Information /* IMPORTED_SHORT_ENUMERATION_ITEM */, RfChargingEvent_mMS_Information /* IMPORTED_LONG_ENUMERATION_ITEM */, mMS_Information /* IMPORTED_SHORT_ENUMERATION_ITEM */, RfChargingEvent_lCS_Information /* IMPORTED_LONG_ENUMERATION_ITEM */, lCS_Information /* IMPORTED_SHORT_ENUMERATION_ITEM */, RfChargingEvent_poC_Information /* IMPORTED_LONG_ENUMERATION_ITEM */, poC_Information /* IMPORTED_SHORT_ENUMERATION_ITEM */, RfChargingEvent_mBMS_Inform /* IMPORTED_LONG_ENUMERATION_ITEM */, mBMS_Inform /* IMPORTED_SHORT_ENUMERATION_ITEM */, RfChargingEvent_sMS_Information /* IMPORTED_LONG_ENUMERATION_ITEM */, sMS_Information /* IMPORTED_SHORT_ENUMERATION_ITEM */, RfChargingEvent_vCS_Information /* IMPORTED_LONG_ENUMERATION_ITEM */, vCS_Information /* IMPORTED_SHORT_ENUMERATION_ITEM */, RfChargingEvent_mMTel_Information /* IMPORTED_LONG_ENUMERATION_ITEM */, mMTel_Information /* IMPORTED_SHORT_ENUMERATION_ITEM */, RfChargingEvent_proSe_Information /* IMPORTED_LONG_ENUMERATION_ITEM */, proSe_Information /* IMPORTED_SHORT_ENUMERATION_ITEM */, RfChargingEvent_service_Generic_Information /* IMPORTED_LONG_ENUMERATION_ITEM */, service_Generic_Information /* IMPORTED_SHORT_ENUMERATION_ITEM */, RfChargingEvent_iM_Information /* IMPORTED_LONG_ENUMERATION_ITEM */, iM_Information /* IMPORTED_SHORT_ENUMERATION_ITEM */, RfChargingEvent_dCD_Information /* IMPORTED_LONG_ENUMERATION_ITEM */, dCD_Information /* IMPORTED_SHORT_ENUMERATION_ITEM */, RfChargingEvent_m2M_Information /* IMPORTED_LONG_ENUMERATION_ITEM */, m2M_Information /* IMPORTED_SHORT_ENUMERATION_ITEM */, RfChargingEvent_cPDT_Information /* IMPORTED_LONG_ENUMERATION_ITEM */, cPDT_Information /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RfChargingEvent, _encode_RfChargingEvent } from "../TS33128Payloads/RfChargingEvent.ta.mjs";
// export { RfChargingEvent, _enum_for_RfChargingEvent, RfChargingEvent_aoC_Information /* IMPORTED_LONG_ENUMERATION_ITEM */, aoC_Information /* IMPORTED_SHORT_ENUMERATION_ITEM */, RfChargingEvent_pS_Information /* IMPORTED_LONG_ENUMERATION_ITEM */, pS_Information /* IMPORTED_SHORT_ENUMERATION_ITEM */, RfChargingEvent_iMS_Information /* IMPORTED_LONG_ENUMERATION_ITEM */, iMS_Information /* IMPORTED_SHORT_ENUMERATION_ITEM */, RfChargingEvent_mMS_Information /* IMPORTED_LONG_ENUMERATION_ITEM */, mMS_Information /* IMPORTED_SHORT_ENUMERATION_ITEM */, RfChargingEvent_lCS_Information /* IMPORTED_LONG_ENUMERATION_ITEM */, lCS_Information /* IMPORTED_SHORT_ENUMERATION_ITEM */, RfChargingEvent_poC_Information /* IMPORTED_LONG_ENUMERATION_ITEM */, poC_Information /* IMPORTED_SHORT_ENUMERATION_ITEM */, RfChargingEvent_mBMS_Inform /* IMPORTED_LONG_ENUMERATION_ITEM */, mBMS_Inform /* IMPORTED_SHORT_ENUMERATION_ITEM */, RfChargingEvent_sMS_Information /* IMPORTED_LONG_ENUMERATION_ITEM */, sMS_Information /* IMPORTED_SHORT_ENUMERATION_ITEM */, RfChargingEvent_vCS_Information /* IMPORTED_LONG_ENUMERATION_ITEM */, vCS_Information /* IMPORTED_SHORT_ENUMERATION_ITEM */, RfChargingEvent_mMTel_Information /* IMPORTED_LONG_ENUMERATION_ITEM */, mMTel_Information /* IMPORTED_SHORT_ENUMERATION_ITEM */, RfChargingEvent_proSe_Information /* IMPORTED_LONG_ENUMERATION_ITEM */, proSe_Information /* IMPORTED_SHORT_ENUMERATION_ITEM */, RfChargingEvent_service_Generic_Information /* IMPORTED_LONG_ENUMERATION_ITEM */, service_Generic_Information /* IMPORTED_SHORT_ENUMERATION_ITEM */, RfChargingEvent_iM_Information /* IMPORTED_LONG_ENUMERATION_ITEM */, iM_Information /* IMPORTED_SHORT_ENUMERATION_ITEM */, RfChargingEvent_dCD_Information /* IMPORTED_LONG_ENUMERATION_ITEM */, dCD_Information /* IMPORTED_SHORT_ENUMERATION_ITEM */, RfChargingEvent_m2M_Information /* IMPORTED_LONG_ENUMERATION_ITEM */, m2M_Information /* IMPORTED_SHORT_ENUMERATION_ITEM */, RfChargingEvent_cPDT_Information /* IMPORTED_LONG_ENUMERATION_ITEM */, cPDT_Information /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RfChargingEvent, _encode_RfChargingEvent } from "../TS33128Payloads/RfChargingEvent.ta.mjs";


/**
 * @summary RfChargingDataRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RfChargingDataRequest ::= SEQUENCE
 * {
 *     rfChargingData  [1] DiameterChargingData,
 *     rfChargingEvent [2] RfChargingEvent OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class RfChargingDataRequest {
    constructor (
        /**
         * @summary `rfChargingData`.
         * @public
         * @readonly
         */
        readonly rfChargingData: DiameterChargingData,
        /**
         * @summary `rfChargingEvent`.
         * @public
         * @readonly
         */
        readonly rfChargingEvent: OPTIONAL<RfChargingEvent>
    ) {}

    /**
     * @summary Restructures an object into a RfChargingDataRequest
     * @description
     * 
     * This takes an `object` and converts it to a `RfChargingDataRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RfChargingDataRequest`.
     * @returns {RfChargingDataRequest}
     */
    public static _from_object (_o: { [_K in keyof (RfChargingDataRequest)]: (RfChargingDataRequest)[_K] }): RfChargingDataRequest {
        return new RfChargingDataRequest(_o.rfChargingData, _o.rfChargingEvent);
    }

        /**
         * @summary The enum used as the type of the component `rfChargingEvent`
         * @public
         * @static
         */

    public static _enum_for_rfChargingEvent = _enum_for_RfChargingEvent;
}

/**
 * @summary The Leading Root Component Types of RfChargingDataRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RfChargingDataRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("rfChargingData", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("rfChargingEvent", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of RfChargingDataRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RfChargingDataRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RfChargingDataRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RfChargingDataRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RfChargingDataRequest: $.ASN1Decoder<RfChargingDataRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RfChargingDataRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RfChargingDataRequest (el: _Element): RfChargingDataRequest {
    if (!_cached_decoder_for_RfChargingDataRequest) { _cached_decoder_for_RfChargingDataRequest = function (el: _Element): RfChargingDataRequest {
    let rfChargingData!: DiameterChargingData;
    let rfChargingEvent: OPTIONAL<RfChargingEvent>;
    const callbacks: $.DecodingMap = {
        "rfChargingData": (_el: _Element): void => { rfChargingData = $._decode_explicit<DiameterChargingData>(() => _decode_DiameterChargingData)(_el); },
        "rfChargingEvent": (_el: _Element): void => { rfChargingEvent = $._decode_implicit<RfChargingEvent>(() => _decode_RfChargingEvent)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RfChargingDataRequest,
        _extension_additions_list_spec_for_RfChargingDataRequest,
        _root_component_type_list_2_spec_for_RfChargingDataRequest,
        undefined,
    );
    return new RfChargingDataRequest(
        rfChargingData,
        rfChargingEvent
    );
}; }
    return _cached_decoder_for_RfChargingDataRequest(el);
}

let _cached_encoder_for_RfChargingDataRequest: $.ASN1Encoder<RfChargingDataRequest> | null = null;

/**
 * @summary Encodes a(n) RfChargingDataRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RfChargingDataRequest, encoded as an ASN.1 Element.
 */
export
function _encode_RfChargingDataRequest (value: RfChargingDataRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RfChargingDataRequest) { _cached_encoder_for_RfChargingDataRequest = function (value: RfChargingDataRequest, elGetter: $.ASN1Encoder<RfChargingDataRequest>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_DiameterChargingData, $.BER)(value.rfChargingData, $.BER),
            /* IF_ABSENT  */ ((value.rfChargingEvent === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_RfChargingEvent, $.BER)(value.rfChargingEvent, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RfChargingDataRequest(value, elGetter);
}


/* eslint-enable */
