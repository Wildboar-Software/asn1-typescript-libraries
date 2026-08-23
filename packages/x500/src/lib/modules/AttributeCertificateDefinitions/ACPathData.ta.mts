/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AttributeCertificate,
    _decode_AttributeCertificate,
    _encode_AttributeCertificate,
} from "../AttributeCertificateDefinitions/AttributeCertificate.ta.mjs";
import {
    Certificate,
    _decode_Certificate,
    _encode_Certificate,
} from "../AuthenticationFramework/Certificate.ta.mjs";

/**
 * @summary ACPathData
 * @description
 *
 * One hop in an AC path: optional PKC and/or AC for the same AA. ASN.1
 * allows both absent (treat as an error). SOA may have only a PKC.
 * 
 * It is not clear what the meaning of the fields in each `ACPathData`
 * are. The specification says nothing. I would assume that each field of
 * `ACPathData` must refer to the same subject / holder / person, etc.,
 * and that the purpose for having both is that some attribute certificates
 * refer to the corresponding public key certificate by way of an object
 * digest, so it would be impossible in some cases, to resolve a digest to
 * a public key certificate: the PKC has to be provided. Also, an SOA might
 * not have an attribute certificate, since it is presumed to have all
 * privileges. An attribute certificate may be provided without a PKC; maybe
 * this was made optional because relying parties could cache PKI verification
 * and therefore, sending a full certificate (for each path data) would waste
 * bandwidth (this protocol was created in the early 2000s when bandwidth
 * mattered a lot more).
 * 
 * Interestingly, no constraints are present to require at least one field to
 * be populated: both may be empty, at least according to the ASN.1 definition.
 * I would assume this is an error if you see it.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ACPathData ::= SEQUENCE {
 *   certificate           [0]  Certificate OPTIONAL,
 *   attributeCertificate  [1]  AttributeCertificate OPTIONAL,
 *   ... }
 * ```
 *
 */
export class ACPathData {
    constructor(
        /**
         * @summary `certificate`: an X.509 public key certificate
         * @public
         * @readonly
         */
        readonly certificate?: OPTIONAL<Certificate>,
        /**
         * @summary `attributeCertificate`: an X.509 attribute certificate
         * @public
         * @readonly
         */
        readonly attributeCertificate?: OPTIONAL<AttributeCertificate>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ACPathData
     * @description
     *
     * This takes an `object` and converts it to a `ACPathData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ACPathData`.
     * @returns {ACPathData}
     */
    public static _from_object(
        _o: { [_K in keyof ACPathData]: ACPathData[_K] }
    ): ACPathData {
        return new ACPathData(
            _o.certificate,
            _o.attributeCertificate,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of ACPathData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ACPathData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "certificate",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "attributeCertificate",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of ACPathData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ACPathData: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of ACPathData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ACPathData: $.ComponentSpec[] = [];

let _cached_decoder_for_ACPathData: $.ASN1Decoder<ACPathData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ACPathData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ACPathData} The decoded data structure.
 */
export function _decode_ACPathData(el: _Element): ACPathData {
    if (!_cached_decoder_for_ACPathData) {
        _cached_decoder_for_ACPathData = function (el: _Element): ACPathData {
            let certificate: OPTIONAL<Certificate>;
            let attributeCertificate: OPTIONAL<AttributeCertificate>;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                certificate: (_el: _Element): void => {
                    certificate = $._decode_implicit<Certificate>(
                        () => _decode_Certificate
                    )(_el);
                },
                attributeCertificate: (_el: _Element): void => {
                    attributeCertificate = $._decode_implicit<AttributeCertificate>(
                        () => _decode_AttributeCertificate
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ACPathData,
                _extension_additions_list_spec_for_ACPathData,
                _root_component_type_list_2_spec_for_ACPathData,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ACPathData(
                certificate,
                attributeCertificate,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_ACPathData(el);
}

let _cached_encoder_for_ACPathData: $.ASN1Encoder<ACPathData> | null = null;

/**
 * @summary Encodes a(n) ACPathData into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ACPathData, encoded as an ASN.1 Element.
 */
export function _encode_ACPathData(
    value: ACPathData,
    elGetter: $.ASN1Encoder<ACPathData>
): _Element {
    if (!_cached_encoder_for_ACPathData) {
        _cached_encoder_for_ACPathData = function (
            value: ACPathData        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.certificate === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_Certificate,
                                      $.DER
                                  )(value.certificate, $.DER),
                            /* IF_ABSENT  */ value.attributeCertificate ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_AttributeCertificate,
                                      $.DER
                                  )(value.attributeCertificate, $.DER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_ACPathData(value, elGetter);
}


/* eslint-enable */
