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



/**
 * @summary DomainName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DomainName ::= SEQUENCE
 *     {
 *         name            [0] IA5String,
 *         -- The name starts with an alphanumeric digit followed by a sequence
 *         -- of alphanumeric digits, hyphens and dots. No two dots shall occur
 *         -- consecutively.
 * 
 *         portNumber            [1] INTEGER(0..65535) OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class DomainName {
    constructor (
        /**
         * @summary `name`.
         * @public
         * @readonly
         */
        readonly name: IA5String,
        /**
         * @summary `portNumber`.
         * @public
         * @readonly
         */
        readonly portNumber: OPTIONAL<INTEGER>
    ) {}

    /**
     * @summary Restructures an object into a DomainName
     * @description
     * 
     * This takes an `object` and converts it to a `DomainName`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DomainName`.
     * @returns {DomainName}
     */
    public static _from_object (_o: { [_K in keyof (DomainName)]: (DomainName)[_K] }): DomainName {
        return new DomainName(_o.name, _o.portNumber);
    }


}

/**
 * @summary The Leading Root Component Types of DomainName
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DomainName: $.ComponentSpec[] = [
    new $.ComponentSpec("name", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("portNumber", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of DomainName
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DomainName: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DomainName
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DomainName: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DomainName: $.ASN1Decoder<DomainName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DomainName
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DomainName (el: _Element): DomainName {
    if (!_cached_decoder_for_DomainName) { _cached_decoder_for_DomainName = function (el: _Element): DomainName {
    let name!: IA5String;
    let portNumber: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "name": (_el: _Element): void => { name = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "portNumber": (_el: _Element): void => { portNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DomainName,
        _extension_additions_list_spec_for_DomainName,
        _root_component_type_list_2_spec_for_DomainName,
        undefined,
    );
    return new DomainName(
        name,
        portNumber
    );
}; }
    return _cached_decoder_for_DomainName(el);
}

let _cached_encoder_for_DomainName: $.ASN1Encoder<DomainName> | null = null;

/**
 * @summary Encodes a(n) DomainName into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DomainName, encoded as an ASN.1 Element.
 */
export
function _encode_DomainName (value: DomainName, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DomainName) { _cached_encoder_for_DomainName = function (value: DomainName, elGetter: $.ASN1Encoder<DomainName>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeIA5String, $.BER)(value.name, $.BER),
            /* IF_ABSENT  */ ((value.portNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.portNumber, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DomainName(value, elGetter);
}


/* eslint-enable */
