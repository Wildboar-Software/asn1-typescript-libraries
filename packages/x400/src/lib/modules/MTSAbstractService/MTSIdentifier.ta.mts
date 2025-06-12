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
    GlobalDomainIdentifier,
    _decode_GlobalDomainIdentifier,
    _encode_GlobalDomainIdentifier,
} from '../MTSAbstractService/GlobalDomainIdentifier.ta.mjs';
export {
    GlobalDomainIdentifier,
    _decode_GlobalDomainIdentifier,
    _encode_GlobalDomainIdentifier,
} from '../MTSAbstractService/GlobalDomainIdentifier.ta.mjs';
import {
    LocalIdentifier,
    _decode_LocalIdentifier,
    _encode_LocalIdentifier,
} from '../MTSAbstractService/LocalIdentifier.ta.mjs';
export {
    LocalIdentifier,
    _decode_LocalIdentifier,
    _encode_LocalIdentifier,
} from '../MTSAbstractService/LocalIdentifier.ta.mjs';

/* START_OF_SYMBOL_DEFINITION MTSIdentifier */
/**
 * @summary MTSIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MTSIdentifier ::= [APPLICATION 4]  SEQUENCE {
 *   global-domain-identifier  GlobalDomainIdentifier,
 *   local-identifier          LocalIdentifier
 * }
 * ```
 *
 * @class
 */
export class MTSIdentifier {
    constructor(
        /**
         * @summary `global_domain_identifier`.
         * @public
         * @readonly
         */
        readonly global_domain_identifier: GlobalDomainIdentifier,
        /**
         * @summary `local_identifier`.
         * @public
         * @readonly
         */
        readonly local_identifier: LocalIdentifier
    ) {}

    /**
     * @summary Restructures an object into a MTSIdentifier
     * @description
     *
     * This takes an `object` and converts it to a `MTSIdentifier`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MTSIdentifier`.
     * @returns {MTSIdentifier}
     */
    public static _from_object(
        _o: { [_K in keyof MTSIdentifier]: MTSIdentifier[_K] }
    ): MTSIdentifier {
        return new MTSIdentifier(
            _o.global_domain_identifier,
            _o.local_identifier
        );
    }
}
/* END_OF_SYMBOL_DEFINITION MTSIdentifier */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_MTSIdentifier */
/**
 * @summary The Leading Root Component Types of MTSIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_MTSIdentifier: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'global-domain-identifier',
        false,
        $.hasTag(_TagClass.application, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'local-identifier',
        false,
        $.hasTag(_TagClass.universal, 22),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_MTSIdentifier */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_MTSIdentifier */
/**
 * @summary The Trailing Root Component Types of MTSIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MTSIdentifier: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_MTSIdentifier */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_MTSIdentifier */
/**
 * @summary The Extension Addition Component Types of MTSIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MTSIdentifier: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_MTSIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MTSIdentifier */
let _cached_decoder_for_MTSIdentifier: $.ASN1Decoder<MTSIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MTSIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_MTSIdentifier */
/**
 * @summary Decodes an ASN.1 element into a(n) MTSIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MTSIdentifier} The decoded data structure.
 */
export function _decode_MTSIdentifier(el: _Element) {
    if (!_cached_decoder_for_MTSIdentifier) {
        _cached_decoder_for_MTSIdentifier = $._decode_implicit<MTSIdentifier>(
            () =>
                function (el: _Element): MTSIdentifier {
                    const sequence: _Element[] = el.sequence;
                    if (sequence.length < 2) {
                        throw new _ConstructionError(
                            'MTSIdentifier contained only ' +
                                sequence.length.toString() +
                                ' elements.'
                        );
                    }
                    sequence[0].name = 'global-domain-identifier';
                    sequence[1].name = 'local-identifier';
                    let global_domain_identifier!: GlobalDomainIdentifier;
                    let local_identifier!: LocalIdentifier;
                    global_domain_identifier = _decode_GlobalDomainIdentifier(
                        sequence[0]
                    );
                    local_identifier = _decode_LocalIdentifier(sequence[1]);
                    return new MTSIdentifier(
                        global_domain_identifier,
                        local_identifier
                    );
                }
        );
    }
    return _cached_decoder_for_MTSIdentifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MTSIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MTSIdentifier */
let _cached_encoder_for_MTSIdentifier: $.ASN1Encoder<MTSIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MTSIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_MTSIdentifier */
/**
 * @summary Encodes a(n) MTSIdentifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MTSIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_MTSIdentifier(
    value: MTSIdentifier,
    elGetter: $.ASN1Encoder<MTSIdentifier>
) {
    if (!_cached_encoder_for_MTSIdentifier) {
        _cached_encoder_for_MTSIdentifier = $._encode_implicit(
            _TagClass.application,
            4,
            () =>
                function (
                    value: MTSIdentifier,
                    elGetter: $.ASN1Encoder<MTSIdentifier>
                ): _Element {
                    return $._encodeSequence(
                        ([] as (_Element | undefined)[])
                            .concat([
                                /* REQUIRED   */ _encode_GlobalDomainIdentifier(
                                    value.global_domain_identifier,
                                    $.BER
                                ),
                                /* REQUIRED   */ _encode_LocalIdentifier(
                                    value.local_identifier,
                                    $.BER
                                ),
                            ])
                            .filter(
                                (c: _Element | undefined): c is _Element => !!c
                            ),
                        $.BER
                    );
                },
            $.BER
        );
    }
    return _cached_encoder_for_MTSIdentifier(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MTSIdentifier */

/* eslint-enable */
