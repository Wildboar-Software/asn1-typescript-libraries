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
    OperationalBindingID,
    _decode_OperationalBindingID,
    _encode_OperationalBindingID,
} from "../OperationalBindingManagement/OperationalBindingID.ta.mjs";
import {
    TerminateOperationalBindingArgumentData_initiator,
    _decode_TerminateOperationalBindingArgumentData_initiator,
    _encode_TerminateOperationalBindingArgumentData_initiator,
} from "../OperationalBindingManagement/TerminateOperationalBindingArgumentData-initiator.ta.mjs";
import {
    Time,
    _decode_Time,
    _encode_Time,
} from "../OperationalBindingManagement/Time.ta.mjs";
/**
 * @summary TerminateOperationalBindingArgumentData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TerminateOperationalBindingArgumentData ::= SEQUENCE {
 *   bindingType         [0]  OPERATIONAL-BINDING.&id({OpBindingSet}),
 *   bindingID           [1]  OperationalBindingID,
 *   -- symmetric, Role A initiates, or Role B initiates
 *   initiator                CHOICE {
 *     symmetric           [2]  OPERATIONAL-BINDING.&both.&TerminateParam
 *                             ({OpBindingSet}{@bindingType}),
 *     roleA-initiates     [3]  OPERATIONAL-BINDING.&roleA.&TerminateParam
 *                             ({OpBindingSet}{@bindingType}),
 *     roleB-initiates     [4]  OPERATIONAL-BINDING.&roleB.&TerminateParam
 *                             ({OpBindingSet}{@bindingType})} OPTIONAL,
 *   terminateAt         [5]  Time OPTIONAL,
 *   securityParameters  [6]  SecurityParameters OPTIONAL,
 *   ...}
 * ```
 *
 */
export class TerminateOperationalBindingArgumentData {
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
         * @summary `initiator`.
         * @public
         * @readonly
         */
        readonly initiator?: OPTIONAL<TerminateOperationalBindingArgumentData_initiator>,
        /**
         * @summary `terminateAt`.
         * @public
         * @readonly
         */
        readonly terminateAt?: OPTIONAL<Time>,
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
     * @summary Restructures an object into a TerminateOperationalBindingArgumentData
     * @description
     *
     * This takes an `object` and converts it to a `TerminateOperationalBindingArgumentData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TerminateOperationalBindingArgumentData`.
     * @returns {TerminateOperationalBindingArgumentData}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof TerminateOperationalBindingArgumentData]: TerminateOperationalBindingArgumentData[_K];
            }
        >
    ): TerminateOperationalBindingArgumentData {
        return new TerminateOperationalBindingArgumentData(
            _o.bindingType,
            _o.bindingID,
            _o.initiator,
            _o.terminateAt,
            _o.securityParameters,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of TerminateOperationalBindingArgumentData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TerminateOperationalBindingArgumentData: $.ComponentSpec[] = [
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
        'initiator',
        true,
        $.or(
            $.hasTag(_TagClass.context, 3),
            $.hasTag(_TagClass.context, 4),
            $.hasTag(_TagClass.context, 5),
        )
    ),
    new $.ComponentSpec(
        "terminateAt",
        true,
        $.hasTag(_TagClass.context, 5)
    ),
    new $.ComponentSpec(
        "securityParameters",
        true,
        $.hasTag(_TagClass.context, 6)
    ),
];

/**
 * @summary The Trailing Root Component Types of TerminateOperationalBindingArgumentData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TerminateOperationalBindingArgumentData: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of TerminateOperationalBindingArgumentData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TerminateOperationalBindingArgumentData: $.ComponentSpec[] = [];

let _cached_decoder_for_TerminateOperationalBindingArgumentData: $.ASN1Decoder<TerminateOperationalBindingArgumentData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TerminateOperationalBindingArgumentData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TerminateOperationalBindingArgumentData} The decoded data structure.
 */
export function _decode_TerminateOperationalBindingArgumentData(el: _Element): TerminateOperationalBindingArgumentData {
    if (!_cached_decoder_for_TerminateOperationalBindingArgumentData) {
        _cached_decoder_for_TerminateOperationalBindingArgumentData = function (
            el: _Element
        ): TerminateOperationalBindingArgumentData {
            let bindingType!: OBJECT_IDENTIFIER;
            let bindingID!: OperationalBindingID;
            let initiator: OPTIONAL<TerminateOperationalBindingArgumentData_initiator>;
            let terminateAt: OPTIONAL<Time>;
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
                initiator: (_el: _Element): void => {
                    initiator = _decode_TerminateOperationalBindingArgumentData_initiator(
                        _el
                    );
                },
                terminateAt: (_el: _Element): void => {
                    terminateAt = $._decode_explicit<Time>(() => _decode_Time)(
                        _el
                    );
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
                _root_component_type_list_1_spec_for_TerminateOperationalBindingArgumentData,
                _extension_additions_list_spec_for_TerminateOperationalBindingArgumentData,
                _root_component_type_list_2_spec_for_TerminateOperationalBindingArgumentData,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new TerminateOperationalBindingArgumentData(
                bindingType,
                bindingID,
                initiator,
                terminateAt,
                securityParameters,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_TerminateOperationalBindingArgumentData(el);
}

let _cached_encoder_for_TerminateOperationalBindingArgumentData: $.ASN1Encoder<TerminateOperationalBindingArgumentData> | null = null;

/**
 * @summary Encodes a(n) TerminateOperationalBindingArgumentData into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TerminateOperationalBindingArgumentData, encoded as an ASN.1 Element.
 */
export function _encode_TerminateOperationalBindingArgumentData(
    value: TerminateOperationalBindingArgumentData,
    elGetter: $.ASN1Encoder<TerminateOperationalBindingArgumentData>
): _Element {
    if (!_cached_encoder_for_TerminateOperationalBindingArgumentData) {
        _cached_encoder_for_TerminateOperationalBindingArgumentData = function (
            value: TerminateOperationalBindingArgumentData        ): _Element {
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
                            /* IF_ABSENT  */ value.initiator === undefined
                                ? undefined
                                : _encode_TerminateOperationalBindingArgumentData_initiator(
                                      value.initiator,
                                      $.DER
                                  ),
                            /* IF_ABSENT  */ value.terminateAt === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      5,
                                      () => _encode_Time,
                                      $.DER
                                  )(value.terminateAt, $.DER),
                            /* IF_ABSENT  */ value.securityParameters ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      6,
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
    return _cached_encoder_for_TerminateOperationalBindingArgumentData(
        value,
        elGetter
    );
}


/* eslint-enable */
