/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    CertTemplate,
    _decode_CertTemplate,
    _encode_CertTemplate,
} from "../PKIXCRMF-2009/CertTemplate.ta.mjs";
import {
    Controls,
    _decode_Controls,
    _encode_Controls,
} from "../PKIXCRMF-2009/Controls.ta.mjs";

/**
 * @summary CertRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertRequest ::= SEQUENCE {
 *     certReqId     INTEGER,
 *     -- ID for matching request and reply
 *     certTemplate  CertTemplate,
 *     -- Selected fields of cert to be issued
 *     controls      Controls OPTIONAL }
 * ```
 *
 */
export class CertRequest {
    constructor(
        /**
         * @summary `certReqId`.
         * @public
         * @readonly
         */
        readonly certReqId: INTEGER,
        /**
         * @summary `certTemplate`.
         * @public
         * @readonly
         */
        readonly certTemplate: CertTemplate,
        /**
         * @summary `controls`.
         * @public
         * @readonly
         */
        readonly controls: OPTIONAL<Controls>
    ) {}

    /**
     * @summary Restructures an object into a CertRequest
     * @description
     *
     * This takes an `object` and converts it to a `CertRequest`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertRequest`.
     * @returns {CertRequest}
     */
    public static _from_object(
        _o: { [_K in keyof CertRequest]: CertRequest[_K] }
    ): CertRequest {
        return new CertRequest(_o.certReqId, _o.certTemplate, _o.controls);
    }
}


/**
 * @summary The Leading Root Component Types of CertRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertRequest: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "certReqId",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "certTemplate",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "controls",
        true,
        $.hasTag(_TagClass.universal, 16)
    ),
];


/**
 * @summary The Trailing Root Component Types of CertRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertRequest: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of CertRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertRequest: $.ComponentSpec[] = [];


let _cached_decoder_for_CertRequest: $.ASN1Decoder<CertRequest> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) CertRequest
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertRequest} The decoded data structure.
 */
export function _decode_CertRequest(el: _Element): CertRequest {
    if (!_cached_decoder_for_CertRequest) {
        _cached_decoder_for_CertRequest = function (el: _Element): CertRequest {
            let certReqId!: INTEGER;
            let certTemplate!: CertTemplate;
            let controls: OPTIONAL<Controls>;
            const callbacks: $.DecodingMap = {
                certReqId: (_el: _Element): void => {
                    certReqId = $._decodeInteger(_el);
                },
                certTemplate: (_el: _Element): void => {
                    certTemplate = _decode_CertTemplate(_el);
                },
                controls: (_el: _Element): void => {
                    controls = _decode_Controls(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertRequest,
                _extension_additions_list_spec_for_CertRequest,
                _root_component_type_list_2_spec_for_CertRequest,
                undefined
            );
            return new CertRequest (
                certReqId,
                certTemplate,
                controls
            );
        };
    }
    return _cached_decoder_for_CertRequest(el);
}


let _cached_encoder_for_CertRequest: $.ASN1Encoder<CertRequest> | null = null;


/**
 * @summary Encodes a(n) CertRequest into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertRequest, encoded as an ASN.1 Element.
 */
export function _encode_CertRequest(
    value: CertRequest,
    elGetter: $.ASN1Encoder<CertRequest>
): _Element {
    if (!_cached_encoder_for_CertRequest) {
        _cached_encoder_for_CertRequest = function (
            value: CertRequest        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeInteger(
                            value.certReqId,
                            $.DER
                        ),
                        /* REQUIRED   */ _encode_CertTemplate(
                            value.certTemplate,
                            $.DER
                        ),
                        /* IF_ABSENT  */ value.controls === undefined
                            ? undefined
                            : _encode_Controls(value.controls, $.DER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_CertRequest(value, elGetter);
}


/* eslint-enable */
