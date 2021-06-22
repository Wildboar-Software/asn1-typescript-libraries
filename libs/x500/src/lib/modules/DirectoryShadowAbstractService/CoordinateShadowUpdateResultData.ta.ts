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
    AgreementID,
    _decode_AgreementID,
    _encode_AgreementID,
} from "../DirectoryShadowAbstractService/AgreementID.ta";
import {
    Time,
    _decode_Time,
    _encode_Time,
} from "../DirectoryShadowAbstractService/Time.ta";
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
import { _root_component_type_list_1_spec_for_CommonResultsSeq } from "../DirectoryAbstractService/CommonResultsSeq.ta";

/* START_OF_SYMBOL_DEFINITION CoordinateShadowUpdateResultData */
/**
 * @summary CoordinateShadowUpdateResultData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CoordinateShadowUpdateResultData ::= [0]  SEQUENCE {
 *   agreementID  AgreementID,
 *   lastUpdate   Time OPTIONAL,
 *   ...,
 *   ...,
 *   COMPONENTS OF CommonResultsSeq }
 * ```
 *
 * @class
 */
export class CoordinateShadowUpdateResultData {
    constructor(
        /**
         * @summary `agreementID`.
         * @public
         * @readonly
         */
        readonly agreementID: AgreementID,
        /**
         * @summary `lastUpdate`.
         * @public
         * @readonly
         */
        readonly lastUpdate: OPTIONAL<Time>,
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
     * @summary Restructures an object into a CoordinateShadowUpdateResultData
     * @description
     *
     * This takes an `object` and converts it to a `CoordinateShadowUpdateResultData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CoordinateShadowUpdateResultData`.
     * @returns {CoordinateShadowUpdateResultData}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof CoordinateShadowUpdateResultData]: CoordinateShadowUpdateResultData[_K];
            }
        >
    ): CoordinateShadowUpdateResultData {
        return new CoordinateShadowUpdateResultData(
            _o.agreementID,
            _o.lastUpdate,
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
/* END_OF_SYMBOL_DEFINITION CoordinateShadowUpdateResultData */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CoordinateShadowUpdateResultData */
/**
 * @summary The Leading Root Component Types of CoordinateShadowUpdateResultData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CoordinateShadowUpdateResultData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "agreementID",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "lastUpdate",
        true,
        $.hasTag(_TagClass.universal, 24),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CoordinateShadowUpdateResultData */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CoordinateShadowUpdateResultData */
/**
 * @summary The Trailing Root Component Types of CoordinateShadowUpdateResultData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CoordinateShadowUpdateResultData: $.ComponentSpec[] = [
    ..._root_component_type_list_1_spec_for_CommonResultsSeq,
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CoordinateShadowUpdateResultData */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CoordinateShadowUpdateResultData */
/**
 * @summary The Extension Addition Component Types of CoordinateShadowUpdateResultData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CoordinateShadowUpdateResultData: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CoordinateShadowUpdateResultData */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CoordinateShadowUpdateResultData */
let _cached_decoder_for_CoordinateShadowUpdateResultData: $.ASN1Decoder<CoordinateShadowUpdateResultData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CoordinateShadowUpdateResultData */

/* START_OF_SYMBOL_DEFINITION _decode_CoordinateShadowUpdateResultData */
/**
 * @summary Decodes an ASN.1 element into a(n) CoordinateShadowUpdateResultData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CoordinateShadowUpdateResultData} The decoded data structure.
 */
export function _decode_CoordinateShadowUpdateResultData(el: _Element) {
    if (!_cached_decoder_for_CoordinateShadowUpdateResultData) {
        _cached_decoder_for_CoordinateShadowUpdateResultData = $._decode_implicit<CoordinateShadowUpdateResultData>(
            () =>
                function (el: _Element): CoordinateShadowUpdateResultData {
                    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    let agreementID!: AgreementID;
                    let lastUpdate: OPTIONAL<Time>;
                    let _unrecognizedExtensionsList: _Element[] = [];
                    let securityParameters: OPTIONAL<SecurityParameters>;
                    let performer: OPTIONAL<DistinguishedName>;
                    let aliasDereferenced: OPTIONAL<BOOLEAN> =
                        CoordinateShadowUpdateResultData._default_value_for_aliasDereferenced;
                    let notification: OPTIONAL<Attribute[]>;
                    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    /* START_OF_CALLBACKS_MAP */
                    const callbacks: $.DecodingMap = {
                        agreementID: (_el: _Element): void => {
                            agreementID = _decode_AgreementID(_el);
                        },
                        lastUpdate: (_el: _Element): void => {
                            lastUpdate = _decode_Time(_el);
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
                                $._decodeSequenceOf<Attribute>(
                                    () => _decode_Attribute
                                )
                            )(_el);
                        },
                    };
                    /* END_OF_CALLBACKS_MAP */
                    $._parse_sequence(
                        el,
                        callbacks,
                        _root_component_type_list_1_spec_for_CoordinateShadowUpdateResultData,
                        _extension_additions_list_spec_for_CoordinateShadowUpdateResultData,
                        _root_component_type_list_2_spec_for_CoordinateShadowUpdateResultData,
                        (ext: _Element): void => {
                            _unrecognizedExtensionsList.push(ext);
                        }
                    );
                    return new CoordinateShadowUpdateResultData(
                        /* SEQUENCE_CONSTRUCTOR_CALL */ agreementID,
                        lastUpdate,
                        _unrecognizedExtensionsList,
                        securityParameters,
                        performer,
                        aliasDereferenced,
                        notification
                    );
                }
        );
    }
    return _cached_decoder_for_CoordinateShadowUpdateResultData(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CoordinateShadowUpdateResultData */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CoordinateShadowUpdateResultData */
let _cached_encoder_for_CoordinateShadowUpdateResultData: $.ASN1Encoder<CoordinateShadowUpdateResultData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CoordinateShadowUpdateResultData */

/* START_OF_SYMBOL_DEFINITION _encode_CoordinateShadowUpdateResultData */
/**
 * @summary Encodes a(n) CoordinateShadowUpdateResultData into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CoordinateShadowUpdateResultData, encoded as an ASN.1 Element.
 */
export function _encode_CoordinateShadowUpdateResultData(
    value: CoordinateShadowUpdateResultData,
    elGetter: $.ASN1Encoder<CoordinateShadowUpdateResultData>
) {
    if (!_cached_encoder_for_CoordinateShadowUpdateResultData) {
        _cached_encoder_for_CoordinateShadowUpdateResultData = $._encode_implicit(
            _TagClass.context,
            0,
            () =>
                function (
                    value: CoordinateShadowUpdateResultData,
                    elGetter: $.ASN1Encoder<CoordinateShadowUpdateResultData>
                ): _Element {
                    return $._encodeSequence(
                        ([] as (_Element | undefined)[])
                            .concat(
                                [
                                    /* REQUIRED   */ _encode_AgreementID(
                                        value.agreementID,
                                        $.BER
                                    ),
                                    /* IF_ABSENT  */ value.lastUpdate ===
                                    undefined
                                        ? undefined
                                        : _encode_Time(value.lastUpdate, $.BER),
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
                                    /* IF_ABSENT  */ value.performer ===
                                    undefined
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
                                        CoordinateShadowUpdateResultData._default_value_for_aliasDereferenced
                                    )
                                        ? undefined
                                        : $._encode_explicit(
                                              _TagClass.context,
                                              28,
                                              () => $._encodeBoolean,
                                              $.BER
                                          )(value.aliasDereferenced, $.BER),
                                    /* IF_ABSENT  */ value.notification ===
                                    undefined
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
                            .filter(
                                (c: _Element | undefined): c is _Element => !!c
                            ),
                        $.BER
                    );
                },
            $.BER
        );
    }
    return _cached_encoder_for_CoordinateShadowUpdateResultData(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_CoordinateShadowUpdateResultData */

/* eslint-enable */
