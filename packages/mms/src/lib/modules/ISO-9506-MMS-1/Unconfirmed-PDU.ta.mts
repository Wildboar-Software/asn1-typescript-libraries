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
import { UnconfirmedService, _decode_UnconfirmedService, _encode_UnconfirmedService } from "../ISO-9506-MMS-1/UnconfirmedService.ta.mjs";
// export { UnconfirmedService, _decode_UnconfirmedService, _encode_UnconfirmedService } from "../ISO-9506-MMS-1/UnconfirmedService.ta.mjs";
import { Unconfirmed_Detail, _decode_Unconfirmed_Detail, _encode_Unconfirmed_Detail } from "../ISO-9506-MMS-1/Unconfirmed-Detail.ta.mjs";
// export { Unconfirmed_Detail, _decode_Unconfirmed_Detail, _encode_Unconfirmed_Detail } from "../ISO-9506-MMS-1/Unconfirmed-Detail.ta.mjs";


/**
 * @summary Unconfirmed_PDU
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Unconfirmed-PDU ::= SEQUENCE {
 *     service          UnconfirmedService,
 *     ...,
 *     service-ext      [79] Unconfirmed-Detail OPTIONAL
 *     -- shall not be transmitted if value is the value
 *     -- of a tagged type derived from NULL
 * }
 * ```
 * 
 * @class
 */
export
class Unconfirmed_PDU {
    constructor (
        /**
         * @summary `service`.
         * @public
         * @readonly
         */
        readonly service: UnconfirmedService,
        /**
         * @summary `service_ext`.
         * @public
         * @readonly
         */
        readonly service_ext: OPTIONAL<Unconfirmed_Detail>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a Unconfirmed_PDU
     * @description
     * 
     * This takes an `object` and converts it to a `Unconfirmed_PDU`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Unconfirmed_PDU`.
     * @returns {Unconfirmed_PDU}
     */
    public static _from_object (_o: { [_K in keyof (Unconfirmed_PDU)]: (Unconfirmed_PDU)[_K] }): Unconfirmed_PDU {
        return new Unconfirmed_PDU(_o.service, _o.service_ext, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of Unconfirmed_PDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Unconfirmed_PDU: $.ComponentSpec[] = [
    new $.ComponentSpec("service", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of Unconfirmed_PDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Unconfirmed_PDU: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Unconfirmed_PDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Unconfirmed_PDU: $.ComponentSpec[] = [
    new $.ComponentSpec("service-ext", true, $.hasTag(_TagClass.context, 79))
];

let _cached_decoder_for_Unconfirmed_PDU: $.ASN1Decoder<Unconfirmed_PDU> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Unconfirmed_PDU
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Unconfirmed_PDU (el: _Element): Unconfirmed_PDU {
    if (!_cached_decoder_for_Unconfirmed_PDU) { _cached_decoder_for_Unconfirmed_PDU = function (el: _Element): Unconfirmed_PDU {
    let service!: UnconfirmedService;
    let service_ext: OPTIONAL<Unconfirmed_Detail>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "service": (_el: _Element): void => { service = _decode_UnconfirmedService(_el); },
        "service-ext": (_el: _Element): void => { service_ext = $._decode_explicit<Unconfirmed_Detail>(() => _decode_Unconfirmed_Detail)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Unconfirmed_PDU,
        _extension_additions_list_spec_for_Unconfirmed_PDU,
        _root_component_type_list_2_spec_for_Unconfirmed_PDU,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new Unconfirmed_PDU(
        service,
        service_ext,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_Unconfirmed_PDU(el);
}

let _cached_encoder_for_Unconfirmed_PDU: $.ASN1Encoder<Unconfirmed_PDU> | null = null;

/**
 * @summary Encodes a(n) Unconfirmed_PDU into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Unconfirmed_PDU, encoded as an ASN.1 Element.
 */
export
function _encode_Unconfirmed_PDU (value: Unconfirmed_PDU, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Unconfirmed_PDU) { _cached_encoder_for_Unconfirmed_PDU = function (value: Unconfirmed_PDU, elGetter: $.ASN1Encoder<Unconfirmed_PDU>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_UnconfirmedService(value.service, $.BER)
        ],
        [
            /* IF_ABSENT  */ ((value.service_ext === undefined) ? undefined : $._encode_explicit(_TagClass.context, 79, () => _encode_Unconfirmed_Detail, $.BER)(value.service_ext, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Unconfirmed_PDU(value, elGetter);
}


/* eslint-enable */
