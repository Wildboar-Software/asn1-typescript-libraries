/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    SingleAttribute,
    _decode_SingleAttribute,
    _encode_SingleAttribute,
} from "../PKIX-CommonTypes-2009/SingleAttribute.ta.mjs";
import {
    CertRequest,
    _decode_CertRequest,
    _encode_CertRequest,
} from "../PKIXCRMF-2009/CertRequest.ta.mjs";
import {
    ProofOfPossession,
    _decode_ProofOfPossession,
    _encode_ProofOfPossession,
} from "../PKIXCRMF-2009/ProofOfPossession.ta.mjs";

/**
 * @summary CertReqMsg
 * @description
 *
 * Single certificate request message: template/`CertRequest`,
 * optional proof-of-possession, optional registration info
 * ([RFC 4211 §3](https://datatracker.ietf.org/doc/html/rfc4211#section-3)).
 *
 * Content for the certificate SHOULD go in `certReq`; `regInfo`
 * SHOULD hold only supplementary context. Data intended for
 * certificate content MAY appear in `regInfo` when RA additions
 * would invalidate `popo`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertReqMsg ::= SEQUENCE {
 *     certReq   CertRequest,
 *     popo       ProofOfPossession  OPTIONAL,
 *     -- content depends upon key type
 *     regInfo   SEQUENCE SIZE(1..MAX) OF
 *         SingleAttribute{{RegInfoSet}} OPTIONAL }
 * ```
 *
 */
export class CertReqMsg {
    constructor(
        /**
         * @summary `certReq`.
         * @description
         *
         * Template of the certificate being requested, filled in by
         * (or on behalf of) the Subject; not all template fields need
         * be specified ([RFC 4211 §3](https://datatracker.ietf.org/doc/html/rfc4211#section-3), §5).
         *
         * @public
         * @readonly
         */
        readonly certReq: CertRequest,
        /**
         * @summary `popo`.
         * @description
         *
         * Proof that the entity identified as Subject possesses the
         * corresponding private key. Structure depends on public-key
         * algorithm and intended key usage
         * ([RFC 4211 §3](https://datatracker.ietf.org/doc/html/rfc4211#section-3), §4). Omit when POP is done
         * out-of-band.
         *
         * @public
         * @readonly
         */
        readonly popo?: OPTIONAL<ProofOfPossession>,
        /**
         * @summary `regInfo`.
         * @description
         *
         * Supplementary information for fulfilling the request (contact,
         * billing, ancillary data). SHOULD NOT duplicate certificate
         * content that belongs in `certReq` ([RFC 4211 §3](https://datatracker.ietf.org/doc/html/rfc4211#section-3)).
         * Controls for this field: §7 (`utf8Pairs`, `certReq`).
         *
         * @public
         * @readonly
         */
        readonly regInfo?: OPTIONAL<SingleAttribute[]>
    ) {}

    /**
     * @summary Restructures an object into a CertReqMsg
     * @description
     *
     * This takes an `object` and converts it to a `CertReqMsg`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertReqMsg`.
     * @returns {CertReqMsg}
     */
    public static _from_object(
        _o: { [_K in keyof CertReqMsg]: CertReqMsg[_K] }
    ): CertReqMsg {
        return new CertReqMsg(_o.certReq, _o.popo, _o.regInfo);
    }
}


/**
 * @summary The Leading Root Component Types of CertReqMsg
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertReqMsg: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "certReq",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec("popo", true, $.hasAnyTag),
    new $.ComponentSpec(
        "regInfo",
        true,
        $.hasTag(_TagClass.universal, 16)
    ),
];


/**
 * @summary The Trailing Root Component Types of CertReqMsg
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertReqMsg: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of CertReqMsg
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertReqMsg: $.ComponentSpec[] = [];


let _cached_decoder_for_CertReqMsg: $.ASN1Decoder<CertReqMsg> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) CertReqMsg
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertReqMsg} The decoded data structure.
 */
export function _decode_CertReqMsg(el: _Element): CertReqMsg {
    if (!_cached_decoder_for_CertReqMsg) {
        _cached_decoder_for_CertReqMsg = function (el: _Element): CertReqMsg {
            let certReq!: CertRequest;
            let popo: OPTIONAL<ProofOfPossession>;
            let regInfo: OPTIONAL<SingleAttribute[]>;
            const callbacks: $.DecodingMap = {
                certReq: (_el: _Element): void => {
                    certReq = _decode_CertRequest(_el);
                },
                popo: (_el: _Element): void => {
                    popo = _decode_ProofOfPossession(_el);
                },
                regInfo: (_el: _Element): void => {
                    regInfo = $._decodeSequenceOf<SingleAttribute>(
                        () => _decode_SingleAttribute
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertReqMsg,
                _extension_additions_list_spec_for_CertReqMsg,
                _root_component_type_list_2_spec_for_CertReqMsg,
                undefined
            );
            return new CertReqMsg (
                certReq,
                popo,
                regInfo
            );
        };
    }
    return _cached_decoder_for_CertReqMsg(el);
}


let _cached_encoder_for_CertReqMsg: $.ASN1Encoder<CertReqMsg> | null = null;


/**
 * @summary Encodes a(n) CertReqMsg into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertReqMsg, encoded as an ASN.1 Element.
 */
export function _encode_CertReqMsg(
    value: CertReqMsg,
    elGetter: $.ASN1Encoder<CertReqMsg>
): _Element {
    if (!_cached_encoder_for_CertReqMsg) {
        _cached_encoder_for_CertReqMsg = function (
            value: CertReqMsg        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_CertRequest(
                            value.certReq,
                            $.DER
                        ),
                        /* IF_ABSENT  */ value.popo === undefined
                            ? undefined
                            : _encode_ProofOfPossession(value.popo, $.DER),
                        /* IF_ABSENT  */ value.regInfo === undefined
                            ? undefined
                            : $._encodeSequenceOf<SingleAttribute>(
                                  () => _encode_SingleAttribute,
                                  $.DER
                              )(value.regInfo, $.DER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_CertReqMsg(value, elGetter);
}


/* eslint-enable */
