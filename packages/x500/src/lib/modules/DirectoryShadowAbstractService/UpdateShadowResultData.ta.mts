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
    AgreementID,
    _decode_AgreementID,
    _encode_AgreementID,
} from "../DirectoryShadowAbstractService/AgreementID.ta.mjs";
import {
    Time,
    _decode_Time,
    _encode_Time,
} from "../DirectoryShadowAbstractService/Time.ta.mjs";
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
import { CommonResultsSeq, _root_component_type_list_1_spec_for_CommonResultsSeq } from "../DirectoryAbstractService/CommonResultsSeq.ta.mjs";

/**
 * @summary UpdateShadowResultData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UpdateShadowResultData ::= [0]  SEQUENCE {
 *   agreementID  AgreementID,
 *   lastUpdate   Time OPTIONAL,
 *   ...,
 *   ...,
 *   COMPONENTS OF CommonResultsSeq }
 * ```
 *
 */
export class UpdateShadowResultData implements CommonResultsSeq {
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
     * @summary Restructures an object into a UpdateShadowResultData
     * @description
     *
     * This takes an `object` and converts it to a `UpdateShadowResultData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UpdateShadowResultData`.
     * @returns {UpdateShadowResultData}
     */
    public static _from_object(
        _o: { [_K in keyof UpdateShadowResultData]: UpdateShadowResultData[_K] }
    ): UpdateShadowResultData {
        return new UpdateShadowResultData(
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
    public static get _default_value_for_aliasDereferenced(): BOOLEAN {
        return false;
    }
}

/**
 * @summary The Leading Root Component Types of UpdateShadowResultData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_UpdateShadowResultData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "agreementID",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "lastUpdate",
        true,
        $.hasTag(_TagClass.universal, 24)
    ),
];

/**
 * @summary The Trailing Root Component Types of UpdateShadowResultData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_UpdateShadowResultData: $.ComponentSpec[] = [
    ..._root_component_type_list_1_spec_for_CommonResultsSeq,
];

/**
 * @summary The Extension Addition Component Types of UpdateShadowResultData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_UpdateShadowResultData: $.ComponentSpec[] = [];

let _cached_decoder_for_UpdateShadowResultData: $.ASN1Decoder<UpdateShadowResultData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UpdateShadowResultData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UpdateShadowResultData} The decoded data structure.
 */
export function _decode_UpdateShadowResultData(el: _Element): UpdateShadowResultData {
    if (!_cached_decoder_for_UpdateShadowResultData) {
        _cached_decoder_for_UpdateShadowResultData = $._decode_implicit<UpdateShadowResultData>(
            () =>
                function (el: _Element): UpdateShadowResultData {
                    let agreementID!: AgreementID;
                    let lastUpdate: OPTIONAL<Time>;
                    let _unrecognizedExtensionsList: _Element[] = [];
                    let securityParameters: OPTIONAL<SecurityParameters>;
                    let performer: OPTIONAL<DistinguishedName>;
                    let aliasDereferenced: OPTIONAL<BOOLEAN> =
                        UpdateShadowResultData._default_value_for_aliasDereferenced;
                    let notification: OPTIONAL<Attribute[]>;
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
                    $._parse_sequence(
                        el,
                        callbacks,
                        _root_component_type_list_1_spec_for_UpdateShadowResultData,
                        _extension_additions_list_spec_for_UpdateShadowResultData,
                        _root_component_type_list_2_spec_for_UpdateShadowResultData,
                        (ext: _Element): void => {
                            _unrecognizedExtensionsList.push(ext);
                        }
                    );
                    return new UpdateShadowResultData(
                        agreementID,
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
    return _cached_decoder_for_UpdateShadowResultData(el);
}

let _cached_encoder_for_UpdateShadowResultData: $.ASN1Encoder<UpdateShadowResultData> | null = null;

/**
 * @summary Encodes a(n) UpdateShadowResultData into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UpdateShadowResultData, encoded as an ASN.1 Element.
 */
export function _encode_UpdateShadowResultData(
    value: UpdateShadowResultData,
    elGetter: $.ASN1Encoder<UpdateShadowResultData>
): _Element {
    if (!_cached_encoder_for_UpdateShadowResultData) {
        _cached_encoder_for_UpdateShadowResultData = $._encode_implicit(
            _TagClass.context,
            0,
            () =>
                function (
                    value: UpdateShadowResultData                ): _Element {
                    return $._encodeSequence(
                        ([] as (_Element | undefined)[])
                            .concat(
                                [
                                    /* REQUIRED   */ _encode_AgreementID(
                                        value.agreementID,
                                        $.DER
                                    ),
                                    /* IF_ABSENT  */ value.lastUpdate ===
                                    undefined
                                        ? undefined
                                        : _encode_Time(value.lastUpdate, $.DER),
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
                                    /* IF_ABSENT  */ value.performer ===
                                    undefined
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
                                        UpdateShadowResultData._default_value_for_aliasDereferenced
                                    )
                                        ? undefined
                                        : $._encode_explicit(
                                              _TagClass.context,
                                              28,
                                              () => $._encodeBoolean,
                                              $.DER
                                          )(value.aliasDereferenced, $.DER),
                                    /* IF_ABSENT  */ value.notification ===
                                    undefined
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
                            .filter(
                                (c: _Element | undefined): c is _Element => !!c
                            ),
                        $.DER
                    );
                },
            $.DER
        );
    }
    return _cached_encoder_for_UpdateShadowResultData(value, elGetter);
}


/* eslint-enable */
