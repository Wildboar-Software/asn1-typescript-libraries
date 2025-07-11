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
    EstablishOperationalBindingArgumentData_initiator,
    _decode_EstablishOperationalBindingArgumentData_initiator,
    _encode_EstablishOperationalBindingArgumentData_initiator,
} from "../OperationalBindingManagement/EstablishOperationalBindingArgumentData-initiator.ta.mjs";
import {
    OperationalBindingID,
    _decode_OperationalBindingID,
    _encode_OperationalBindingID,
} from "../OperationalBindingManagement/OperationalBindingID.ta.mjs";
import {
    Validity,
    _decode_Validity,
    _encode_Validity,
} from "../OperationalBindingManagement/Validity.ta.mjs";
/**
 * @summary EstablishOperationalBindingArgumentData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EstablishOperationalBindingArgumentData ::= SEQUENCE {
 *   bindingType        [0]  OPERATIONAL-BINDING.&id({OpBindingSet}),
 *   bindingID          [1]  OperationalBindingID OPTIONAL,
 *   accessPoint        [2]  AccessPoint,
 *                -- symmetric, Role A initiates, or Role B initiates
 *   initiator               CHOICE {
 *     symmetric          [3]  OPERATIONAL-BINDING.&both.&EstablishParam
 *                             ({OpBindingSet}{@bindingType}),
 *     roleA-initiates    [4]  OPERATIONAL-BINDING.&roleA.&EstablishParam
 *                             ({OpBindingSet}{@bindingType}),
 *     roleB-initiates    [5]  OPERATIONAL-BINDING.&roleB.&EstablishParam
 *                               ({OpBindingSet}{@bindingType})},
 *   agreement          [6]  OPERATIONAL-BINDING.&Agreement
 *                             ({OpBindingSet}{@bindingType}),
 *   valid              [7]  Validity DEFAULT {},
 *   securityParameters [8]  SecurityParameters OPTIONAL,
 *   ... }
 * ```
 *
 */
export class EstablishOperationalBindingArgumentData {
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
        readonly bindingID: OPTIONAL<OperationalBindingID>,
        /**
         * @summary `accessPoint`.
         * @public
         * @readonly
         */
        readonly accessPoint: AccessPoint,
        /**
         * @summary `initiator`.
         * @public
         * @readonly
         */
        readonly initiator: EstablishOperationalBindingArgumentData_initiator,
        /**
         * @summary `agreement`.
         * @public
         * @readonly
         */
        readonly agreement: _Element,
        /**
         * @summary `valid`.
         * @public
         * @readonly
         */
        readonly valid?: OPTIONAL<Validity>,
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
     * @summary Restructures an object into a EstablishOperationalBindingArgumentData
     * @description
     *
     * This takes an `object` and converts it to a `EstablishOperationalBindingArgumentData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EstablishOperationalBindingArgumentData`.
     * @returns {EstablishOperationalBindingArgumentData}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof EstablishOperationalBindingArgumentData]: EstablishOperationalBindingArgumentData[_K];
            }
        >
    ): EstablishOperationalBindingArgumentData {
        return new EstablishOperationalBindingArgumentData(
            _o.bindingType,
            _o.bindingID,
            _o.accessPoint,
            _o.initiator,
            _o.agreement,
            _o.valid,
            _o.securityParameters,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `valid`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_valid(): Validity {
        return Validity._from_object({});
    }
}

/**
 * @summary The Leading Root Component Types of EstablishOperationalBindingArgumentData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EstablishOperationalBindingArgumentData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "bindingType",
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "bindingID",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        "accessPoint",
        false,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec("initiator", false, $.hasAnyTag),
    new $.ComponentSpec(
        "agreement",
        false,
        $.hasTag(_TagClass.context, 6)
    ),
    new $.ComponentSpec(
        "valid",
        true,
        $.hasTag(_TagClass.context, 7)
    ),
    new $.ComponentSpec(
        "securityParameters",
        true,
        $.hasTag(_TagClass.context, 8)
    ),
];

/**
 * @summary The Trailing Root Component Types of EstablishOperationalBindingArgumentData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EstablishOperationalBindingArgumentData: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of EstablishOperationalBindingArgumentData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EstablishOperationalBindingArgumentData: $.ComponentSpec[] = [];

let _cached_decoder_for_EstablishOperationalBindingArgumentData: $.ASN1Decoder<EstablishOperationalBindingArgumentData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EstablishOperationalBindingArgumentData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EstablishOperationalBindingArgumentData} The decoded data structure.
 */
export function _decode_EstablishOperationalBindingArgumentData(el: _Element): EstablishOperationalBindingArgumentData {
    if (!_cached_decoder_for_EstablishOperationalBindingArgumentData) {
        _cached_decoder_for_EstablishOperationalBindingArgumentData = function (
            el: _Element
        ): EstablishOperationalBindingArgumentData {
            let bindingType!: OBJECT_IDENTIFIER;
            let bindingID: OPTIONAL<OperationalBindingID>;
            let accessPoint!: AccessPoint;
            let initiator!: EstablishOperationalBindingArgumentData_initiator;
            let agreement!: _Element;
            let valid: OPTIONAL<Validity> =
                EstablishOperationalBindingArgumentData._default_value_for_valid;
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
                    initiator = _decode_EstablishOperationalBindingArgumentData_initiator(
                        _el
                    );
                },
                agreement: (_el: _Element): void => {
                    agreement = $._decode_explicit<_Element>(
                        () => $._decodeAny
                    )(_el);
                },
                valid: (_el: _Element): void => {
                    valid = $._decode_explicit<Validity>(
                        () => _decode_Validity
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
                _root_component_type_list_1_spec_for_EstablishOperationalBindingArgumentData,
                _extension_additions_list_spec_for_EstablishOperationalBindingArgumentData,
                _root_component_type_list_2_spec_for_EstablishOperationalBindingArgumentData,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new EstablishOperationalBindingArgumentData(
                bindingType,
                bindingID,
                accessPoint,
                initiator,
                agreement,
                valid,
                securityParameters,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_EstablishOperationalBindingArgumentData(el);
}

let _cached_encoder_for_EstablishOperationalBindingArgumentData: $.ASN1Encoder<EstablishOperationalBindingArgumentData> | null = null;

/**
 * @summary Encodes a(n) EstablishOperationalBindingArgumentData into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EstablishOperationalBindingArgumentData, encoded as an ASN.1 Element.
 */
export function _encode_EstablishOperationalBindingArgumentData(
    value: EstablishOperationalBindingArgumentData,
    elGetter: $.ASN1Encoder<EstablishOperationalBindingArgumentData>
): _Element {
    if (!_cached_encoder_for_EstablishOperationalBindingArgumentData) {
        _cached_encoder_for_EstablishOperationalBindingArgumentData = function (
            value: EstablishOperationalBindingArgumentData        ): _Element {
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
                            /* IF_ABSENT  */ value.bindingID === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_OperationalBindingID,
                                      $.DER
                                  )(value.bindingID, $.DER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                2,
                                () => _encode_AccessPoint,
                                $.DER
                            )(value.accessPoint, $.DER),
                            /* REQUIRED   */ _encode_EstablishOperationalBindingArgumentData_initiator(
                                value.initiator,
                                $.DER
                            ),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                6,
                                () => $._encodeAny,
                                $.DER
                            )(value.agreement, $.DER),
                            /* IF_DEFAULT */ value.valid === undefined ||
                            $.deepEq(
                                value.valid,
                                EstablishOperationalBindingArgumentData._default_value_for_valid
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      7,
                                      () => _encode_Validity,
                                      $.DER
                                  )(value.valid, $.DER),
                            /* IF_ABSENT  */ value.securityParameters ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      8,
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
    return _cached_encoder_for_EstablishOperationalBindingArgumentData(
        value,
        elGetter
    );
}


/* eslint-enable */
