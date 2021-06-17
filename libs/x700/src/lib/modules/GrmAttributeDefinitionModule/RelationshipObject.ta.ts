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
    TemplateLabel,
    _decode_TemplateLabel,
    _encode_TemplateLabel,
} from '../DefinitionASN1Module/TemplateLabel.ta';
export {
    TemplateLabel,
    _decode_TemplateLabel,
    _encode_TemplateLabel,
} from '../DefinitionASN1Module/TemplateLabel.ta';
import {
    TemplateList,
    _decode_TemplateList,
    _encode_TemplateList,
} from '../DefinitionASN1Module/TemplateList.ta';
export {
    TemplateList,
    _decode_TemplateList,
    _encode_TemplateList,
} from '../DefinitionASN1Module/TemplateList.ta';

/* START_OF_SYMBOL_DEFINITION RelationshipObject */
/**
 * @summary RelationshipObject
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RelationshipObject ::= SEQUENCE {
 *   class      TemplateLabel,
 *   qualifies  TemplateList OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class RelationshipObject {
    constructor(
        /**
         * @summary `class_`.
         * @public
         * @readonly
         */
        readonly class_: TemplateLabel,
        /**
         * @summary `qualifies`.
         * @public
         * @readonly
         */
        readonly qualifies: OPTIONAL<TemplateList>
    ) {}

    /**
     * @summary Restructures an object into a RelationshipObject
     * @description
     *
     * This takes an `object` and converts it to a `RelationshipObject`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RelationshipObject`.
     * @returns {RelationshipObject}
     */
    public static _from_object(
        _o: { [_K in keyof RelationshipObject]: RelationshipObject[_K] }
    ): RelationshipObject {
        return new RelationshipObject(_o.class_, _o.qualifies);
    }
}
/* END_OF_SYMBOL_DEFINITION RelationshipObject */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RelationshipObject */
/**
 * @summary The Leading Root Component Types of RelationshipObject
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RelationshipObject: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'class',
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'qualifies',
        true,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RelationshipObject */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RelationshipObject */
/**
 * @summary The Trailing Root Component Types of RelationshipObject
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RelationshipObject: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RelationshipObject */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RelationshipObject */
/**
 * @summary The Extension Addition Component Types of RelationshipObject
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RelationshipObject: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RelationshipObject */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RelationshipObject */
let _cached_decoder_for_RelationshipObject: $.ASN1Decoder<RelationshipObject> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RelationshipObject */

/* START_OF_SYMBOL_DEFINITION _decode_RelationshipObject */
/**
 * @summary Decodes an ASN.1 element into a(n) RelationshipObject
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RelationshipObject} The decoded data structure.
 */
export function _decode_RelationshipObject(el: _Element) {
    if (!_cached_decoder_for_RelationshipObject) {
        _cached_decoder_for_RelationshipObject = function (
            el: _Element
        ): RelationshipObject {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let class_!: TemplateLabel;
            let qualifies: OPTIONAL<TemplateList>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                class: (_el: _Element): void => {
                    class_ = _decode_TemplateLabel(_el);
                },
                qualifies: (_el: _Element): void => {
                    qualifies = _decode_TemplateList(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_RelationshipObject,
                _extension_additions_list_spec_for_RelationshipObject,
                _root_component_type_list_2_spec_for_RelationshipObject,
                undefined
            );
            return new RelationshipObject /* SEQUENCE_CONSTRUCTOR_CALL */(
                class_,
                qualifies
            );
        };
    }
    return _cached_decoder_for_RelationshipObject(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RelationshipObject */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RelationshipObject */
let _cached_encoder_for_RelationshipObject: $.ASN1Encoder<RelationshipObject> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RelationshipObject */

/* START_OF_SYMBOL_DEFINITION _encode_RelationshipObject */
/**
 * @summary Encodes a(n) RelationshipObject into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RelationshipObject, encoded as an ASN.1 Element.
 */
export function _encode_RelationshipObject(
    value: RelationshipObject,
    elGetter: $.ASN1Encoder<RelationshipObject>
) {
    if (!_cached_encoder_for_RelationshipObject) {
        _cached_encoder_for_RelationshipObject = function (
            value: RelationshipObject,
            elGetter: $.ASN1Encoder<RelationshipObject>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_TemplateLabel(
                            value.class_,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.qualifies === undefined
                            ? undefined
                            : _encode_TemplateList(value.qualifies, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_RelationshipObject(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RelationshipObject */

/* eslint-enable */
