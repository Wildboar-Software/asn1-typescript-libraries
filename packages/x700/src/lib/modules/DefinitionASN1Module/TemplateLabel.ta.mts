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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    TemplateName,
    _decode_TemplateName,
    _encode_TemplateName,
} from '../DefinitionASN1Module/TemplateName.ta.mjs';
import {
    TemplateLabel_documentId,
    _decode_TemplateLabel_documentId,
    _encode_TemplateLabel_documentId,
} from '../DefinitionASN1Module/TemplateLabel-documentId.ta.mjs';

/**
 * @summary TemplateLabel
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TemplateLabel ::= SEQUENCE {
 *   localName   TemplateName,
 *   documentId
 *     CHOICE {documentName              DocumentName,
 *             documentObjectIdentifier  DocumentObjectIdentifier} OPTIONAL -- align with GDMO document identifier
 * }
 * ```
 *
 * @class
 */
export class TemplateLabel {
    constructor(
        /**
         * @summary `localName`.
         * @public
         * @readonly
         */
        readonly localName: TemplateName,
        /**
         * @summary `documentId`.
         * @public
         * @readonly
         */
        readonly documentId: OPTIONAL<TemplateLabel_documentId>
    ) {}

    /**
     * @summary Restructures an object into a TemplateLabel
     * @description
     *
     * This takes an `object` and converts it to a `TemplateLabel`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TemplateLabel`.
     * @returns {TemplateLabel}
     */
    public static _from_object(
        _o: { [_K in keyof TemplateLabel]: TemplateLabel[_K] }
    ): TemplateLabel {
        return new TemplateLabel(_o.localName, _o.documentId);
    }
}


/**
 * @summary The Leading Root Component Types of TemplateLabel
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TemplateLabel: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'localName',
        false,
        $.hasTag(_TagClass.universal, 19)
    ),
    new $.ComponentSpec('documentId', true, $.hasAnyTag),
];


/**
 * @summary The Trailing Root Component Types of TemplateLabel
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TemplateLabel: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of TemplateLabel
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TemplateLabel: $.ComponentSpec[] = [];


let _cached_decoder_for_TemplateLabel: $.ASN1Decoder<TemplateLabel> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) TemplateLabel
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TemplateLabel} The decoded data structure.
 */
export function _decode_TemplateLabel(el: _Element) {
    if (!_cached_decoder_for_TemplateLabel) {
        _cached_decoder_for_TemplateLabel = function (
            el: _Element
        ): TemplateLabel {
            let localName!: TemplateName;
            let documentId: OPTIONAL<TemplateLabel_documentId>;
            const callbacks: $.DecodingMap = {
                localName: (_el: _Element): void => {
                    localName = _decode_TemplateName(_el);
                },
                documentId: (_el: _Element): void => {
                    documentId = _decode_TemplateLabel_documentId(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TemplateLabel,
                _extension_additions_list_spec_for_TemplateLabel,
                _root_component_type_list_2_spec_for_TemplateLabel,
                undefined
            );
            return new TemplateLabel (
                localName,
                documentId
            );
        };
    }
    return _cached_decoder_for_TemplateLabel(el);
}


let _cached_encoder_for_TemplateLabel: $.ASN1Encoder<TemplateLabel> | null = null;


/**
 * @summary Encodes a(n) TemplateLabel into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TemplateLabel, encoded as an ASN.1 Element.
 */
export function _encode_TemplateLabel(
    value: TemplateLabel,
    elGetter: $.ASN1Encoder<TemplateLabel>
) {
    if (!_cached_encoder_for_TemplateLabel) {
        _cached_encoder_for_TemplateLabel = function (
            value: TemplateLabel        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_TemplateName(
                            value.localName,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.documentId === undefined
                            ? undefined
                            : _encode_TemplateLabel_documentId(
                                  value.documentId,
                                  $.BER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_TemplateLabel(value, elGetter);
}


/* eslint-enable */
