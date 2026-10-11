/* eslint-disable */
import {
    INTEGER,
    OBJECT_IDENTIFIER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1Error,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "../AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
import { id_PACE_DH_GM } from "../Doc-9303-Part-11-Module/id-PACE-DH-GM.va.mjs";
import { id_PACE_ECDH_GM } from "../Doc-9303-Part-11-Module/id-PACE-ECDH-GM.va.mjs";
import { id_PACE_DH_IM } from "../Doc-9303-Part-11-Module/id-PACE-DH-IM.va.mjs";
import { id_PACE_ECDH_IM } from "../Doc-9303-Part-11-Module/id-PACE-ECDH-IM.va.mjs";
import { id_PACE_ECDH_CAM } from "../Doc-9303-Part-11-Module/id-PACE-ECDH-CAM.va.mjs";

const _permitted_protocols_for_PACEDomainParameterInfo: OBJECT_IDENTIFIER[] = [
    id_PACE_DH_GM,
    id_PACE_ECDH_GM,
    id_PACE_DH_IM,
    id_PACE_ECDH_IM,
    id_PACE_ECDH_CAM,
];
// export { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "../AuthenticationFramework/AlgorithmIdentifier.ta.mjs";


/**
 * @summary PACEDomainParameterInfo
 * @description
 *
 * Explicit PACE domain parameters. Required when the chip provides them, and
 * omitted otherwise. The chip must still support at least one standardized
 * set (section 9.5.1).
 *
 * These parameters are unprotected and may be insecure. Insecure parameters
 * leak the password. An inspection system must not use them unless it
 * already knows that set to be secure. Ephemeral public keys are exchanged
 * as plain public-key values (section 9.4.5).
 *
 * `parameterId` is required when the chip publishes more than one explicit
 * set.
 *
 * Doc 9303-11, section 9.2.2.
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
         * Key agreement and mapping for these parameters: a `PACE` family
         * object identifier such as `id-PACE-DH-GM`, not a cipher-specific
         * child.
         * @summary `protocol`.
         * @public
         * @readonly
         */
        readonly protocol: OBJECT_IDENTIFIER,
        /**
         * The explicit domain parameters.
         * @summary `domainParameter`.
         * @public
         * @readonly
         */
        readonly domainParameter: AlgorithmIdentifier,
        /**
         * Local identifier of this parameter set. Required when the chip
         * publishes more than one explicit set.
         * @summary `parameterId`.
         * @public
         * @readonly
         */
        readonly parameterId: OPTIONAL<INTEGER>
    ) {
        if (!_permitted_protocols_for_PACEDomainParameterInfo.some((id) => id.isEqualTo(protocol))) {
            throw new ASN1Error("PACEDomainParameterInfo.protocol violates permitted OBJECT IDENTIFIER constraint");
        }
    }

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
