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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
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
 * SMASE payload of ACSE A-ASSOCIATE `user information`: the
 * CMISE EXTERNAL (X.711) may be followed by this type as a
 * second EXTERNAL. Carries optional negotiation of Systems
 * Management Functional Units (SMFUs) for the Systems
 * management application context. Abstract syntax
 * `{joint-iso-itu-t ms(9) smo(0) negotiationAbstractSyntax(1)
 * version1(1)}` (BER required to interpret ACSE
 * user-information; X.701 A.4.1). ACSE mode is `normal`.
 * Both initiator and responder may take manager and agent
 * roles; roles may switch per interaction (invoker decides).
 * An unsupported operation is `unrecognizedOperation`; an
 * unsupported notification is `noSuchEventType` (X.710).
 * ITU-T Rec. X.701 (08/97)
 * [A.2.2](https://www.itu.int/rec/T-REC-X.701-199708-I),
 * A.2.4, A.3.2, A.3.4. SMAE/SMASE: X.701 §6.4.2–§6.4.3.
 * Systems management communications via SMAE: X.700 (09/92)
 * [§6.2](https://www.itu.int/rec/T-REC-X.700-199209-I),
 * §7.2.1.
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
 */
export class SMASEUserData {
    constructor(
        /**
         * @summary `smfuPackages`.
         * @description
         *
         * Proposed or agreed SMFUs. Present on
         * request/indication if SMFU negotiation is proposed,
         * and on response/confirm if accepted; otherwise
         * omitted. Negotiation is optional. Initiator proposes
         * a valid non-empty set; responder accepts with an
         * identical set or a subset, or refuses by omitting
         * this parameter. If the initiator omits it, the
         * responder shall omit it or reject the association.
         * An agreed set constrains operations and
         * notifications until a new agreement (in-association
         * change is not specified). Interactions outside the
         * agreed SMFUs shall result in an error. If two
         * proposed FUs overlap and only one is accepted,
         * common capabilities remain agreed (X.701 A.3.2
         * Note 2). If negotiation is refused but the
         * association succeeds, only the application context
         * rules of X.701 A.2.2 apply. X.701 A.3.2, A.3.4.
         *
         * @public
         * @readonly
         */
        readonly smfuPackages?: OPTIONAL<FunctionalUnitPackage[]>,
        /**
         * @summary `reason`.
         * @description
         *
         * Why SMFU negotiation failed, the proposed set was
         * reduced, or the association was rejected. Only on
         * A-ASSOCIATE response/confirm. X.701 A.3.4.
         *
         * @public
         * @readonly
         */
        readonly reason?: OPTIONAL<Reason>,
        /**
         * @summary `systemsManagementUserInformation`.
         * @description
         *
         * Distinguishes implementation environments. Not
         * subject to conformance testing. X.701 A.3.4.
         *
         * @public
         * @readonly
         */
        readonly systemsManagementUserInformation?: OPTIONAL<GraphicString>
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
export function _decode_SMASEUserData(el: _Element): SMASEUserData {
    if (!_cached_decoder_for_SMASEUserData) {
        _cached_decoder_for_SMASEUserData = function (
            el: _Element
        ): SMASEUserData {
            let smfuPackages: OPTIONAL<FunctionalUnitPackage[]>;
            let reason: OPTIONAL<Reason>;
            let systemsManagementUserInformation: OPTIONAL<GraphicString>;
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
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SMASEUserData,
                _extension_additions_list_spec_for_SMASEUserData,
                _root_component_type_list_2_spec_for_SMASEUserData,
                undefined
            );
            return new SMASEUserData (
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
): _Element {
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
