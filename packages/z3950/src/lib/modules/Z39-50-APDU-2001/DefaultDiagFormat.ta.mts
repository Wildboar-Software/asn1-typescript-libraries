/* eslint-disable */
import {
    INTEGER,
    OBJECT_IDENTIFIER,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DefaultDiagFormat_addinfo, _decode_DefaultDiagFormat_addinfo, _encode_DefaultDiagFormat_addinfo } from "../Z39-50-APDU-2001/DefaultDiagFormat-addinfo.ta.mjs";


/**
 * @summary DefaultDiagFormat
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DefaultDiagFormat ::= SEQUENCE {
 *     diagnosticSetId OBJECT IDENTIFIER,
 *     condition       INTEGER,
 *     addinfo         CHOICE {
 *         v2Addinfo       VisibleString,      --Version 2
 *         v3Addinfo       InternationalString --Version 3
 *         -- SEE COMMENT 1
 *     }
 * }
 * ```
 * 
 * @class
 */
export
class DefaultDiagFormat {
    /**
     * @summary `diagnosticSetId`.
     * @public
     * @readonly
     */
    readonly diagnosticSetId: OBJECT_IDENTIFIER;
    /**
     * @summary `condition`.
     * @public
     * @readonly
     */
    readonly condition: INTEGER;
    /**
     * @summary `addinfo`.
     * @public
     * @readonly
     */
    readonly addinfo: DefaultDiagFormat_addinfo;

    constructor (
        diagnosticSetId: OBJECT_IDENTIFIER,
        condition: INTEGER,
        addinfo: DefaultDiagFormat_addinfo
    ) {
        this.diagnosticSetId = diagnosticSetId;
        this.condition = condition;
        this.addinfo = addinfo;
    }

    /**
     * @summary Restructures an object into a DefaultDiagFormat
     * @description
     * 
     * This takes an `object` and converts it to a `DefaultDiagFormat`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DefaultDiagFormat`.
     * @returns {DefaultDiagFormat}
     */
    public static _from_object (_o: { [_K in keyof (DefaultDiagFormat)]: (DefaultDiagFormat)[_K] }): DefaultDiagFormat {
        return new DefaultDiagFormat(_o.diagnosticSetId, _o.condition, _o.addinfo);
    }


}

/**
 * @summary The Leading Root Component Types of DefaultDiagFormat
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DefaultDiagFormat: $.ComponentSpec[] = [
    new $.ComponentSpec("diagnosticSetId", false, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("condition", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("addinfo", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of DefaultDiagFormat
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DefaultDiagFormat: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DefaultDiagFormat
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DefaultDiagFormat: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DefaultDiagFormat: $.ASN1Decoder<DefaultDiagFormat> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DefaultDiagFormat
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DefaultDiagFormat (el: _Element): DefaultDiagFormat {
    if (!_cached_decoder_for_DefaultDiagFormat) { _cached_decoder_for_DefaultDiagFormat = function (el: _Element): DefaultDiagFormat {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("DefaultDiagFormat contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "diagnosticSetId";
    sequence[1].name = "condition";
    sequence[2].name = "addinfo";
    let diagnosticSetId!: OBJECT_IDENTIFIER;
    let condition!: INTEGER;
    let addinfo!: DefaultDiagFormat_addinfo;
    diagnosticSetId = $._decodeObjectIdentifier(sequence[0]);
    condition = $._decodeInteger(sequence[1]);
    addinfo = _decode_DefaultDiagFormat_addinfo(sequence[2]);
    return new DefaultDiagFormat(
        diagnosticSetId,
        condition,
        addinfo,

    );
}; }
    return _cached_decoder_for_DefaultDiagFormat(el);
}

let _cached_encoder_for_DefaultDiagFormat: $.ASN1Encoder<DefaultDiagFormat> | null = null;

/**
 * @summary Encodes a(n) DefaultDiagFormat into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DefaultDiagFormat, encoded as an ASN.1 Element.
 */
export
function _encode_DefaultDiagFormat (value: DefaultDiagFormat, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DefaultDiagFormat) { _cached_encoder_for_DefaultDiagFormat = function (value: DefaultDiagFormat, elGetter: $.ASN1Encoder<DefaultDiagFormat>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encodeObjectIdentifier(value.diagnosticSetId, $.BER),
        /* REQUIRED   */ $._encodeInteger(value.condition, $.BER),
        /* REQUIRED   */ _encode_DefaultDiagFormat_addinfo(value.addinfo, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_DefaultDiagFormat(value, elGetter);
}


/* eslint-enable */
