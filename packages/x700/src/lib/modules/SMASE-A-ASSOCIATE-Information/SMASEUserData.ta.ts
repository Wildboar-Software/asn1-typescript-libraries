/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
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
} from '../SMASE-A-ASSOCIATE-Information/FunctionalUnitPackage.ta.js';
export {
    FunctionalUnitPackage,
    _decode_FunctionalUnitPackage,
    _encode_FunctionalUnitPackage,
} from '../SMASE-A-ASSOCIATE-Information/FunctionalUnitPackage.ta.js';
import {
    Reason,
    Reason_smfusNotSupported /* IMPORTED_LONG_NAMED_INTEGER */,
    smfusNotSupported /* IMPORTED_SHORT_NAMED_INTEGER */,
    Reason_smfuCombinationNotSupported /* IMPORTED_LONG_NAMED_INTEGER */,
    smfuCombinationNotSupported /* IMPORTED_SHORT_NAMED_INTEGER */,
    Reason_smfusRequiredNotAvailable /* IMPORTED_LONG_NAMED_INTEGER */,
    smfusRequiredNotAvailable /* IMPORTED_SHORT_NAMED_INTEGER */,
    Reason_smfuNegotiationRefused /* IMPORTED_LONG_NAMED_INTEGER */,
    smfuNegotiationRefused /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_Reason,
    _encode_Reason,
} from '../SMASE-A-ASSOCIATE-Information/Reason.ta.js';
export {
    Reason,
    Reason_smfusNotSupported /* IMPORTED_LONG_NAMED_INTEGER */,
    smfusNotSupported /* IMPORTED_SHORT_NAMED_INTEGER */,
    Reason_smfuCombinationNotSupported /* IMPORTED_LONG_NAMED_INTEGER */,
    smfuCombinationNotSupported /* IMPORTED_SHORT_NAMED_INTEGER */,
    Reason_smfusRequiredNotAvailable /* IMPORTED_LONG_NAMED_INTEGER */,
    smfusRequiredNotAvailable /* IMPORTED_SHORT_NAMED_INTEGER */,
    Reason_smfuNegotiationRefused /* IMPORTED_LONG_NAMED_INTEGER */,
    smfuNegotiationRefused /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_Reason,
    _encode_Reason,
} from '../SMASE-A-ASSOCIATE-Information/Reason.ta.js';

/* START_OF_SYMBOL_DEFINITION SMASEUserData */
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
/* END_OF_SYMBOL_DEFINITION SMASEUserData */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SMASEUserData */
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
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'reason',
        true,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'systemsManagementUserInformation',
        true,
        $.hasTag(_TagClass.universal, 25),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SMASEUserData */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SMASEUserData */
/**
 * @summary The Trailing Root Component Types of SMASEUserData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SMASEUserData: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SMASEUserData */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SMASEUserData */
/**
 * @summary The Extension Addition Component Types of SMASEUserData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SMASEUserData: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SMASEUserData */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SMASEUserData */
let _cached_decoder_for_SMASEUserData: $.ASN1Decoder<SMASEUserData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SMASEUserData */

/* START_OF_SYMBOL_DEFINITION _decode_SMASEUserData */
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
/* END_OF_SYMBOL_DEFINITION _decode_SMASEUserData */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SMASEUserData */
let _cached_encoder_for_SMASEUserData: $.ASN1Encoder<SMASEUserData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SMASEUserData */

/* START_OF_SYMBOL_DEFINITION _encode_SMASEUserData */
/**
 * @summary Encodes a(n) SMASEUserData into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMASEUserData, encoded as an ASN.1 Element.
 */
export function _encode_SMASEUserData(
    value: SMASEUserData,
    elGetter: $.ASN1Encoder<SMASEUserData>
) {
    if (!_cached_encoder_for_SMASEUserData) {
        _cached_encoder_for_SMASEUserData = function (
            value: SMASEUserData,
            elGetter: $.ASN1Encoder<SMASEUserData>
        ): _Element {
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

/* END_OF_SYMBOL_DEFINITION _encode_SMASEUserData */

/* eslint-enable */
