/* eslint-disable */
import {
    INTEGER,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Name, _decode_Name, _encode_Name } from "../MEDIA-GATEWAY-CONTROL/Name.ta.mjs";
// export { Name, _decode_Name, _encode_Name } from "../MEDIA-GATEWAY-CONTROL/Name.ta.mjs";


/**
 * @summary IndAudPackagesDescriptor
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IndAudPackagesDescriptor ::= SEQUENCE
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
class IndAudPackagesDescriptor {
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
     * @summary Restructures an object into a IndAudPackagesDescriptor
     * @description
     * 
     * This takes an `object` and converts it to a `IndAudPackagesDescriptor`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IndAudPackagesDescriptor`.
     * @returns {IndAudPackagesDescriptor}
     */
    public static _from_object (_o: { [_K in keyof (IndAudPackagesDescriptor)]: (IndAudPackagesDescriptor)[_K] }): IndAudPackagesDescriptor {
        return new IndAudPackagesDescriptor(_o.packageName, _o.packageVersion, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of IndAudPackagesDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IndAudPackagesDescriptor: $.ComponentSpec[] = [
    new $.ComponentSpec("packageName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("packageVersion", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of IndAudPackagesDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IndAudPackagesDescriptor: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IndAudPackagesDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IndAudPackagesDescriptor: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IndAudPackagesDescriptor: $.ASN1Decoder<IndAudPackagesDescriptor> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IndAudPackagesDescriptor
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IndAudPackagesDescriptor (el: _Element): IndAudPackagesDescriptor {
    if (!_cached_decoder_for_IndAudPackagesDescriptor) { _cached_decoder_for_IndAudPackagesDescriptor = function (el: _Element): IndAudPackagesDescriptor {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("IndAudPackagesDescriptor contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "packageName";
    sequence[1].name = "packageVersion";
    let packageName!: Name;
    let packageVersion!: INTEGER;
    packageName = $._decode_implicit<Name>(() => _decode_Name)(sequence[0]);
    packageVersion = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[1]);
    return new IndAudPackagesDescriptor(
        packageName,
        packageVersion,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_IndAudPackagesDescriptor(el);
}

let _cached_encoder_for_IndAudPackagesDescriptor: $.ASN1Encoder<IndAudPackagesDescriptor> | null = null;

/**
 * @summary Encodes a(n) IndAudPackagesDescriptor into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IndAudPackagesDescriptor, encoded as an ASN.1 Element.
 */
export
function _encode_IndAudPackagesDescriptor (value: IndAudPackagesDescriptor, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IndAudPackagesDescriptor) { _cached_encoder_for_IndAudPackagesDescriptor = function (value: IndAudPackagesDescriptor, elGetter: $.ASN1Encoder<IndAudPackagesDescriptor>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_Name, $.BER)(value.packageName, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.packageVersion, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IndAudPackagesDescriptor(value, elGetter);
}


/* eslint-enable */
