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
import { Name, _decode_Name, _encode_Name } from "../MEDIA-GATEWAY-CONTROL/Name.ta.mjs";
// export { Name, _decode_Name, _encode_Name } from "../MEDIA-GATEWAY-CONTROL/Name.ta.mjs";


/**
 * @summary PackagesItem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PackagesItem ::= SEQUENCE
 *     {
 *         packageName                    [0] Name,
 *         packageVersion                [1] INTEGER(0..99),
 *         ...
 *     }
 * ```
 * 
 * @class
 */
export
class PackagesItem {
    constructor (
        /**
         * @summary `packageName`.
         * @public
         * @readonly
         */
        readonly packageName: Name,
        /**
         * @summary `packageVersion`.
         * @public
         * @readonly
         */
        readonly packageVersion: INTEGER,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a PackagesItem
     * @description
     * 
     * This takes an `object` and converts it to a `PackagesItem`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PackagesItem`.
     * @returns {PackagesItem}
     */
    public static _from_object (_o: { [_K in keyof (PackagesItem)]: (PackagesItem)[_K] }): PackagesItem {
        return new PackagesItem(_o.packageName, _o.packageVersion, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of PackagesItem
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PackagesItem: $.ComponentSpec[] = [
    new $.ComponentSpec("packageName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("packageVersion", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of PackagesItem
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PackagesItem: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PackagesItem
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PackagesItem: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PackagesItem: $.ASN1Decoder<PackagesItem> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PackagesItem
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PackagesItem (el: _Element): PackagesItem {
    if (!_cached_decoder_for_PackagesItem) { _cached_decoder_for_PackagesItem = function (el: _Element): PackagesItem {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("PackagesItem contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "packageName";
    sequence[1].name = "packageVersion";
    let packageName!: Name;
    let packageVersion!: INTEGER;
    packageName = $._decode_implicit<Name>(() => _decode_Name)(sequence[0]);
    packageVersion = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[1]);
    return new PackagesItem(
        packageName,
        packageVersion,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_PackagesItem(el);
}

let _cached_encoder_for_PackagesItem: $.ASN1Encoder<PackagesItem> | null = null;

/**
 * @summary Encodes a(n) PackagesItem into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PackagesItem, encoded as an ASN.1 Element.
 */
export
function _encode_PackagesItem (value: PackagesItem, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PackagesItem) { _cached_encoder_for_PackagesItem = function (value: PackagesItem, elGetter: $.ASN1Encoder<PackagesItem>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_Name, $.BER)(value.packageName, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.packageVersion, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PackagesItem(value, elGetter);
}


/* eslint-enable */
