/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    SecurityParameters,
    _decode_SecurityParameters,
    _encode_SecurityParameters,
} from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
import {
    AccessPoint,
    _decode_AccessPoint,
    _encode_AccessPoint,
} from "../DistributedOperations/AccessPoint.ta.mjs";
import {
    ModifiedValidity,
    _decode_ModifiedValidity,
    _encode_ModifiedValidity,
} from "../OperationalBindingManagement/ModifiedValidity.ta.mjs";
import {
    ModifyOperationalBindingArgumentData_initiator,
    _decode_ModifyOperationalBindingArgumentData_initiator,
    _encode_ModifyOperationalBindingArgumentData_initiator,
} from "../OperationalBindingManagement/ModifyOperationalBindingArgumentData-initiator.ta.mjs";
import {
    OperationalBindingID,
    _decode_OperationalBindingID,
    _encode_OperationalBindingID,
} from "../OperationalBindingManagement/OperationalBindingID.ta.mjs";
/**
 * @summary ModifyOperationalBindingArgumentData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ModifyOperationalBindingArgumentData ::= SEQUENCE {
 *   bindingType       [0]  OPERATIONAL-BINDING.&id({OpBindingSet}),
 *   bindingID         [1]  OperationalBindingID,
 *   accessPoint       [2]  AccessPoint OPTIONAL,
 *   -- symmetric, Role A initiates, or Role B initiates
 *   initiator              CHOICE {
 *     symmetric         [3]  OPERATIONAL-BINDING.&both.&ModifyParam
 *                           ({OpBindingSet}{@bindingType}),
 *     roleA-initiates   [4]  OPERATIONAL-BINDING.&roleA.&ModifyParam
 *                           ({OpBindingSet}{@bindingType}),
 *     roleB-initiates   [5]  OPERATIONAL-BINDING.&roleB.&ModifyParam
 *                           ({OpBindingSet}{@bindingType})} OPTIONAL,
 *   newBindingID      [6]  OperationalBindingID,
 *   newAgreement      [7]  OPERATIONAL-BINDING.&Agreement
 *                        ({OpBindingSet}{@bindingType}) OPTIONAL,
 *   valid               [8]  ModifiedValidity OPTIONAL,
 *   securityParameters  [9]  SecurityParameters OPTIONAL,
 *   ...}
 * ```
 *
 */
export class ModifyOperationalBindingArgumentData {
    constructor(
        /**
         * @summary `bindingType`.
         * @public
         * @readonly
         */
        readonly bindingType: OBJECT_IDENTIFIER,
        /**
         * @summary `bindingID`.
         * @public
         * @readonly
         */
        readonly bindingID: OperationalBindingID,
        /**
         * @summary `accessPoint`.
         * @public
         * @readonly
         */
        readonly accessPoint: OPTIONAL<AccessPoint>,
        /**
         * @summary `initiator`.
         * @public
         * @readonly
         */
        readonly initiator: OPTIONAL<ModifyOperationalBindingArgumentData_initiator>,
        /**
         * @summary `newBindingID`.
         * @public
         * @readonly
         */
        readonly newBindingID: OperationalBindingID,
        /**
         * @summary `newAgreement`.
         * @public
         * @readonly
         */
        readonly newAgreement?: OPTIONAL<_Element>,
        /**
         * @summary `valid`.
         * @public
         * @readonly
         */
        readonly valid?: OPTIONAL<ModifiedValidity>,
        /**
         * @summary `securityParameters`.
         * @public
         * @readonly
         */
        readonly securityParameters?: OPTIONAL<SecurityParameters>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ModifyOperationalBindingArgumentData
     * @description
     *
     * This takes an `object` and converts it to a `ModifyOperationalBindingArgumentData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ModifyOperationalBindingArgumentData`.
     * @returns {ModifyOperationalBindingArgumentData}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof ModifyOperationalBindingArgumentData]: ModifyOperationalBindingArgumentData[_K];
            }
        >
    ): ModifyOperationalBindingArgumentData {
        return new ModifyOperationalBindingArgumentData(
            _o.bindingType,
            _o.bindingID,
            _o.accessPoint,
            _o.initiator,
            _o.newBindingID,
            _o.newAgreement,
            _o.valid,
            _o.securityParameters,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of ModifyOperationalBindingArgumentData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ModifyOperationalBindingArgumentData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "bindingType",
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "bindingID",
        false,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        "accessPoint",
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        'initiator',
        true,
        $.or(
            $.hasTag(_TagClass.context, 3),
            $.hasTag(_TagClass.context, 4),
            $.hasTag(_TagClass.context, 5),
        )
    ),
    new $.ComponentSpec(
        "newBindingID",
        false,
        $.hasTag(_TagClass.context, 6)
    ),
    new $.ComponentSpec(
        "newAgreement",
        true,
        $.hasTag(_TagClass.context, 7)
    ),
    new $.ComponentSpec(
        "valid",
        true,
        $.hasTag(_TagClass.context, 8)
    ),
    new $.ComponentSpec(
        "securityParameters",
        true,
        $.hasTag(_TagClass.context, 9)
    ),
];

/**
 * @summary The Trailing Root Component Types of ModifyOperationalBindingArgumentData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ModifyOperationalBindingArgumentData: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of ModifyOperationalBindingArgumentData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ModifyOperationalBindingArgumentData: $.ComponentSpec[] = [];

let _cached_decoder_for_ModifyOperationalBindingArgumentData: $.ASN1Decoder<ModifyOperationalBindingArgumentData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ModifyOperationalBindingArgumentData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ModifyOperationalBindingArgumentData} The decoded data structure.
 */
export function _decode_ModifyOperationalBindingArgumentData(el: _Element): ModifyOperationalBindingArgumentData {
    if (!_cached_decoder_for_ModifyOperationalBindingArgumentData) {
        _cached_decoder_for_ModifyOperationalBindingArgumentData = function (
            el: _Element
        ): ModifyOperationalBindingArgumentData {
            let bindingType!: OBJECT_IDENTIFIER;
            let bindingID!: OperationalBindingID;
            let accessPoint: OPTIONAL<AccessPoint>;
            let initiator: OPTIONAL<ModifyOperationalBindingArgumentData_initiator>;
            let newBindingID!: OperationalBindingID;
            let newAgreement: OPTIONAL<_Element>;
            let valid: OPTIONAL<ModifiedValidity>;
            let securityParameters: OPTIONAL<SecurityParameters>;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                bindingType: (_el: _Element): void => {
                    bindingType = $._decode_explicit<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    )(_el);
                },
                bindingID: (_el: _Element): void => {
                    bindingID = $._decode_explicit<OperationalBindingID>(
                        () => _decode_OperationalBindingID
                    )(_el);
                },
                accessPoint: (_el: _Element): void => {
                    accessPoint = $._decode_explicit<AccessPoint>(
                        () => _decode_AccessPoint
                    )(_el);
                },
                initiator: (_el: _Element): void => {
                    initiator = _decode_ModifyOperationalBindingArgumentData_initiator(
                        _el
                    );
                },
                newBindingID: (_el: _Element): void => {
                    newBindingID = $._decode_explicit<OperationalBindingID>(
                        () => _decode_OperationalBindingID
                    )(_el);
                },
                newAgreement: (_el: _Element): void => {
                    newAgreement = $._decode_explicit<_Element>(
                        () => $._decodeAny
                    )(_el);
                },
                valid: (_el: _Element): void => {
                    valid = $._decode_explicit<ModifiedValidity>(
                        () => _decode_ModifiedValidity
                    )(_el);
                },
                securityParameters: (_el: _Element): void => {
                    securityParameters = $._decode_explicit<SecurityParameters>(
                        () => _decode_SecurityParameters
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ModifyOperationalBindingArgumentData,
                _extension_additions_list_spec_for_ModifyOperationalBindingArgumentData,
                _root_component_type_list_2_spec_for_ModifyOperationalBindingArgumentData,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ModifyOperationalBindingArgumentData(
                bindingType,
                bindingID,
                accessPoint,
                initiator,
                newBindingID,
                newAgreement,
                valid,
                securityParameters,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_ModifyOperationalBindingArgumentData(el);
}

let _cached_encoder_for_ModifyOperationalBindingArgumentData: $.ASN1Encoder<ModifyOperationalBindingArgumentData> | null = null;

/**
 * @summary Encodes a(n) ModifyOperationalBindingArgumentData into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModifyOperationalBindingArgumentData, encoded as an ASN.1 Element.
 */
export function _encode_ModifyOperationalBindingArgumentData(
    value: ModifyOperationalBindingArgumentData,
    elGetter: $.ASN1Encoder<ModifyOperationalBindingArgumentData>
): _Element {
    if (!_cached_encoder_for_ModifyOperationalBindingArgumentData) {
        _cached_encoder_for_ModifyOperationalBindingArgumentData = function (
            value: ModifyOperationalBindingArgumentData        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => $._encodeObjectIdentifier,
                                $.DER
                            )(value.bindingType, $.DER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                1,
                                () => _encode_OperationalBindingID,
                                $.DER
                            )(value.bindingID, $.DER),
                            /* IF_ABSENT  */ value.accessPoint === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      2,
                                      () => _encode_AccessPoint,
                                      $.DER
                                  )(value.accessPoint, $.DER),
                            /* IF_ABSENT  */ value.initiator === undefined
                                ? undefined
                                : _encode_ModifyOperationalBindingArgumentData_initiator(
                                      value.initiator,
                                      $.DER
                                  ),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                6,
                                () => _encode_OperationalBindingID,
                                $.DER
                            )(value.newBindingID, $.DER),
                            /* IF_ABSENT  */ value.newAgreement === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      7,
                                      () => $._encodeAny,
                                      $.DER
                                  )(value.newAgreement, $.DER),
                            /* IF_ABSENT  */ value.valid === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      8,
                                      () => _encode_ModifiedValidity,
                                      $.DER
                                  )(value.valid, $.DER),
                            /* IF_ABSENT  */ value.securityParameters ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      9,
                                      () => _encode_SecurityParameters,
                                      $.DER
                                  )(value.securityParameters, $.DER),
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
    return _cached_encoder_for_ModifyOperationalBindingArgumentData(
        value,
        elGetter
    );
}


/* eslint-enable */
