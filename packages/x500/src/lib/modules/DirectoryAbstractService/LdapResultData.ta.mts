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
    LDAPMessage,
    _decode_LDAPMessage,
    _encode_LDAPMessage,
} from "@wildboar/ldap";
import {
    CommonResultsSeq,
    _root_component_type_list_1_spec_for_CommonResultsSeq,
} from "../DirectoryAbstractService/CommonResultsSeq.ta.mjs";

/**
 * @summary LdapResultData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LdapResultData ::= SEQUENCE {
 *   ldapMessages   SEQUENCE SIZE (1..MAX) OF LDAPMessage OPTIONAL,
 *   returnToClient BOOLEAN DEFAULT FALSE,
 *   ...,
 *   ...,
 *   COMPONENTS OF CommonResultsSeq }
 * ```
 *
 */
export class LdapResultData implements CommonResultsSeq {
    constructor(
        /**
         * @summary `ldapMessages`.
         * @public
         * @readonly
         */
        readonly ldapMessages?: OPTIONAL<LDAPMessage[]>,
        /**
         * @summary `returnToClient`.
         * @public
         * @readonly
         */
        readonly returnToClient?: OPTIONAL<BOOLEAN>,
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
     * @summary Restructures an object into a LdapResultData
     * @description
     *
     * This takes an `object` and converts it to a `LdapResultData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LdapResultData`.
     * @returns {LdapResultData}
     */
    public static _from_object(
        _o: { [_K in keyof LdapResultData]: LdapResultData[_K] }
    ): LdapResultData {
        return new LdapResultData(
            _o.ldapMessages,
            _o.returnToClient,
            _o._unrecognizedExtensionsList,
            _o.securityParameters,
            _o.performer,
            _o.aliasDereferenced,
            _o.notification
        );
    }

    /**
     * @summary Getter that returns the default value for `returnToClient`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_returnToClient(): BOOLEAN {
        return false;
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
 * @summary The Leading Root Component Types of LdapResultData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_LdapResultData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "ldapMessages",
        true,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "returnToClient",
        true,
        $.hasTag(_TagClass.universal, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of LdapResultData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_LdapResultData: $.ComponentSpec[] = [
    ..._root_component_type_list_1_spec_for_CommonResultsSeq,
];

/**
 * @summary The Extension Addition Component Types of LdapResultData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_LdapResultData: $.ComponentSpec[] = [];

let _cached_decoder_for_LdapResultData: $.ASN1Decoder<LdapResultData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LdapResultData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LdapResultData} The decoded data structure.
 */
export function _decode_LdapResultData(el: _Element): LdapResultData {
    if (!_cached_decoder_for_LdapResultData) {
        _cached_decoder_for_LdapResultData = function (
            el: _Element
        ): LdapResultData {
            let ldapMessages: OPTIONAL<LDAPMessage[]>;
            let returnToClient: OPTIONAL<BOOLEAN> =
                LdapResultData._default_value_for_returnToClient;
            let _unrecognizedExtensionsList: _Element[] = [];
            let securityParameters: OPTIONAL<SecurityParameters>;
            let performer: OPTIONAL<DistinguishedName>;
            let aliasDereferenced: OPTIONAL<BOOLEAN> =
                LdapResultData._default_value_for_aliasDereferenced;
            let notification: OPTIONAL<Attribute[]>;
            const callbacks: $.DecodingMap = {
                ldapMessages: (_el: _Element): void => {
                    ldapMessages = $._decodeSequenceOf<LDAPMessage>(
                        () => _decode_LDAPMessage
                    )(_el);
                },
                returnToClient: (_el: _Element): void => {
                    returnToClient = $._decodeBoolean(_el);
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
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_LdapResultData,
                _extension_additions_list_spec_for_LdapResultData,
                _root_component_type_list_2_spec_for_LdapResultData,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new LdapResultData(
                ldapMessages,
                returnToClient,
                _unrecognizedExtensionsList,
                securityParameters,
                performer,
                aliasDereferenced,
                notification
            );
        };
    }
    return _cached_decoder_for_LdapResultData(el);
}

let _cached_encoder_for_LdapResultData: $.ASN1Encoder<LdapResultData> | null = null;

/**
 * @summary Encodes a(n) LdapResultData into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LdapResultData, encoded as an ASN.1 Element.
 */
export function _encode_LdapResultData(
    value: LdapResultData,
    elGetter: $.ASN1Encoder<LdapResultData>
): _Element {
    if (!_cached_encoder_for_LdapResultData) {
        _cached_encoder_for_LdapResultData = function (
            value: LdapResultData        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.ldapMessages === undefined
                                ? undefined
                                : $._encodeSequenceOf<LDAPMessage>(
                                      () => _encode_LDAPMessage,
                                      $.BER
                                  )(value.ldapMessages, $.BER),
                            /* IF_DEFAULT */ value.returnToClient ===
                                undefined ||
                            $.deepEq(
                                value.returnToClient,
                                LdapResultData._default_value_for_returnToClient
                            )
                                ? undefined
                                : $._encodeBoolean(value.returnToClient, $.BER),
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
                                LdapResultData._default_value_for_aliasDereferenced
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
    return _cached_encoder_for_LdapResultData(value, elGetter);
}


/* eslint-enable */
