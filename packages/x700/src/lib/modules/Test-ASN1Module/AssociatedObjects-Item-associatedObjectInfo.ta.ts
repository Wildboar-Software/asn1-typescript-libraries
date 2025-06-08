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
import { TMF_OBJECT } from '../Test-ASN1Module/TMF-OBJECT.oca';
export { TMF_OBJECT } from '../Test-ASN1Module/TMF-OBJECT.oca';
import { AssociatedObjectSet } from '../Test-ASN1Module/AssociatedObjectSet.osa';
export { AssociatedObjectSet } from '../Test-ASN1Module/AssociatedObjectSet.osa';

/* START_OF_SYMBOL_DEFINITION AssociatedObjects_Item_associatedObjectInfo */
/**
 * @summary AssociatedObjects_Item_associatedObjectInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AssociatedObjects-Item-associatedObjectInfo ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class AssociatedObjects_Item_associatedObjectInfo {
    constructor(
        /**
         * @summary `associatedObjectInfoId`.
         * @public
         * @readonly
         */
        readonly associatedObjectInfoId: OBJECT_IDENTIFIER,
        /**
         * @summary `associatedObjectInform`.
         * @public
         * @readonly
         */
        readonly associatedObjectInform: OPTIONAL<_Element>
    ) {}

    /**
     * @summary Restructures an object into a AssociatedObjects_Item_associatedObjectInfo
     * @description
     *
     * This takes an `object` and converts it to a `AssociatedObjects_Item_associatedObjectInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AssociatedObjects_Item_associatedObjectInfo`.
     * @returns {AssociatedObjects_Item_associatedObjectInfo}
     */
    public static _from_object(
        _o: {
            [_K in keyof AssociatedObjects_Item_associatedObjectInfo]: AssociatedObjects_Item_associatedObjectInfo[_K];
        }
    ): AssociatedObjects_Item_associatedObjectInfo {
        return new AssociatedObjects_Item_associatedObjectInfo(
            _o.associatedObjectInfoId,
            _o.associatedObjectInform
        );
    }
}
/* END_OF_SYMBOL_DEFINITION AssociatedObjects_Item_associatedObjectInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AssociatedObjects_Item_associatedObjectInfo */
/**
 * @summary The Leading Root Component Types of AssociatedObjects_Item_associatedObjectInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AssociatedObjects_Item_associatedObjectInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'associatedObjectInfoId',
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'associatedObjectInform',
        true,
        $.hasAnyTag,
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AssociatedObjects_Item_associatedObjectInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AssociatedObjects_Item_associatedObjectInfo */
/**
 * @summary The Trailing Root Component Types of AssociatedObjects_Item_associatedObjectInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AssociatedObjects_Item_associatedObjectInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AssociatedObjects_Item_associatedObjectInfo */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AssociatedObjects_Item_associatedObjectInfo */
/**
 * @summary The Extension Addition Component Types of AssociatedObjects_Item_associatedObjectInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AssociatedObjects_Item_associatedObjectInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AssociatedObjects_Item_associatedObjectInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AssociatedObjects_Item_associatedObjectInfo */
let _cached_decoder_for_AssociatedObjects_Item_associatedObjectInfo: $.ASN1Decoder<AssociatedObjects_Item_associatedObjectInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AssociatedObjects_Item_associatedObjectInfo */

/* START_OF_SYMBOL_DEFINITION _decode_AssociatedObjects_Item_associatedObjectInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) AssociatedObjects_Item_associatedObjectInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AssociatedObjects_Item_associatedObjectInfo} The decoded data structure.
 */
export function _decode_AssociatedObjects_Item_associatedObjectInfo(
    el: _Element
) {
    if (!_cached_decoder_for_AssociatedObjects_Item_associatedObjectInfo) {
        _cached_decoder_for_AssociatedObjects_Item_associatedObjectInfo = function (
            el: _Element
        ): AssociatedObjects_Item_associatedObjectInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let associatedObjectInfoId!: OBJECT_IDENTIFIER;
            let associatedObjectInform: OPTIONAL<_Element>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                associatedObjectInfoId: (_el: _Element): void => {
                    associatedObjectInfoId = $._decodeObjectIdentifier(_el);
                },
                associatedObjectInform: (_el: _Element): void => {
                    associatedObjectInform = $._decodeAny(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AssociatedObjects_Item_associatedObjectInfo,
                _extension_additions_list_spec_for_AssociatedObjects_Item_associatedObjectInfo,
                _root_component_type_list_2_spec_for_AssociatedObjects_Item_associatedObjectInfo,
                undefined
            );
            return new AssociatedObjects_Item_associatedObjectInfo /* SEQUENCE_CONSTRUCTOR_CALL */(
                associatedObjectInfoId,
                associatedObjectInform
            );
        };
    }
    return _cached_decoder_for_AssociatedObjects_Item_associatedObjectInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AssociatedObjects_Item_associatedObjectInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AssociatedObjects_Item_associatedObjectInfo */
let _cached_encoder_for_AssociatedObjects_Item_associatedObjectInfo: $.ASN1Encoder<AssociatedObjects_Item_associatedObjectInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AssociatedObjects_Item_associatedObjectInfo */

/* START_OF_SYMBOL_DEFINITION _encode_AssociatedObjects_Item_associatedObjectInfo */
/**
 * @summary Encodes a(n) AssociatedObjects_Item_associatedObjectInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AssociatedObjects_Item_associatedObjectInfo, encoded as an ASN.1 Element.
 */
export function _encode_AssociatedObjects_Item_associatedObjectInfo(
    value: AssociatedObjects_Item_associatedObjectInfo,
    elGetter: $.ASN1Encoder<AssociatedObjects_Item_associatedObjectInfo>
) {
    if (!_cached_encoder_for_AssociatedObjects_Item_associatedObjectInfo) {
        _cached_encoder_for_AssociatedObjects_Item_associatedObjectInfo = function (
            value: AssociatedObjects_Item_associatedObjectInfo,
            elGetter: $.ASN1Encoder<AssociatedObjects_Item_associatedObjectInfo>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeObjectIdentifier(
                            value.associatedObjectInfoId,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.associatedObjectInform ===
                        undefined
                            ? undefined
                            : $._encodeAny(value.associatedObjectInform, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_AssociatedObjects_Item_associatedObjectInfo(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_AssociatedObjects_Item_associatedObjectInfo */

/* eslint-enable */
