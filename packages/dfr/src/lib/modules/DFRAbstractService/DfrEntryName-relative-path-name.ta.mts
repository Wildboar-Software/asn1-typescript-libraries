/* eslint-disable */
import {
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
import { DfrUniquePermanentIdentifier, _decode_DfrUniquePermanentIdentifier, _encode_DfrUniquePermanentIdentifier } from "../DFRAbstractService/DfrUniquePermanentIdentifier.ta.mjs";
import { DfrPathName, _decode_DfrPathName, _encode_DfrPathName } from "../DFRAbstractService/DfrPathName.ta.mjs";


/**
 * @summary DfrEntryName_relative_path_name
 * @description
 *
 * Path from an intermediate group (`base` UPI) rather than the root. Useful as
 * a working domain. ISO/IEC 10166-1:1991 §8.1.4.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DfrEntryName-relative-path-name ::= SEQUENCE {
 *             base        [0] DfrUniquePermanentIdentifier,
 *             path        [1] DfrPathName
 *         }
 * ```
 * 
 * @class
 */
export
class DfrEntryName_relative_path_name {
    constructor (
        /**
         * @summary `base`.
         * @description
         *
         * UPI of the group the relative path starts from.
         * @public
         * @readonly
         */
        readonly base: DfrUniquePermanentIdentifier,
        /**
         * @summary `path`.
         * @description
         *
         * Titles from that group down to the target.
         * @public
         * @readonly
         */
        readonly path: DfrPathName
    ) {}

    /**
     * @summary Restructures an object into a DfrEntryName_relative_path_name
     * @description
     * 
     * This takes an `object` and converts it to a `DfrEntryName_relative_path_name`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DfrEntryName_relative_path_name`.
     * @returns {DfrEntryName_relative_path_name}
     */
    public static _from_object (_o: { [_K in keyof (DfrEntryName_relative_path_name)]: (DfrEntryName_relative_path_name)[_K] }): DfrEntryName_relative_path_name {
        return new DfrEntryName_relative_path_name(_o.base, _o.path);
    }


}

/**
 * @summary The Leading Root Component Types of DfrEntryName_relative_path_name
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DfrEntryName_relative_path_name: $.ComponentSpec[] = [
    new $.ComponentSpec("base", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("path", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of DfrEntryName_relative_path_name
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DfrEntryName_relative_path_name: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DfrEntryName_relative_path_name
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DfrEntryName_relative_path_name: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DfrEntryName_relative_path_name: $.ASN1Decoder<DfrEntryName_relative_path_name> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DfrEntryName_relative_path_name
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DfrEntryName_relative_path_name (el: _Element): DfrEntryName_relative_path_name {
    if (!_cached_decoder_for_DfrEntryName_relative_path_name) { _cached_decoder_for_DfrEntryName_relative_path_name = function (el: _Element): DfrEntryName_relative_path_name {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("DfrEntryName-relative-path-name contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "base";
    sequence[1].name = "path";
    let base!: DfrUniquePermanentIdentifier;
    let path!: DfrPathName;
    base = $._decode_implicit<DfrUniquePermanentIdentifier>(() => _decode_DfrUniquePermanentIdentifier)(sequence[0]);
    path = $._decode_implicit<DfrPathName>(() => _decode_DfrPathName)(sequence[1]);
    return new DfrEntryName_relative_path_name(
        base,
        path,

    );
}; }
    return _cached_decoder_for_DfrEntryName_relative_path_name(el);
}

let _cached_encoder_for_DfrEntryName_relative_path_name: $.ASN1Encoder<DfrEntryName_relative_path_name> | null = null;

/**
 * @summary Encodes a(n) DfrEntryName_relative_path_name into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DfrEntryName_relative_path_name, encoded as an ASN.1 Element.
 */
export
function _encode_DfrEntryName_relative_path_name (value: DfrEntryName_relative_path_name, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DfrEntryName_relative_path_name) { _cached_encoder_for_DfrEntryName_relative_path_name = function (value: DfrEntryName_relative_path_name): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_DfrUniquePermanentIdentifier, $.BER)(value.base, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_DfrPathName, $.BER)(value.path, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DfrEntryName_relative_path_name(value, elGetter);
}


/* eslint-enable */
