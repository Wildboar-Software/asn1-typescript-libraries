/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DefaultDiagFormat_addinfo, _decode_DefaultDiagFormat_addinfo, _encode_DefaultDiagFormat_addinfo } from "./DefaultDiagFormat-addinfo.ta.mjs";


/**
 * @summary DefaultDiagFormat
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DefaultDiagFormat ::= SEQUENCE {
 *     diagnosticSetId   OBJECT IDENTIFIER,
 *     condition         INTEGER,
 *     addinfo           DefaultDiagFormat-addinfo
 * }
 * ```
 */
export
class DefaultDiagFormat {
    constructor (
        readonly diagnosticSetId: OBJECT_IDENTIFIER,
        readonly condition: INTEGER,
        readonly addinfo: DefaultDiagFormat_addinfo
    ) {}

    public static _from_object (_o: { [_K in keyof (DefaultDiagFormat)]: (DefaultDiagFormat)[_K] }): DefaultDiagFormat {
        return new DefaultDiagFormat(_o.diagnosticSetId, _o.condition, _o.addinfo);
    }
}

export
const _root_component_type_list_1_spec_for_DefaultDiagFormat: $.ComponentSpec[] = [
    new $.ComponentSpec("diagnosticSetId", false, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("condition", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("addinfo", false, $.or($.hasTag(_TagClass.universal, 26), $.hasTag(_TagClass.universal, 27))),
];

export
const _root_component_type_list_2_spec_for_DefaultDiagFormat: $.ComponentSpec[] = [

];

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
    let diagnosticSetId!: OBJECT_IDENTIFIER;
    let condition!: INTEGER;
    let addinfo!: DefaultDiagFormat_addinfo;
    const callbacks: $.DecodingMap = {
        "diagnosticSetId": (_el: _Element): void => { diagnosticSetId = $._decodeObjectIdentifier(_el); },
        "condition": (_el: _Element): void => { condition = $._decodeInteger(_el); },
        "addinfo": (_el: _Element): void => { addinfo = _decode_DefaultDiagFormat_addinfo(_el); },
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DefaultDiagFormat,
        _extension_additions_list_spec_for_DefaultDiagFormat,
        _root_component_type_list_2_spec_for_DefaultDiagFormat,
        undefined,
    );
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
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeObjectIdentifier(value.diagnosticSetId, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.condition, $.BER),
            /* REQUIRED   */ _encode_DefaultDiagFormat_addinfo(value.addinfo, $.BER),
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DefaultDiagFormat(value, elGetter);
}

/* eslint-enable */
