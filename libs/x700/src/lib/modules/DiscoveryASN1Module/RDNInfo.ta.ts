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
import * as $ from 'asn1-ts/dist/node/functional';
import {
    RelativeDistinguishedName,
    _decode_RelativeDistinguishedName,
    _encode_RelativeDistinguishedName,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/RelativeDistinguishedName.ta';
export {
    RelativeDistinguishedName,
    _decode_RelativeDistinguishedName,
    _encode_RelativeDistinguishedName,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/RelativeDistinguishedName.ta';
import {
    GdmoObjectClass,
    _decode_GdmoObjectClass,
    _encode_GdmoObjectClass,
} from '../RepertoireASN1Module/GdmoObjectClass.ta';
export {
    GdmoObjectClass,
    _decode_GdmoObjectClass,
    _encode_GdmoObjectClass,
} from '../RepertoireASN1Module/GdmoObjectClass.ta';

/* START_OF_SYMBOL_DEFINITION RDNInfo */
/**
 * @summary RDNInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RDNInfo ::= SEQUENCE {
 *   rdn      RelativeDistinguishedName,
 *   moClass  GdmoObjectClass OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class RDNInfo {
    constructor(
        /**
         * @summary `rdn`.
         * @public
         * @readonly
         */
        readonly rdn: RelativeDistinguishedName,
        /**
         * @summary `moClass`.
         * @public
         * @readonly
         */
        readonly moClass: OPTIONAL<GdmoObjectClass>
    ) {}

    /**
     * @summary Restructures an object into a RDNInfo
     * @description
     *
     * This takes an `object` and converts it to a `RDNInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RDNInfo`.
     * @returns {RDNInfo}
     */
    public static _from_object(
        _o: { [_K in keyof RDNInfo]: RDNInfo[_K] }
    ): RDNInfo {
        return new RDNInfo(_o.rdn, _o.moClass);
    }
}
/* END_OF_SYMBOL_DEFINITION RDNInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RDNInfo */
/**
 * @summary The Leading Root Component Types of RDNInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RDNInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'rdn',
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'moClass',
        true,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RDNInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RDNInfo */
/**
 * @summary The Trailing Root Component Types of RDNInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RDNInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RDNInfo */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RDNInfo */
/**
 * @summary The Extension Addition Component Types of RDNInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RDNInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RDNInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RDNInfo */
let _cached_decoder_for_RDNInfo: $.ASN1Decoder<RDNInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RDNInfo */

/* START_OF_SYMBOL_DEFINITION _decode_RDNInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) RDNInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RDNInfo} The decoded data structure.
 */
export function _decode_RDNInfo(el: _Element) {
    if (!_cached_decoder_for_RDNInfo) {
        _cached_decoder_for_RDNInfo = function (el: _Element): RDNInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let rdn!: RelativeDistinguishedName;
            let moClass: OPTIONAL<GdmoObjectClass>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                rdn: (_el: _Element): void => {
                    rdn = _decode_RelativeDistinguishedName(_el);
                },
                moClass: (_el: _Element): void => {
                    moClass = _decode_GdmoObjectClass(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_RDNInfo,
                _extension_additions_list_spec_for_RDNInfo,
                _root_component_type_list_2_spec_for_RDNInfo,
                undefined
            );
            return new RDNInfo /* SEQUENCE_CONSTRUCTOR_CALL */(rdn, moClass);
        };
    }
    return _cached_decoder_for_RDNInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RDNInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RDNInfo */
let _cached_encoder_for_RDNInfo: $.ASN1Encoder<RDNInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RDNInfo */

/* START_OF_SYMBOL_DEFINITION _encode_RDNInfo */
/**
 * @summary Encodes a(n) RDNInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RDNInfo, encoded as an ASN.1 Element.
 */
export function _encode_RDNInfo(
    value: RDNInfo,
    elGetter: $.ASN1Encoder<RDNInfo>
) {
    if (!_cached_encoder_for_RDNInfo) {
        _cached_encoder_for_RDNInfo = function (
            value: RDNInfo,
            elGetter: $.ASN1Encoder<RDNInfo>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_RelativeDistinguishedName(
                            value.rdn,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.moClass === undefined
                            ? undefined
                            : _encode_GdmoObjectClass(value.moClass, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_RDNInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RDNInfo */

/* eslint-enable */
