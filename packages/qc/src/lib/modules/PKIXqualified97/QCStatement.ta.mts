/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary QCStatement
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * QCStatement ::= SEQUENCE {
 *     statementId   QC-STATEMENT.&id({SupportedStatements}),
 *     statementInfo QC-STATEMENT.&Type
 *     ({SupportedStatements}{@statementId}) OPTIONAL }
 * ```
 *
 */
export class QCStatement {
    constructor(
        /**
         * @summary `statementId`.
         * @public
         * @readonly
         */
        readonly statementId: OBJECT_IDENTIFIER,
        /**
         * @summary `statementInfo`.
         * @public
         * @readonly
         */
        readonly statementInfo: OPTIONAL<_Element>
    ) {}

    /**
     * @summary Restructures an object into a QCStatement
     * @description
     *
     * This takes an `object` and converts it to a `QCStatement`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `QCStatement`.
     * @returns {QCStatement}
     */
    public static _from_object(
        _o: { [_K in keyof QCStatement]: QCStatement[_K] }
    ): QCStatement {
        return new QCStatement(_o.statementId, _o.statementInfo);
    }
}


/**
 * @summary The Leading Root Component Types of QCStatement
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_QCStatement: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "statementId",
        false,
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec(
        "statementInfo",
        true,
        $.hasAnyTag
    ),
];


/**
 * @summary The Trailing Root Component Types of QCStatement
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_QCStatement: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of QCStatement
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_QCStatement: $.ComponentSpec[] = [];


let _cached_decoder_for_QCStatement: $.ASN1Decoder<QCStatement> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) QCStatement
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {QCStatement} The decoded data structure.
 */
export function _decode_QCStatement(el: _Element): QCStatement {
    if (!_cached_decoder_for_QCStatement) {
        _cached_decoder_for_QCStatement = function (el: _Element): QCStatement {
            let statementId!: OBJECT_IDENTIFIER;
            let statementInfo: OPTIONAL<_Element>;
            const callbacks: $.DecodingMap = {
                statementId: (_el: _Element): void => {
                    statementId = $._decodeObjectIdentifier(_el);
                },
                statementInfo: (_el: _Element): void => {
                    statementInfo = $._decodeAny(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_QCStatement,
                _extension_additions_list_spec_for_QCStatement,
                _root_component_type_list_2_spec_for_QCStatement,
                undefined
            );
            return new QCStatement(
                statementId,
                statementInfo
            );
        };
    }
    return _cached_decoder_for_QCStatement(el);
}


let _cached_encoder_for_QCStatement: $.ASN1Encoder<QCStatement> | null = null;


/**
 * @summary Encodes a(n) QCStatement into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The QCStatement, encoded as an ASN.1 Element.
 */
export function _encode_QCStatement(
    value: QCStatement,
    elGetter: $.ASN1Encoder<QCStatement>
): _Element {
    if (!_cached_encoder_for_QCStatement) {
        _cached_encoder_for_QCStatement = function (
            value: QCStatement        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeObjectIdentifier(
                            value.statementId,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.statementInfo === undefined
                            ? undefined
                            : $._encodeAny(value.statementInfo, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_QCStatement(value, elGetter);
}


/* eslint-enable */
