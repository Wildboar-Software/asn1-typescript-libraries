/* eslint-disable */
import {
    INTEGER,
    OBJECT_IDENTIFIER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "../AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
// export { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "../AuthenticationFramework/AlgorithmIdentifier.ta.mjs";


/**
 * @summary PACEDomainParameterInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PACEDomainParameterInfo ::= SEQUENCE {
 *     protocol        OBJECT IDENTIFIER(
 *         id-PACE-DH-GM
 *         | id-PACE-ECDH-GM
 *         | id-PACE-DH-IM
 *         | id-PACE-ECDH-IM
 *         | id-PACE-ECDH-CAM
 *     ),
 *     domainParameter AlgorithmIdentifier,
 *     parameterId     INTEGER OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class PACEDomainParameterInfo {
    constructor (
        /**
         * @summary `protocol`.
         * @public
         * @readonly
         */
        readonly protocol: OBJECT_IDENTIFIER,
        /**
         * @summary `domainParameter`.
         * @public
         * @readonly
         */
        readonly domainParameter: AlgorithmIdentifier,
        /**
         * @summary `parameterId`.
         * @public
         * @readonly
         */
        readonly parameterId: OPTIONAL<INTEGER>
    ) {}

    /**
     * @summary Restructures an object into a PACEDomainParameterInfo
     * @description
     * 
     * This takes an `object` and converts it to a `PACEDomainParameterInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PACEDomainParameterInfo`.
     * @returns {PACEDomainParameterInfo}
     */
    public static _from_object (_o: { [_K in keyof (PACEDomainParameterInfo)]: (PACEDomainParameterInfo)[_K] }): PACEDomainParameterInfo {
        return new PACEDomainParameterInfo(_o.protocol, _o.domainParameter, _o.parameterId);
    }


}

/**
 * @summary The Leading Root Component Types of PACEDomainParameterInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PACEDomainParameterInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("protocol", false, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("domainParameter", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("parameterId", true, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of PACEDomainParameterInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PACEDomainParameterInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PACEDomainParameterInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PACEDomainParameterInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PACEDomainParameterInfo: $.ASN1Decoder<PACEDomainParameterInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PACEDomainParameterInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PACEDomainParameterInfo (el: _Element): PACEDomainParameterInfo {
    if (!_cached_decoder_for_PACEDomainParameterInfo) { _cached_decoder_for_PACEDomainParameterInfo = function (el: _Element): PACEDomainParameterInfo {
    let protocol!: OBJECT_IDENTIFIER;
    let domainParameter!: AlgorithmIdentifier;
    let parameterId: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "protocol": (_el: _Element): void => { protocol = $._decodeObjectIdentifier(_el); },
        "domainParameter": (_el: _Element): void => { domainParameter = _decode_AlgorithmIdentifier(_el); },
        "parameterId": (_el: _Element): void => { parameterId = $._decodeInteger(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PACEDomainParameterInfo,
        _extension_additions_list_spec_for_PACEDomainParameterInfo,
        _root_component_type_list_2_spec_for_PACEDomainParameterInfo,
        undefined,
    );
    return new PACEDomainParameterInfo(
        protocol,
        domainParameter,
        parameterId
    );
}; }
    return _cached_decoder_for_PACEDomainParameterInfo(el);
}

let _cached_encoder_for_PACEDomainParameterInfo: $.ASN1Encoder<PACEDomainParameterInfo> | null = null;

/**
 * @summary Encodes a(n) PACEDomainParameterInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PACEDomainParameterInfo, encoded as an ASN.1 Element.
 */
export
function _encode_PACEDomainParameterInfo (value: PACEDomainParameterInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PACEDomainParameterInfo) { _cached_encoder_for_PACEDomainParameterInfo = function (value: PACEDomainParameterInfo, elGetter: $.ASN1Encoder<PACEDomainParameterInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeObjectIdentifier(value.protocol, $.BER),
            /* REQUIRED   */ _encode_AlgorithmIdentifier(value.domainParameter, $.BER),
            /* IF_ABSENT  */ ((value.parameterId === undefined) ? undefined : $._encodeInteger(value.parameterId, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PACEDomainParameterInfo(value, elGetter);
}


/* eslint-enable */
