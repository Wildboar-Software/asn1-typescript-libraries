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
import { Digits, _decode_Digits, _encode_Digits } from "../Core-INAP-CS1-DataTypes/Digits.ta.mjs";
// export { Digits, _decode_Digits, _encode_Digits } from "../Core-INAP-CS1-DataTypes/Digits.ta.mjs";
import { ServiceKey, _decode_ServiceKey, _encode_ServiceKey } from "../Core-INAP-CS1-DataTypes/ServiceKey.ta.mjs";
// export { ServiceKey, _decode_ServiceKey, _encode_ServiceKey } from "../Core-INAP-CS1-DataTypes/ServiceKey.ta.mjs";
import { LocationNumber, _decode_LocationNumber, _encode_LocationNumber } from "../Core-INAP-CS1-DataTypes/LocationNumber.ta.mjs";
// export { LocationNumber, _decode_LocationNumber, _encode_LocationNumber } from "../Core-INAP-CS1-DataTypes/LocationNumber.ta.mjs";


/**
 * @summary GapCriteria_callingAddressAndService
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GapCriteria-callingAddressAndService ::= SEQUENCE {
 *     callingAddressValue     [0] Digits,
 *     serviceKey     [1] ServiceKey,
 *     locationNumber     [2] LocationNumber     OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class GapCriteria_callingAddressAndService {
    constructor (
        /**
         * @summary `callingAddressValue`.
         * @public
         * @readonly
         */
        readonly callingAddressValue: Digits,
        /**
         * @summary `serviceKey`.
         * @public
         * @readonly
         */
        readonly serviceKey: ServiceKey,
        /**
         * @summary `locationNumber`.
         * @public
         * @readonly
         */
        readonly locationNumber: OPTIONAL<LocationNumber>
    ) {}

    /**
     * @summary Restructures an object into a GapCriteria_callingAddressAndService
     * @description
     * 
     * This takes an `object` and converts it to a `GapCriteria_callingAddressAndService`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GapCriteria_callingAddressAndService`.
     * @returns {GapCriteria_callingAddressAndService}
     */
    public static _from_object (_o: { [_K in keyof (GapCriteria_callingAddressAndService)]: (GapCriteria_callingAddressAndService)[_K] }): GapCriteria_callingAddressAndService {
        return new GapCriteria_callingAddressAndService(_o.callingAddressValue, _o.serviceKey, _o.locationNumber);
    }


}

/**
 * @summary The Leading Root Component Types of GapCriteria_callingAddressAndService
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GapCriteria_callingAddressAndService: $.ComponentSpec[] = [
    new $.ComponentSpec("callingAddressValue", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("serviceKey", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("locationNumber", true, $.hasTag(_TagClass.context, 2), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of GapCriteria_callingAddressAndService
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GapCriteria_callingAddressAndService: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GapCriteria_callingAddressAndService
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GapCriteria_callingAddressAndService: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GapCriteria_callingAddressAndService: $.ASN1Decoder<GapCriteria_callingAddressAndService> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GapCriteria_callingAddressAndService
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GapCriteria_callingAddressAndService (el: _Element): GapCriteria_callingAddressAndService {
    if (!_cached_decoder_for_GapCriteria_callingAddressAndService) { _cached_decoder_for_GapCriteria_callingAddressAndService = function (el: _Element): GapCriteria_callingAddressAndService {
    let callingAddressValue!: Digits;
    let serviceKey!: ServiceKey;
    let locationNumber: OPTIONAL<LocationNumber>;
    const callbacks: $.DecodingMap = {
        "callingAddressValue": (_el: _Element): void => { callingAddressValue = $._decode_implicit<Digits>(() => _decode_Digits)(_el); },
        "serviceKey": (_el: _Element): void => { serviceKey = $._decode_implicit<ServiceKey>(() => _decode_ServiceKey)(_el); },
        "locationNumber": (_el: _Element): void => { locationNumber = $._decode_implicit<LocationNumber>(() => _decode_LocationNumber)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GapCriteria_callingAddressAndService,
        _extension_additions_list_spec_for_GapCriteria_callingAddressAndService,
        _root_component_type_list_2_spec_for_GapCriteria_callingAddressAndService,
        undefined,
    );
    return new GapCriteria_callingAddressAndService(
        callingAddressValue,
        serviceKey,
        locationNumber
    );
}; }
    return _cached_decoder_for_GapCriteria_callingAddressAndService(el);
}

let _cached_encoder_for_GapCriteria_callingAddressAndService: $.ASN1Encoder<GapCriteria_callingAddressAndService> | null = null;

/**
 * @summary Encodes a(n) GapCriteria_callingAddressAndService into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GapCriteria_callingAddressAndService, encoded as an ASN.1 Element.
 */
export
function _encode_GapCriteria_callingAddressAndService (value: GapCriteria_callingAddressAndService, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GapCriteria_callingAddressAndService) { _cached_encoder_for_GapCriteria_callingAddressAndService = function (value: GapCriteria_callingAddressAndService, elGetter: $.ASN1Encoder<GapCriteria_callingAddressAndService>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_Digits, $.BER)(value.callingAddressValue, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_ServiceKey, $.BER)(value.serviceKey, $.BER),
            /* IF_ABSENT  */ ((value.locationNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_LocationNumber, $.BER)(value.locationNumber, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GapCriteria_callingAddressAndService(value, elGetter);
}


/* eslint-enable */
