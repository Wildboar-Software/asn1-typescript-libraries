/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMSVersion
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSVersion ::= SEQUENCE
 * {
 *     majorVersion [1] INTEGER,
 *     minorVersion [2] INTEGER
 * }
 * ```
 * 
 * @class
 */
export
class MMSVersion {
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
        readonly minorVersion: INTEGER
    ) {}

    /**
     * @summary Restructures an object into a MMSVersion
     * @description
     * 
     * This takes an `object` and converts it to a `MMSVersion`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MMSVersion`.
     * @returns {MMSVersion}
     */
    public static _from_object (_o: { [_K in keyof (MMSVersion)]: (MMSVersion)[_K] }): MMSVersion {
        return new MMSVersion(_o.majorVersion, _o.minorVersion);
    }


}

/**
 * @summary The Leading Root Component Types of MMSVersion
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MMSVersion: $.ComponentSpec[] = [
    new $.ComponentSpec("majorVersion", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("minorVersion", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of MMSVersion
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MMSVersion: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MMSVersion
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MMSVersion: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MMSVersion: $.ASN1Decoder<MMSVersion> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMSVersion
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMSVersion (el: _Element): MMSVersion {
    if (!_cached_decoder_for_MMSVersion) { _cached_decoder_for_MMSVersion = function (el: _Element): MMSVersion {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("MMSVersion contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "majorVersion";
    sequence[1].name = "minorVersion";
    let majorVersion!: INTEGER;
    let minorVersion!: INTEGER;
    majorVersion = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[0]);
    minorVersion = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[1]);
    return new MMSVersion(
        majorVersion,
        minorVersion,

    );
}; }
    return _cached_decoder_for_MMSVersion(el);
}

let _cached_encoder_for_MMSVersion: $.ASN1Encoder<MMSVersion> | null = null;

/**
 * @summary Encodes a(n) MMSVersion into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMSVersion, encoded as an ASN.1 Element.
 */
export
function _encode_MMSVersion (value: MMSVersion, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMSVersion) { _cached_encoder_for_MMSVersion = function (value: MMSVersion, elGetter: $.ASN1Encoder<MMSVersion>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.majorVersion, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.minorVersion, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MMSVersion(value, elGetter);
}


/* eslint-enable */
