/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SrhrGroupID, _decode_SrhrGroupID, _encode_SrhrGroupID } from "../AIN-Parameters/SrhrGroupID.ta.mjs";
// export { SrhrGroupID, _decode_SrhrGroupID, _encode_SrhrGroupID } from "../AIN-Parameters/SrhrGroupID.ta.mjs";
import { SrhrID, _decode_SrhrID, _encode_SrhrID } from "../AIN-Parameters/SrhrID.ta.mjs";
// export { SrhrID, _decode_SrhrID, _encode_SrhrID } from "../AIN-Parameters/SrhrID.ta.mjs";


/**
 * @summary SrhrGroup
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SrhrGroup ::= [104] IMPLICIT SEQUENCE{
 *         srhrGroupID SrhrGroupID, --see Section 6.130 for encoding
 *         srhrID [1] IMPLICIT SrhrID OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class SrhrGroup {
    constructor (
        /**
         * @summary `srhrGroupID`.
         * @public
         * @readonly
         */
        readonly srhrGroupID: SrhrGroupID,
        /**
         * @summary `srhrID`.
         * @public
         * @readonly
         */
        readonly srhrID: OPTIONAL<SrhrID>
    ) {}

    /**
     * @summary Restructures an object into a SrhrGroup
     * @description
     * 
     * This takes an `object` and converts it to a `SrhrGroup`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SrhrGroup`.
     * @returns {SrhrGroup}
     */
    public static _from_object (_o: { [_K in keyof (SrhrGroup)]: (SrhrGroup)[_K] }): SrhrGroup {
        return new SrhrGroup(_o.srhrGroupID, _o.srhrID);
    }


}

/**
 * @summary The Leading Root Component Types of SrhrGroup
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SrhrGroup: $.ComponentSpec[] = [
    new $.ComponentSpec("srhrGroupID", false, $.hasTag(_TagClass.context, 77)),
    new $.ComponentSpec("srhrID", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of SrhrGroup
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SrhrGroup: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SrhrGroup
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SrhrGroup: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SrhrGroup: $.ASN1Decoder<SrhrGroup> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SrhrGroup
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SrhrGroup (el: _Element): SrhrGroup {
    if (!_cached_decoder_for_SrhrGroup) { _cached_decoder_for_SrhrGroup = $._decode_implicit<SrhrGroup>(() => function (el: _Element): SrhrGroup {
    let srhrGroupID!: SrhrGroupID;
    let srhrID: OPTIONAL<SrhrID>;
    const callbacks: $.DecodingMap = {
        "srhrGroupID": (_el: _Element): void => { srhrGroupID = _decode_SrhrGroupID(_el); },
        "srhrID": (_el: _Element): void => { srhrID = $._decode_implicit<SrhrID>(() => _decode_SrhrID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SrhrGroup,
        _extension_additions_list_spec_for_SrhrGroup,
        _root_component_type_list_2_spec_for_SrhrGroup,
        undefined,
    );
    return new SrhrGroup(
        srhrGroupID,
        srhrID
    );
}); }
    return _cached_decoder_for_SrhrGroup(el);
}

let _cached_encoder_for_SrhrGroup: $.ASN1Encoder<SrhrGroup> | null = null;

/**
 * @summary Encodes a(n) SrhrGroup into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SrhrGroup, encoded as an ASN.1 Element.
 */
export
function _encode_SrhrGroup (value: SrhrGroup, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SrhrGroup) { _cached_encoder_for_SrhrGroup = $._encode_implicit(_TagClass.context, 104, () => function (value: SrhrGroup, elGetter: $.ASN1Encoder<SrhrGroup>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_SrhrGroupID(value.srhrGroupID, $.BER),
            /* IF_ABSENT  */ ((value.srhrID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_SrhrID, $.BER)(value.srhrID, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_SrhrGroup(value, elGetter);
}


/* eslint-enable */
