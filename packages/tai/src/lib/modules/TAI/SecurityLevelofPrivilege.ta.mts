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
import { SecurityLevelofPrivilege_bioSecLevel, _decode_SecurityLevelofPrivilege_bioSecLevel, _encode_SecurityLevelofPrivilege_bioSecLevel } from "../TAI/SecurityLevelofPrivilege-bioSecLevel.ta.mjs";

/**
 * @summary SecurityLevelofPrivilege
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SecurityLevelofPrivilege ::= SEQUENCE {
 *   bioSecLevel
 *     CHOICE {x520identifier    UniqueIdentifierOfBioParaInfo,
 *             simpleidentifier  INTEGER}
 * }
 * ```
 * 
 * @class
 */
export
class SecurityLevelofPrivilege {
    constructor (
        /**
         * @summary `bioSecLevel`.
         * @public
         * @readonly
         */
        readonly bioSecLevel: SecurityLevelofPrivilege_bioSecLevel
    ) {}

    /**
     * @summary Restructures an object into a SecurityLevelofPrivilege
     * @description
     * 
     * This takes an `object` and converts it to a `SecurityLevelofPrivilege`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SecurityLevelofPrivilege`.
     * @returns {SecurityLevelofPrivilege}
     */
    public static _from_object (_o: { [_K in keyof (SecurityLevelofPrivilege)]: (SecurityLevelofPrivilege)[_K] }): SecurityLevelofPrivilege {
        return new SecurityLevelofPrivilege(_o.bioSecLevel);
    }


}

/**
 * @summary The Leading Root Component Types of SecurityLevelofPrivilege
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SecurityLevelofPrivilege: $.ComponentSpec[] = [
    new $.ComponentSpec("bioSecLevel", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of SecurityLevelofPrivilege
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SecurityLevelofPrivilege: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SecurityLevelofPrivilege
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SecurityLevelofPrivilege: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SecurityLevelofPrivilege: $.ASN1Decoder<SecurityLevelofPrivilege> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SecurityLevelofPrivilege
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SecurityLevelofPrivilege} The decoded data structure.
 */
export
function _decode_SecurityLevelofPrivilege (el: _Element): SecurityLevelofPrivilege {
    if (!_cached_decoder_for_SecurityLevelofPrivilege) { _cached_decoder_for_SecurityLevelofPrivilege = function (el: _Element): SecurityLevelofPrivilege {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("SecurityLevelofPrivilege contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "bioSecLevel";
    let bioSecLevel!: SecurityLevelofPrivilege_bioSecLevel;
    bioSecLevel = _decode_SecurityLevelofPrivilege_bioSecLevel(sequence[0]);
    return new SecurityLevelofPrivilege(
        bioSecLevel,

    );
}; }
    return _cached_decoder_for_SecurityLevelofPrivilege(el);
}

let _cached_encoder_for_SecurityLevelofPrivilege: $.ASN1Encoder<SecurityLevelofPrivilege> | null = null;

/**
 * @summary Encodes a(n) SecurityLevelofPrivilege into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecurityLevelofPrivilege, encoded as an ASN.1 Element.
 */
export
function _encode_SecurityLevelofPrivilege (value: SecurityLevelofPrivilege, elGetter: $.ASN1Encoder<SecurityLevelofPrivilege>): _Element {
    if (!_cached_encoder_for_SecurityLevelofPrivilege) { _cached_encoder_for_SecurityLevelofPrivilege = function (value: SecurityLevelofPrivilege): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_SecurityLevelofPrivilege_bioSecLevel(value.bioSecLevel, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SecurityLevelofPrivilege(value, elGetter);
}


/* eslint-enable */
