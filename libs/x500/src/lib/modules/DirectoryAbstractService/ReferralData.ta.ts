/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    SecurityParameters,
    _decode_SecurityParameters,
    _encode_SecurityParameters,
} from "../DirectoryAbstractService/SecurityParameters.ta";
import {
    ContinuationReference,
    _decode_ContinuationReference,
    _encode_ContinuationReference,
} from "../DistributedOperations/ContinuationReference.ta";
import {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from "../InformationFramework/Attribute.ta";
import {
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from "../InformationFramework/DistinguishedName.ta";
export {
    CommonResults,
    _decode_CommonResults,
    _encode_CommonResults,
} from "../DirectoryAbstractService/CommonResults.ta";
export {
    SecurityParameters,
    _decode_SecurityParameters,
    _encode_SecurityParameters,
} from "../DirectoryAbstractService/SecurityParameters.ta";
export {
    ContinuationReference,
    _decode_ContinuationReference,
    _encode_ContinuationReference,
} from "../DistributedOperations/ContinuationReference.ta";
export {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from "../InformationFramework/Attribute.ta";
export {
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from "../InformationFramework/DistinguishedName.ta";

/* START_OF_SYMBOL_DEFINITION ReferralData */
/**
 * @summary ReferralData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReferralData ::= SET {
 *   candidate  [0] ContinuationReference,
 *   ...,
 *   ...,
 *   COMPONENTS OF  CommonResults }
 * ```
 *
 * @class
 */
export class ReferralData {
    constructor(
        /**
         * @summary `candidate`.
         * @public
         * @readonly
         */
        readonly candidate: ContinuationReference,
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
        readonly securityParameters?: OPTIONAL<SecurityParameters> /* REPLICATED_COMPONENT */,
        /**
         * @summary `performer`.
         * @public
         * @readonly
         */
        readonly performer?: OPTIONAL<DistinguishedName> /* REPLICATED_COMPONENT */,
        /**
         * @summary `aliasDereferenced`.
         * @public
         * @readonly
         */
        readonly aliasDereferenced?: OPTIONAL<BOOLEAN> /* REPLICATED_COMPONENT */,
        /**
         * @summary `notification`.
         * @public
         * @readonly
         */
        readonly notification?: OPTIONAL<Attribute[]> /* REPLICATED_COMPONENT */
    ) {}

    /**
     * @summary Restructures an object into a ReferralData
     * @description
     *
     * This takes an `object` and converts it to a `ReferralData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReferralData`.
     * @returns {ReferralData}
     */
    public static _from_object(
        _o: { [_K in keyof ReferralData]: ReferralData[_K] }
    ): ReferralData {
        return new ReferralData(
            _o.candidate,
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
    public static get _default_value_for_aliasDereferenced() {
        return false;
    }
}
/* END_OF_SYMBOL_DEFINITION ReferralData */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ReferralData */
/**
 * @summary The Leading Root Component Types of ReferralData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ReferralData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "candidate",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ReferralData */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ReferralData */
/**
 * @summary The Trailing Root Component Types of ReferralData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ReferralData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "securityParameters",
        true,
        $.hasTag(_TagClass.context, 30),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "performer",
        true,
        $.hasTag(_TagClass.context, 29),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "aliasDereferenced",
        true,
        $.hasTag(_TagClass.context, 28),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "notification",
        true,
        $.hasTag(_TagClass.context, 27),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ReferralData */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ReferralData */
/**
 * @summary The Extension Addition Component Types of ReferralData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ReferralData: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ReferralData */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ReferralData */
let _cached_decoder_for_ReferralData: $.ASN1Decoder<ReferralData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ReferralData */

/* START_OF_SYMBOL_DEFINITION _decode_ReferralData */
/**
 * @summary Decodes an ASN.1 element into a(n) ReferralData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReferralData} The decoded data structure.
 */
export function _decode_ReferralData(el: _Element) {
    if (!_cached_decoder_for_ReferralData) {
        _cached_decoder_for_ReferralData = function (
            el: _Element
        ): ReferralData {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let candidate!: ContinuationReference;
            let _unrecognizedExtensionsList: _Element[] = [];
            let securityParameters: OPTIONAL<SecurityParameters>;
            let performer: OPTIONAL<DistinguishedName>;
            let aliasDereferenced: OPTIONAL<BOOLEAN> =
                ReferralData._default_value_for_aliasDereferenced;
            let notification: OPTIONAL<Attribute[]>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                candidate: (_el: _Element): void => {
                    candidate = $._decode_explicit<ContinuationReference>(
                        () => _decode_ContinuationReference
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
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ReferralData,
                _extension_additions_list_spec_for_ReferralData,
                _root_component_type_list_2_spec_for_ReferralData,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ReferralData(
                /* SET_CONSTRUCTOR_CALL */ candidate,
                _unrecognizedExtensionsList,
                securityParameters,
                performer,
                aliasDereferenced,
                notification
            );
        };
    }
    return _cached_decoder_for_ReferralData(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ReferralData */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ReferralData */
let _cached_encoder_for_ReferralData: $.ASN1Encoder<ReferralData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ReferralData */

/* START_OF_SYMBOL_DEFINITION _encode_ReferralData */
/**
 * @summary Encodes a(n) ReferralData into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReferralData, encoded as an ASN.1 Element.
 */
export function _encode_ReferralData(
    value: ReferralData,
    elGetter: $.ASN1Encoder<ReferralData>
) {
    if (!_cached_encoder_for_ReferralData) {
        _cached_encoder_for_ReferralData = function (
            value: ReferralData,
            elGetter: $.ASN1Encoder<ReferralData>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => _encode_ContinuationReference,
                                $.BER
                            )(value.candidate, $.BER),
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
                                      $.BER
                                  )(value.securityParameters, $.BER),
                            /* IF_ABSENT  */ value.performer === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      29,
                                      () => _encode_DistinguishedName,
                                      $.BER
                                  )(value.performer, $.BER),
                            /* IF_DEFAULT */ value.aliasDereferenced ===
                                undefined ||
                            $.deepEq(
                                value.aliasDereferenced,
                                ReferralData._default_value_for_aliasDereferenced
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      28,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.aliasDereferenced, $.BER),
                            /* IF_ABSENT  */ value.notification === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      27,
                                      () =>
                                          $._encodeSequenceOf<Attribute>(
                                              () => _encode_Attribute,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.notification, $.BER),
                        ]
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ReferralData(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ReferralData */

/* eslint-enable */
