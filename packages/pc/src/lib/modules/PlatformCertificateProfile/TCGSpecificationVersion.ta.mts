/* eslint-disable */
import {
    INTEGER,
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



/* START_OF_SYMBOL_DEFINITION TCGSpecificationVersion */
/**
 * @summary TCGSpecificationVersion
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TCGSpecificationVersion ::= SEQUENCE {
 *     majorVersion    INTEGER,
 *     minorVersion    INTEGER,
 *     revision        INTEGER }
 * ```
 * 
 * @class
 */
export
class TCGSpecificationVersion {
    constructor (
        /**
         * @summary `majorVersion`.
         * @public
         * @readonly
         */
        readonly majorVersion: INTEGER,
        /**
         * @summary `minorVersion`.
         * @public
         * @readonly
         */
        readonly minorVersion: INTEGER,
        /**
         * @summary `revision`.
         * @public
         * @readonly
         */
        readonly revision: INTEGER
    ) {}

    /**
     * @summary Restructures an object into a TCGSpecificationVersion
     * @description
     * 
     * This takes an `object` and converts it to a `TCGSpecificationVersion`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TCGSpecificationVersion`.
     * @returns {TCGSpecificationVersion}
     */
    public static _from_object (_o: { [_K in keyof (TCGSpecificationVersion)]: (TCGSpecificationVersion)[_K] }): TCGSpecificationVersion {
        return new TCGSpecificationVersion(_o.majorVersion, _o.minorVersion, _o.revision);
    }


}
/* END_OF_SYMBOL_DEFINITION TCGSpecificationVersion */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TCGSpecificationVersion */
/**
 * @summary The Leading Root Component Types of TCGSpecificationVersion
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TCGSpecificationVersion: $.ComponentSpec[] = [
    new $.ComponentSpec("majorVersion", false, $.hasTag(_TagClass.universal, 2), undefined, undefined),
    new $.ComponentSpec("minorVersion", false, $.hasTag(_TagClass.universal, 2), undefined, undefined),
    new $.ComponentSpec("revision", false, $.hasTag(_TagClass.universal, 2), undefined, undefined)
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TCGSpecificationVersion */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TCGSpecificationVersion */
/**
 * @summary The Trailing Root Component Types of TCGSpecificationVersion
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TCGSpecificationVersion: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TCGSpecificationVersion */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TCGSpecificationVersion */
/**
 * @summary The Extension Addition Component Types of TCGSpecificationVersion
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TCGSpecificationVersion: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TCGSpecificationVersion */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TCGSpecificationVersion */
let _cached_decoder_for_TCGSpecificationVersion: $.ASN1Decoder<TCGSpecificationVersion> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TCGSpecificationVersion */

/* START_OF_SYMBOL_DEFINITION _decode_TCGSpecificationVersion */
/**
 * @summary Decodes an ASN.1 element into a(n) TCGSpecificationVersion
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TCGSpecificationVersion} The decoded data structure.
 */
export
function _decode_TCGSpecificationVersion (el: _Element) {
    if (!_cached_decoder_for_TCGSpecificationVersion) { _cached_decoder_for_TCGSpecificationVersion = function (el: _Element): TCGSpecificationVersion {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("TCGSpecificationVersion contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "majorVersion";
    sequence[1].name = "minorVersion";
    sequence[2].name = "revision";
    let majorVersion!: INTEGER;
    let minorVersion!: INTEGER;
    let revision!: INTEGER;
    majorVersion = $._decodeInteger(sequence[0]);
    minorVersion = $._decodeInteger(sequence[1]);
    revision = $._decodeInteger(sequence[2]);
    return new TCGSpecificationVersion(
        majorVersion,
        minorVersion,
        revision,

    );
}; }
    return _cached_decoder_for_TCGSpecificationVersion(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TCGSpecificationVersion */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TCGSpecificationVersion */
let _cached_encoder_for_TCGSpecificationVersion: $.ASN1Encoder<TCGSpecificationVersion> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TCGSpecificationVersion */

/* START_OF_SYMBOL_DEFINITION _encode_TCGSpecificationVersion */
/**
 * @summary Encodes a(n) TCGSpecificationVersion into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TCGSpecificationVersion, encoded as an ASN.1 Element.
 */
export
function _encode_TCGSpecificationVersion (value: TCGSpecificationVersion, elGetter: $.ASN1Encoder<TCGSpecificationVersion>) {
    if (!_cached_encoder_for_TCGSpecificationVersion) { _cached_encoder_for_TCGSpecificationVersion = function (value: TCGSpecificationVersion): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeInteger(value.majorVersion, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.minorVersion, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.revision, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TCGSpecificationVersion(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TCGSpecificationVersion */

/* eslint-enable */
