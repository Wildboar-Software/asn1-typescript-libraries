/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CscaMasterListVersion, _decode_CscaMasterListVersion, _encode_CscaMasterListVersion } from "../CscaMasterList/CscaMasterListVersion.ta.mjs";
// export { CscaMasterListVersion, CscaMasterListVersion_v0 /* IMPORTED_LONG_NAMED_INTEGER */, v0 /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_CscaMasterListVersion, _encode_CscaMasterListVersion } from "../CscaMasterList/CscaMasterListVersion.ta.mjs";
import { Certificate, _decode_Certificate, _encode_Certificate } from "../AuthenticationFramework/Certificate.ta.mjs";
// export { Certificate, _decode_Certificate, _encode_Certificate } from "../AuthenticationFramework/Certificate.ta.mjs";


/**
 * @summary CscaMasterList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CscaMasterList ::= SEQUENCE {
 *     version     CscaMasterListVersion,
 *     certList    SET OF Certificate
 * }
 * ```
 * 
 * @class
 */
export
class CscaMasterList {
    constructor (
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: CscaMasterListVersion,
        /**
         * @summary `certList`.
         * @public
         * @readonly
         */
        readonly certList: Certificate[]
    ) {}

    /**
     * @summary Restructures an object into a CscaMasterList
     * @description
     * 
     * This takes an `object` and converts it to a `CscaMasterList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CscaMasterList`.
     * @returns {CscaMasterList}
     */
    public static _from_object (_o: { [_K in keyof (CscaMasterList)]: (CscaMasterList)[_K] }): CscaMasterList {
        return new CscaMasterList(_o.version, _o.certList);
    }


}

/**
 * @summary The Leading Root Component Types of CscaMasterList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CscaMasterList: $.ComponentSpec[] = [
    new $.ComponentSpec("version", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("certList", false, $.hasTag(_TagClass.universal, 17))
];

/**
 * @summary The Trailing Root Component Types of CscaMasterList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CscaMasterList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CscaMasterList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CscaMasterList: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CscaMasterList: $.ASN1Decoder<CscaMasterList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CscaMasterList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CscaMasterList (el: _Element): CscaMasterList {
    if (!_cached_decoder_for_CscaMasterList) { _cached_decoder_for_CscaMasterList = function (el: _Element): CscaMasterList {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("CscaMasterList contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "version";
    sequence[1].name = "certList";
    let version!: CscaMasterListVersion;
    let certList!: Certificate[];
    version = _decode_CscaMasterListVersion(sequence[0]);
    certList = $._decodeSetOf<Certificate>(() => _decode_Certificate)(sequence[1]);
    return new CscaMasterList(
        version,
        certList,

    );
}; }
    return _cached_decoder_for_CscaMasterList(el);
}

let _cached_encoder_for_CscaMasterList: $.ASN1Encoder<CscaMasterList> | null = null;

/**
 * @summary Encodes a(n) CscaMasterList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CscaMasterList, encoded as an ASN.1 Element.
 */
export
function _encode_CscaMasterList (value: CscaMasterList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CscaMasterList) { _cached_encoder_for_CscaMasterList = function (value: CscaMasterList, elGetter: $.ASN1Encoder<CscaMasterList>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_CscaMasterListVersion(value.version, $.BER),
            /* REQUIRED   */ $._encodeSetOf<Certificate>(() => _encode_Certificate, $.BER)(value.certList, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CscaMasterList(value, elGetter);
}


/* eslint-enable */
