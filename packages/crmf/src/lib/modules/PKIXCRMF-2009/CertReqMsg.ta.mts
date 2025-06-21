/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
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
 * @class
 */
export class CertReqMsg {
    constructor(
        /**
         * @summary `certReq`.
         * @public
         * @readonly
         */
        readonly certReq: CertRequest,
        /**
         * @summary `popo`.
         * @public
         * @readonly
         */
        readonly popo: OPTIONAL<ProofOfPossession>,
        /**
         * @summary `regInfo`.
         * @public
         * @readonly
         */
        readonly regInfo: OPTIONAL<SingleAttribute[]>
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
export function _decode_CertReqMsg(el: _Element) {
    if (!_cached_decoder_for_CertReqMsg) {
        _cached_decoder_for_CertReqMsg = function (el: _Element): CertReqMsg {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let certReq!: CertRequest;
            let popo: OPTIONAL<ProofOfPossession>;
            let regInfo: OPTIONAL<SingleAttribute[]>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
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
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertReqMsg,
                _extension_additions_list_spec_for_CertReqMsg,
                _root_component_type_list_2_spec_for_CertReqMsg,
                undefined
            );
            return new CertReqMsg /* SEQUENCE_CONSTRUCTOR_CALL */(
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
) {
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
