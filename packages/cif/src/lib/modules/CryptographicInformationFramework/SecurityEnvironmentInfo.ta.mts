/* eslint-disable */
import {
    OPTIONAL,
    INTEGER,
    OCTET_STRING,
    OBJECT_IDENTIFIER,
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



/**
 * @summary SecurityEnvironmentInfo
 * @description
 * 
 * A pre-set Security Environment on the card. ISO/IEC 7816-15:2016 §8.10.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SecurityEnvironmentInfo ::= SEQUENCE {
 *     se      INTEGER,
 *     owner   OBJECT IDENTIFIER OPTIONAL,
 *     aid     OCTET STRING (CONSTRAINED BY {-- Must be encoded in accordance with ISO/IEC 7816-4 --}) OPTIONAL,
 *     ... -- For future extensions
 * }
 * ```
 * 
 * @class
 */
export
class SecurityEnvironmentInfo {
    constructor (
        /**
         * @summary `se`.
         * @description
         * SE number. ISO/IEC 7816-15:2016 §8.10.
         * @public
         * @readonly
         */
        readonly se: INTEGER,
        /**
         * @summary `owner`.
         * @description
         * Owner of the environment. ISO/IEC 7816-15:2016 §8.10.
         * @public
         * @readonly
         */
        readonly owner: OPTIONAL<OBJECT_IDENTIFIER>,
        /**
         * @summary `aid`.
         * @description
         * Application (ISO/IEC 7816-4 AID) for which the SE applies. ISO/IEC
         * 7816-15:2016 §8.10.
         * @public
         * @readonly
         */
        readonly aid: OPTIONAL<OCTET_STRING>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SecurityEnvironmentInfo
     * @description
     * 
     * This takes an `object` and converts it to a `SecurityEnvironmentInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SecurityEnvironmentInfo`.
     * @returns {SecurityEnvironmentInfo}
     */
    public static _from_object (_o: { [_K in keyof (SecurityEnvironmentInfo)]: (SecurityEnvironmentInfo)[_K] }): SecurityEnvironmentInfo {
        return new SecurityEnvironmentInfo(_o.se, _o.owner, _o.aid, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of SecurityEnvironmentInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading
 * root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SecurityEnvironmentInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("se", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("owner", true, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("aid", true, $.hasTag(_TagClass.universal, 4))
];

/**
 * @summary The Trailing Root Component Types of SecurityEnvironmentInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing
 * root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SecurityEnvironmentInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SecurityEnvironmentInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension
 * addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SecurityEnvironmentInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SecurityEnvironmentInfo: $.ASN1Decoder<SecurityEnvironmentInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SecurityEnvironmentInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SecurityEnvironmentInfo (el: _Element): SecurityEnvironmentInfo {
    if (!_cached_decoder_for_SecurityEnvironmentInfo) { _cached_decoder_for_SecurityEnvironmentInfo = function (el: _Element): SecurityEnvironmentInfo {
    let se!: INTEGER;
    let owner: OPTIONAL<OBJECT_IDENTIFIER>;
    let aid: OPTIONAL<OCTET_STRING>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "se": (_el: _Element): void => { se = $._decodeInteger(_el); },
        "owner": (_el: _Element): void => { owner = $._decodeObjectIdentifier(_el); },
        "aid": (_el: _Element): void => { aid = $._decodeOctetString(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SecurityEnvironmentInfo,
        _extension_additions_list_spec_for_SecurityEnvironmentInfo,
        _root_component_type_list_2_spec_for_SecurityEnvironmentInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SecurityEnvironmentInfo(
        se,
        owner,
        aid,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_SecurityEnvironmentInfo(el);
}

let _cached_encoder_for_SecurityEnvironmentInfo: $.ASN1Encoder<SecurityEnvironmentInfo> | null = null;

/**
 * @summary Encodes a(n) SecurityEnvironmentInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecurityEnvironmentInfo, encoded as an ASN.1 Element.
 */
export
function _encode_SecurityEnvironmentInfo (value: SecurityEnvironmentInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SecurityEnvironmentInfo) { _cached_encoder_for_SecurityEnvironmentInfo = function (value: SecurityEnvironmentInfo): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeInteger(value.se, $.BER),
            /* IF_ABSENT  */ ((value.owner === undefined) ? undefined : $._encodeObjectIdentifier(value.owner, $.BER)),
            /* IF_ABSENT  */ ((value.aid === undefined) ? undefined : $._encodeOctetString(value.aid, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SecurityEnvironmentInfo(value, elGetter);
}


/* eslint-enable */
