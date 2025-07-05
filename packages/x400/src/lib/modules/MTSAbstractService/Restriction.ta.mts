/* eslint-disable */
import {
    OPTIONAL,
    BOOLEAN,
    TRUE,
    TRUE_BIT,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Restriction_source_type, Restriction_source_type_originated_by /* IMPORTED_LONG_NAMED_BIT */, Restriction_source_type_redirected_by /* IMPORTED_LONG_NAMED_BIT */, Restriction_source_type_dl_expanded_by /* IMPORTED_LONG_NAMED_BIT */, _decode_Restriction_source_type, _encode_Restriction_source_type } from "../MTSAbstractService/Restriction-source-type.ta.mjs";
import { ExactOrPattern, _decode_ExactOrPattern, _encode_ExactOrPattern } from "../MTSAbstractService/ExactOrPattern.ta.mjs";
/**
 * @summary Restriction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Restriction ::= SET {
 *   permitted    BOOLEAN DEFAULT TRUE,
 *   source-type
 *     BIT STRING {originated-by(0), redirected-by(1), dl-expanded-by(2)}
 *       DEFAULT {originated-by, redirected-by, dl-expanded-by},
 *   source-name  ExactOrPattern OPTIONAL
 * }
 * ```
 * 
 */
export
class Restriction {
    constructor (
        /**
         * @summary `permitted`.
         * @public
         * @readonly
         */
        readonly permitted: OPTIONAL<BOOLEAN>,
        /**
         * @summary `source_type`.
         * @public
         * @readonly
         */
        readonly source_type: OPTIONAL<Restriction_source_type>,
        /**
         * @summary `source_name`.
         * @public
         * @readonly
         */
        readonly source_name: OPTIONAL<ExactOrPattern>
    ) {}

    /**
     * @summary Restructures an object into a Restriction
     * @description
     * 
     * This takes an `object` and converts it to a `Restriction`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Restriction`.
     * @returns {Restriction}
     */
    public static _from_object (_o: { [_K in keyof (Restriction)]: (Restriction)[_K] }): Restriction {
        return new Restriction(_o.permitted, _o.source_type, _o.source_name);
    }

    /**
     * @summary Getter that returns the default value for `permitted`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_permitted (): BOOLEAN { return TRUE; }
    /**
     * @summary Getter that returns the default value for `source_type`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_source_type (): Restriction_source_type {
        return (() => {
            const _ret = new Uint8ClampedArray(3);
            _ret[Restriction_source_type_originated_by] = TRUE_BIT;
            _ret[Restriction_source_type_redirected_by] = TRUE_BIT;
            _ret[Restriction_source_type_dl_expanded_by] = TRUE_BIT;
            return _ret;
        })();
    }
}

/**
 * @summary The Leading Root Component Types of Restriction
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Restriction: $.ComponentSpec[] = [
    new $.ComponentSpec("permitted", true, $.hasTag(_TagClass.universal, 1)),
    new $.ComponentSpec("source-type", true, $.hasTag(_TagClass.universal, 3)),
    new $.ComponentSpec("source-name", true, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of Restriction
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Restriction: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Restriction
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Restriction: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Restriction: $.ASN1Decoder<Restriction> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Restriction
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Restriction} The decoded data structure.
 */
export
function _decode_Restriction (el: _Element): Restriction {
    if (!_cached_decoder_for_Restriction) { _cached_decoder_for_Restriction = function (el: _Element): Restriction {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let permitted: OPTIONAL<BOOLEAN> = Restriction._default_value_for_permitted;
    let source_type: OPTIONAL<Restriction_source_type> = Restriction._default_value_for_source_type;
    let source_name: OPTIONAL<ExactOrPattern>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    const callbacks: $.DecodingMap = {
        "permitted": (_el: _Element): void => { permitted = $._decodeBoolean(_el); },
        "source-type": (_el: _Element): void => { source_type = _decode_Restriction_source_type(_el); },
        "source-name": (_el: _Element): void => { source_name = _decode_ExactOrPattern(_el); }
    };
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_Restriction,
        _extension_additions_list_spec_for_Restriction,
        _root_component_type_list_2_spec_for_Restriction,
        undefined,
    );
    return new Restriction( /* SET_CONSTRUCTOR_CALL */
        permitted,
        source_type,
        source_name
    );
}; }
    return _cached_decoder_for_Restriction(el);
}

let _cached_encoder_for_Restriction: $.ASN1Encoder<Restriction> | null = null;

/**
 * @summary Encodes a(n) Restriction into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Restriction, encoded as an ASN.1 Element.
 */
export
function _encode_Restriction (value: Restriction, elGetter: $.ASN1Encoder<Restriction>): _Element {
    if (!_cached_encoder_for_Restriction) { _cached_encoder_for_Restriction = function (value: Restriction): _Element {
    return $._encodeSet(([] as (_Element | undefined)[]).concat(
        [
            /* IF_DEFAULT */ (value.permitted === undefined || $.deepEq(value.permitted, Restriction._default_value_for_permitted) ? undefined : $._encodeBoolean(value.permitted, $.BER)),
            /* IF_DEFAULT */ (value.source_type === undefined || $.deepEq(value.source_type, Restriction._default_value_for_source_type) ? undefined : _encode_Restriction_source_type(value.source_type, $.BER)),
            /* IF_ABSENT  */ ((value.source_name === undefined) ? undefined : _encode_ExactOrPattern(value.source_name, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Restriction(value, elGetter);
}


/* eslint-enable */
