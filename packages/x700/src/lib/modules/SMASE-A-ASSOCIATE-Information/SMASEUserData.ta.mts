/* eslint-disable */
import {
    OPTIONAL,
    GraphicString,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    FunctionalUnitPackage,
    _decode_FunctionalUnitPackage,
    _encode_FunctionalUnitPackage,
} from '../SMASE-A-ASSOCIATE-Information/FunctionalUnitPackage.ta.mjs';
import {
    Reason,
    _decode_Reason,
    _encode_Reason,
} from '../SMASE-A-ASSOCIATE-Information/Reason.ta.mjs';
/**
 * @summary SMASEUserData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SMASEUserData ::= SEQUENCE {
 *   smfuPackages                      SET OF FunctionalUnitPackage OPTIONAL,
 *   -- shall be present on request/indication if SMFU
 *   -- negotiation is proposed and on response/confirm
 *   -- if SMFU negotiation is accepted, otherwise this
 *   -- parameter shall be omitted.
 *   reason                            Reason OPTIONAL,
 *   -- may only be present on A-ASSOCIATE response/confirm.
 *   -- When SMFU negotiation fails, when SMFU negotiation
 *   -- results in a reduction of the proposed set of SMFUs
 *   -- or when the association request is rejected, it may
 *   -- carry a specific reason for this.
 *   systemsManagementUserInformation  GraphicString OPTIONAL
 *   -- this parameter is provided solely for the convenience
 *   -- of implementations needing to distinguish between
 *   -- different implementation environments, it shall not
 *   -- be the subject of conformance test
 * }
 * ```
 *
 * @class
 */
export class SMASEUserData {
    constructor(
        /**
         * @summary `smfuPackages`.
         * @public
         * @readonly
         */
        readonly smfuPackages: OPTIONAL<FunctionalUnitPackage[]>,
        /**
         * @summary `reason`.
         * @public
         * @readonly
         */
        readonly reason: OPTIONAL<Reason>,
        /**
         * @summary `systemsManagementUserInformation`.
         * @public
         * @readonly
         */
        readonly systemsManagementUserInformation: OPTIONAL<GraphicString>
    ) {}

    /**
     * @summary Restructures an object into a SMASEUserData
     * @description
     *
     * This takes an `object` and converts it to a `SMASEUserData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SMASEUserData`.
     * @returns {SMASEUserData}
     */
    public static _from_object(
        _o: { [_K in keyof SMASEUserData]: SMASEUserData[_K] }
    ): SMASEUserData {
        return new SMASEUserData(
            _o.smfuPackages,
            _o.reason,
            _o.systemsManagementUserInformation
        );
    }
}

/**
 * @summary The Leading Root Component Types of SMASEUserData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SMASEUserData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'smfuPackages',
        true,
        $.hasTag(_TagClass.universal, 17)
    ),
    new $.ComponentSpec(
        'reason',
        true,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        'systemsManagementUserInformation',
        true,
        $.hasTag(_TagClass.universal, 25)
    ),
];

/**
 * @summary The Trailing Root Component Types of SMASEUserData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SMASEUserData: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of SMASEUserData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SMASEUserData: $.ComponentSpec[] = [];

let _cached_decoder_for_SMASEUserData: $.ASN1Decoder<SMASEUserData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SMASEUserData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SMASEUserData} The decoded data structure.
 */
export function _decode_SMASEUserData(el: _Element) {
    if (!_cached_decoder_for_SMASEUserData) {
        _cached_decoder_for_SMASEUserData = function (
            el: _Element
        ): SMASEUserData {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let smfuPackages: OPTIONAL<FunctionalUnitPackage[]>;
            let reason: OPTIONAL<Reason>;
            let systemsManagementUserInformation: OPTIONAL<GraphicString>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                smfuPackages: (_el: _Element): void => {
                    smfuPackages = $._decodeSetOf<FunctionalUnitPackage>(
                        () => _decode_FunctionalUnitPackage
                    )(_el);
                },
                reason: (_el: _Element): void => {
                    reason = _decode_Reason(_el);
                },
                systemsManagementUserInformation: (_el: _Element): void => {
                    systemsManagementUserInformation = $._decodeGraphicString(
                        _el
                    );
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SMASEUserData,
                _extension_additions_list_spec_for_SMASEUserData,
                _root_component_type_list_2_spec_for_SMASEUserData,
                undefined
            );
            return new SMASEUserData /* SEQUENCE_CONSTRUCTOR_CALL */(
                smfuPackages,
                reason,
                systemsManagementUserInformation
            );
        };
    }
    return _cached_decoder_for_SMASEUserData(el);
}

let _cached_encoder_for_SMASEUserData: $.ASN1Encoder<SMASEUserData> | null = null;

/**
 * @summary Encodes a(n) SMASEUserData into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMASEUserData, encoded as an ASN.1 Element.
 */
export function _encode_SMASEUserData(
    value: SMASEUserData,
    elGetter: $.ASN1Encoder<SMASEUserData>
) {
    if (!_cached_encoder_for_SMASEUserData) {
        _cached_encoder_for_SMASEUserData = function (
            value: SMASEUserData        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.smfuPackages === undefined
                            ? undefined
                            : $._encodeSetOf<FunctionalUnitPackage>(
                                  () => _encode_FunctionalUnitPackage,
                                  $.BER
                              )(value.smfuPackages, $.BER),
                        /* IF_ABSENT  */ value.reason === undefined
                            ? undefined
                            : _encode_Reason(value.reason, $.BER),
                        /* IF_ABSENT  */ value.systemsManagementUserInformation ===
                        undefined
                            ? undefined
                            : $._encodeGraphicString(
                                  value.systemsManagementUserInformation,
                                  $.BER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SMASEUserData(value, elGetter);
}


/* eslint-enable */
