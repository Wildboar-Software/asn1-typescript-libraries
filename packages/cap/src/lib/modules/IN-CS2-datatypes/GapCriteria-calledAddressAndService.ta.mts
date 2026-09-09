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
import { Digits, _decode_Digits, _encode_Digits } from "../IN-CS2-datatypes/Digits.ta.mjs";
// export { Digits, _decode_Digits, _encode_Digits } from "../IN-CS2-datatypes/Digits.ta.mjs";
import { ServiceKey, _decode_ServiceKey, _encode_ServiceKey } from "../IN-CS2-datatypes/ServiceKey.ta.mjs";
// export { ServiceKey, _decode_ServiceKey, _encode_ServiceKey } from "../IN-CS2-datatypes/ServiceKey.ta.mjs";


/**
 * @summary GapCriteria_calledAddressAndService
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GapCriteria-calledAddressAndService ::= SEQUENCE {
 *     calledAddressValue  [0]  Digits{bound},
 *     serviceKey          [1]  ServiceKey
 * }
 * ```
 * 
 * @class
 */
export
class GapCriteria_calledAddressAndService {
    constructor (
        /**
         * @summary `calledAddressValue`.
         * @public
         * @readonly
         */
        readonly calledAddressValue: Digits,
        /**
         * @summary `serviceKey`.
         * @public
         * @readonly
         */
        readonly serviceKey: ServiceKey
    ) {}

    /**
     * @summary Restructures an object into a GapCriteria_calledAddressAndService
     * @description
     * 
     * This takes an `object` and converts it to a `GapCriteria_calledAddressAndService`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GapCriteria_calledAddressAndService`.
     * @returns {GapCriteria_calledAddressAndService}
     */
    public static _from_object (_o: { [_K in keyof (GapCriteria_calledAddressAndService)]: (GapCriteria_calledAddressAndService)[_K] }): GapCriteria_calledAddressAndService {
        return new GapCriteria_calledAddressAndService(_o.calledAddressValue, _o.serviceKey);
    }


}

/**
 * @summary The Leading Root Component Types of GapCriteria_calledAddressAndService
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GapCriteria_calledAddressAndService: $.ComponentSpec[] = [
    new $.ComponentSpec("calledAddressValue", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("serviceKey", false, $.hasTag(_TagClass.context, 1), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of GapCriteria_calledAddressAndService
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GapCriteria_calledAddressAndService: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GapCriteria_calledAddressAndService
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GapCriteria_calledAddressAndService: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GapCriteria_calledAddressAndService: $.ASN1Decoder<GapCriteria_calledAddressAndService> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GapCriteria_calledAddressAndService
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GapCriteria_calledAddressAndService (el: _Element): GapCriteria_calledAddressAndService {
    if (!_cached_decoder_for_GapCriteria_calledAddressAndService) { _cached_decoder_for_GapCriteria_calledAddressAndService = function (el: _Element): GapCriteria_calledAddressAndService {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("GapCriteria-calledAddressAndService contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "calledAddressValue";
    sequence[1].name = "serviceKey";
    let calledAddressValue!: Digits;
    let serviceKey!: ServiceKey;
    calledAddressValue = $._decode_implicit<Digits>(() => _decode_Digits)(sequence[0]);
    serviceKey = $._decode_implicit<ServiceKey>(() => _decode_ServiceKey)(sequence[1]);
    return new GapCriteria_calledAddressAndService(
        calledAddressValue,
        serviceKey,

    );
}; }
    return _cached_decoder_for_GapCriteria_calledAddressAndService(el);
}

let _cached_encoder_for_GapCriteria_calledAddressAndService: $.ASN1Encoder<GapCriteria_calledAddressAndService> | null = null;

/**
 * @summary Encodes a(n) GapCriteria_calledAddressAndService into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GapCriteria_calledAddressAndService, encoded as an ASN.1 Element.
 */
export
function _encode_GapCriteria_calledAddressAndService (value: GapCriteria_calledAddressAndService, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GapCriteria_calledAddressAndService) { _cached_encoder_for_GapCriteria_calledAddressAndService = function (value: GapCriteria_calledAddressAndService, elGetter: $.ASN1Encoder<GapCriteria_calledAddressAndService>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_Digits, $.BER)(value.calledAddressValue, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_ServiceKey, $.BER)(value.serviceKey, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GapCriteria_calledAddressAndService(value, elGetter);
}


/* eslint-enable */
