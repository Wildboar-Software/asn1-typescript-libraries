/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    SecurityParameters,
    _decode_SecurityParameters,
    _encode_SecurityParameters,
} from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
import {
    ContinuationReference,
    _decode_ContinuationReference,
    _encode_ContinuationReference,
} from "../DistributedOperations/ContinuationReference.ta.mjs";
import {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from "../InformationFramework/Attribute.ta.mjs";
import {
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from "../InformationFramework/DistinguishedName.ta.mjs";
import {
    CommonResults,
    _root_component_type_list_1_spec_for_CommonResults,
    _root_component_type_list_2_spec_for_CommonResults,
    _extension_additions_list_spec_for_CommonResults,
} from "../DirectoryAbstractService/CommonResults.ta.mjs";

/**
 * @summary DsaReferralData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DsaReferralData ::= SET {
 *   reference      [0]  ContinuationReference,
 *   contextPrefix  [1]  DistinguishedName OPTIONAL,
 *   ...,
 *   ...,
 *   COMPONENTS OF       CommonResults }
 * ```
 *
 * @class
 */
export class DsaReferralData implements CommonResults {
    constructor(
        /**
         * @summary `reference`.
         * @public
         * @readonly
         */
        readonly reference: ContinuationReference,
        /**
         * @summary `contextPrefix`.
         * @public
         * @readonly
         */
        readonly contextPrefix: OPTIONAL<DistinguishedName>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = [],
        /**
         * @summary `securityParameters`.
         * @public
         * @readonly
         */
        readonly securityParameters: OPTIONAL<SecurityParameters> /* REPLICATED_COMPONENT */,
        /**
         * @summary `performer`.
         * @public
         * @readonly
         */
        readonly performer: OPTIONAL<DistinguishedName> /* REPLICATED_COMPONENT */,
        /**
         * @summary `aliasDereferenced`.
         * @public
         * @readonly
         */
        readonly aliasDereferenced: OPTIONAL<BOOLEAN> /* REPLICATED_COMPONENT */,
        /**
         * @summary `notification`.
         * @public
         * @readonly
         */
        readonly notification: OPTIONAL<Attribute[]> /* REPLICATED_COMPONENT */
    ) {}

    /**
     * @summary Restructures an object into a DsaReferralData
     * @description
     *
     * This takes an `object` and converts it to a `DsaReferralData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DsaReferralData`.
     * @returns {DsaReferralData}
     */
    public static _from_object(
        _o: { [_K in keyof DsaReferralData]: DsaReferralData[_K] }
    ): DsaReferralData {
        return new DsaReferralData(
            _o.reference,
            _o.contextPrefix,
            _o._unrecognizedExtensionsList,
            _o.securityParameters,
            _o.performer,
            _o.aliasDereferenced,
            _o.notification
        );
    }

    /**
     * @summary Getter that returns the default value for `aliasDereferenced`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_aliasDereferenced(): BOOLEAN {
        return false;
    }
}

/**
 * @summary The Leading Root Component Types of DsaReferralData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DsaReferralData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "reference",
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "contextPrefix",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    ..._root_component_type_list_1_spec_for_CommonResults,
];

/**
 * @summary The Trailing Root Component Types of DsaReferralData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DsaReferralData: $.ComponentSpec[] = [
    ..._root_component_type_list_2_spec_for_CommonResults,
];

/**
 * @summary The Extension Addition Component Types of DsaReferralData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DsaReferralData: $.ComponentSpec[] = [
    ..._extension_additions_list_spec_for_CommonResults,
];

let _cached_decoder_for_DsaReferralData: $.ASN1Decoder<DsaReferralData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DsaReferralData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DsaReferralData} The decoded data structure.
 */
export function _decode_DsaReferralData(el: _Element): DsaReferralData {
    if (!_cached_decoder_for_DsaReferralData) {
        _cached_decoder_for_DsaReferralData = function (
            el: _Element
        ): DsaReferralData {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let reference!: ContinuationReference;
            let contextPrefix: OPTIONAL<DistinguishedName>;
            let _unrecognizedExtensionsList: _Element[] = [];
            let securityParameters: OPTIONAL<SecurityParameters>;
            let performer: OPTIONAL<DistinguishedName>;
            let aliasDereferenced: OPTIONAL<BOOLEAN> =
                DsaReferralData._default_value_for_aliasDereferenced;
            let notification: OPTIONAL<Attribute[]>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            const callbacks: $.DecodingMap = {
                reference: (_el: _Element): void => {
                    reference = $._decode_explicit<ContinuationReference>(
                        () => _decode_ContinuationReference
                    )(_el);
                },
                contextPrefix: (_el: _Element): void => {
                    contextPrefix = $._decode_explicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    )(_el);
                },
                securityParameters: (_el: _Element): void => {
                    securityParameters = $._decode_explicit<SecurityParameters>(
                        () => _decode_SecurityParameters
                    )(_el);
                },
                performer: (_el: _Element): void => {
                    performer = $._decode_explicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    )(_el);
                },
                aliasDereferenced: (_el: _Element): void => {
                    aliasDereferenced = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                notification: (_el: _Element): void => {
                    notification = $._decode_explicit<Attribute[]>(() =>
                        $._decodeSequenceOf<Attribute>(() => _decode_Attribute)
                    )(_el);
                },
            };
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DsaReferralData,
                _extension_additions_list_spec_for_DsaReferralData,
                _root_component_type_list_2_spec_for_DsaReferralData,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new DsaReferralData(
                /* SET_CONSTRUCTOR_CALL */ reference,
                contextPrefix,
                _unrecognizedExtensionsList,
                securityParameters,
                performer,
                aliasDereferenced,
                notification
            );
        };
    }
    return _cached_decoder_for_DsaReferralData(el);
}

let _cached_encoder_for_DsaReferralData: $.ASN1Encoder<DsaReferralData> | null = null;

/**
 * @summary Encodes a(n) DsaReferralData into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DsaReferralData, encoded as an ASN.1 Element.
 */
export function _encode_DsaReferralData(
    value: DsaReferralData,
    elGetter: $.ASN1Encoder<DsaReferralData>
): _Element {
    if (!_cached_encoder_for_DsaReferralData) {
        _cached_encoder_for_DsaReferralData = function (
            value: DsaReferralData        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => _encode_ContinuationReference,
                                $.DER
                            )(value.reference, $.DER),
                            /* IF_ABSENT  */ value.contextPrefix === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_DistinguishedName,
                                      $.DER
                                  )(value.contextPrefix, $.DER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : [],
                        [
                            /* IF_ABSENT  */ value.securityParameters ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      30,
                                      () => _encode_SecurityParameters,
                                      $.DER
                                  )(value.securityParameters, $.DER),
                            /* IF_ABSENT  */ value.performer === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      29,
                                      () => _encode_DistinguishedName,
                                      $.DER
                                  )(value.performer, $.DER),
                            /* IF_DEFAULT */ value.aliasDereferenced ===
                                undefined ||
                            $.deepEq(
                                value.aliasDereferenced,
                                DsaReferralData._default_value_for_aliasDereferenced
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      28,
                                      () => $._encodeBoolean,
                                      $.DER
                                  )(value.aliasDereferenced, $.DER),
                            /* IF_ABSENT  */ value.notification === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      27,
                                      () =>
                                          $._encodeSequenceOf<Attribute>(
                                              () => _encode_Attribute,
                                              $.DER
                                          ),
                                      $.DER
                                  )(value.notification, $.DER),
                        ]
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_DsaReferralData(value, elGetter);
}


/* eslint-enable */
