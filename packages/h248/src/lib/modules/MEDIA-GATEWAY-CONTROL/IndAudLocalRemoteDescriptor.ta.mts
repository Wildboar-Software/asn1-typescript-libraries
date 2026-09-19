/* eslint-disable */
import {
    INTEGER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IndAudPropertyGroup, _decode_IndAudPropertyGroup, _encode_IndAudPropertyGroup } from "../MEDIA-GATEWAY-CONTROL/IndAudPropertyGroup.ta.mjs";
// export { IndAudPropertyGroup, _decode_IndAudPropertyGroup, _encode_IndAudPropertyGroup } from "../MEDIA-GATEWAY-CONTROL/IndAudPropertyGroup.ta.mjs";


/**
 * @summary IndAudLocalRemoteDescriptor
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IndAudLocalRemoteDescriptor ::= SEQUENCE
 *     {
 *         propGroupID                    [0] INTEGER(0..65535) OPTIONAL,
 *         propGrps                    [1] IndAudPropertyGroup,
 *         ...
 *     }
 * ```
 * 
 * @class
 */
export
class IndAudLocalRemoteDescriptor {
    constructor (
        /**
         * @summary `propGroupID`.
         * @public
         * @readonly
         */
        readonly propGroupID: OPTIONAL<INTEGER>,
        /**
         * @summary `propGrps`.
         * @public
         * @readonly
         */
        readonly propGrps: IndAudPropertyGroup,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a IndAudLocalRemoteDescriptor
     * @description
     * 
     * This takes an `object` and converts it to a `IndAudLocalRemoteDescriptor`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IndAudLocalRemoteDescriptor`.
     * @returns {IndAudLocalRemoteDescriptor}
     */
    public static _from_object (_o: { [_K in keyof (IndAudLocalRemoteDescriptor)]: (IndAudLocalRemoteDescriptor)[_K] }): IndAudLocalRemoteDescriptor {
        return new IndAudLocalRemoteDescriptor(_o.propGroupID, _o.propGrps, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of IndAudLocalRemoteDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IndAudLocalRemoteDescriptor: $.ComponentSpec[] = [
    new $.ComponentSpec("propGroupID", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("propGrps", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of IndAudLocalRemoteDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IndAudLocalRemoteDescriptor: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IndAudLocalRemoteDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IndAudLocalRemoteDescriptor: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IndAudLocalRemoteDescriptor: $.ASN1Decoder<IndAudLocalRemoteDescriptor> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IndAudLocalRemoteDescriptor
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IndAudLocalRemoteDescriptor (el: _Element): IndAudLocalRemoteDescriptor {
    if (!_cached_decoder_for_IndAudLocalRemoteDescriptor) { _cached_decoder_for_IndAudLocalRemoteDescriptor = function (el: _Element): IndAudLocalRemoteDescriptor {
    let propGroupID: OPTIONAL<INTEGER>;
    let propGrps!: IndAudPropertyGroup;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "propGroupID": (_el: _Element): void => { propGroupID = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "propGrps": (_el: _Element): void => { propGrps = $._decode_implicit<IndAudPropertyGroup>(() => _decode_IndAudPropertyGroup)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IndAudLocalRemoteDescriptor,
        _extension_additions_list_spec_for_IndAudLocalRemoteDescriptor,
        _root_component_type_list_2_spec_for_IndAudLocalRemoteDescriptor,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new IndAudLocalRemoteDescriptor(
        propGroupID,
        propGrps,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_IndAudLocalRemoteDescriptor(el);
}

let _cached_encoder_for_IndAudLocalRemoteDescriptor: $.ASN1Encoder<IndAudLocalRemoteDescriptor> | null = null;

/**
 * @summary Encodes a(n) IndAudLocalRemoteDescriptor into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IndAudLocalRemoteDescriptor, encoded as an ASN.1 Element.
 */
export
function _encode_IndAudLocalRemoteDescriptor (value: IndAudLocalRemoteDescriptor, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IndAudLocalRemoteDescriptor) { _cached_encoder_for_IndAudLocalRemoteDescriptor = function (value: IndAudLocalRemoteDescriptor, elGetter: $.ASN1Encoder<IndAudLocalRemoteDescriptor>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.propGroupID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.propGroupID, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_IndAudPropertyGroup, $.BER)(value.propGrps, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IndAudLocalRemoteDescriptor(value, elGetter);
}


/* eslint-enable */
