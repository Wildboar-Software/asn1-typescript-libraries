/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';
import {
    TemplateLabel,
    _decode_TemplateLabel,
    _encode_TemplateLabel,
} from '../DefinitionASN1Module/TemplateLabel.ta.mjs';
import {
    TemplateList,
    _decode_TemplateList,
    _encode_TemplateList,
} from '../DefinitionASN1Module/TemplateList.ta.mjs';
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
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        'qualifies',
        true,
        $.hasTag(_TagClass.universal, 17)
    ),
];

/**
 * @summary The Trailing Root Component Types of RelationshipObject
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RelationshipObject: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of RelationshipObject
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RelationshipObject: $.ComponentSpec[] = [];

let _cached_decoder_for_RelationshipObject: $.ASN1Decoder<RelationshipObject> | null = null;

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

let _cached_encoder_for_RelationshipObject: $.ASN1Encoder<RelationshipObject> | null = null;

/**
 * @summary Encodes a(n) RelationshipObject into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RelationshipObject, encoded as an ASN.1 Element.
 */
export function _encode_RelationshipObject(
    value: RelationshipObject,
    elGetter: $.ASN1Encoder<RelationshipObject>
) {
    if (!_cached_encoder_for_RelationshipObject) {
        _cached_encoder_for_RelationshipObject = function (
            value: RelationshipObject        ): _Element {
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


/* eslint-enable */
