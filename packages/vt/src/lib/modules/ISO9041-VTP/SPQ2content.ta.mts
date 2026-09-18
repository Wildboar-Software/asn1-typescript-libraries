/* eslint-disable */
import {
    OPTIONAL,
    PrintableString,
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
import { _decode_Profile, _encode_Profile, Profile } from "../G/Profile.ta.mjs";
// export { Profile, _decode_Profile, _encode_Profile } from "../G/Profile.ta.mjs";


/**
 * @summary SPQ2content
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SPQ2content ::= SEQUENCE {
 *     profile [0] IMPLICIT G.Profile,
 *     retList [1] IMPLICIT SEQUENCE OF PrintableString OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SPQ2content {
    constructor (
        /**
         * @summary `profile`.
         * @public
         * @readonly
         */
        readonly profile: Profile,
        /**
         * @summary `retList`.
         * @public
         * @readonly
         */
        readonly retList: OPTIONAL<PrintableString[]>
    ) {}

    /**
     * @summary Restructures an object into a SPQ2content
     * @description
     * 
     * This takes an `object` and converts it to a `SPQ2content`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SPQ2content`.
     * @returns {SPQ2content}
     */
    public static _from_object (_o: { [_K in keyof (SPQ2content)]: (SPQ2content)[_K] }): SPQ2content {
        return new SPQ2content(_o.profile, _o.retList);
    }


}

/**
 * @summary The Leading Root Component Types of SPQ2content
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SPQ2content: $.ComponentSpec[] = [
    new $.ComponentSpec("profile", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("retList", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of SPQ2content
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SPQ2content: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SPQ2content
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SPQ2content: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SPQ2content: $.ASN1Decoder<SPQ2content> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SPQ2content
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SPQ2content (el: _Element): SPQ2content {
    if (!_cached_decoder_for_SPQ2content) { _cached_decoder_for_SPQ2content = function (el: _Element): SPQ2content {
    let profile!: Profile;
    let retList: OPTIONAL<PrintableString[]>;
    const callbacks: $.DecodingMap = {
        "profile": (_el: _Element): void => { profile = $._decode_implicit<Profile>(() => _decode_Profile)(_el); },
        "retList": (_el: _Element): void => { retList = $._decode_implicit<PrintableString[]>(() => $._decodeSequenceOf<PrintableString>(() => $._decodePrintableString))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SPQ2content,
        _extension_additions_list_spec_for_SPQ2content,
        _root_component_type_list_2_spec_for_SPQ2content,
        undefined,
    );
    return new SPQ2content(
        profile,
        retList
    );
}; }
    return _cached_decoder_for_SPQ2content(el);
}

let _cached_encoder_for_SPQ2content: $.ASN1Encoder<SPQ2content> | null = null;

/**
 * @summary Encodes a(n) SPQ2content into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SPQ2content, encoded as an ASN.1 Element.
 */
export
function _encode_SPQ2content (value: SPQ2content, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SPQ2content) { _cached_encoder_for_SPQ2content = function (value: SPQ2content): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_Profile, $.BER)(value.profile, $.BER),
            /* IF_ABSENT  */ ((value.retList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<PrintableString>(() => $._encodePrintableString, $.BER), $.BER)(value.retList, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SPQ2content(value, elGetter);
}


/* eslint-enable */
