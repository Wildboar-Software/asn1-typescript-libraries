/* eslint-disable */
import {
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
import { AlertLevel, _enum_for_AlertLevel, _decode_AlertLevel, _encode_AlertLevel } from "../TSM/AlertLevel.ta.mjs";

import { AlertDescription, _enum_for_AlertDescription, _decode_AlertDescription, _encode_AlertDescription } from "../TSM/AlertDescription.ta.mjs";



/**
 * @summary Alert
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Alert ::= SEQUENCE {
 * level            AlertLevel,
 * description        AlertDescription
 * }
 * ```
 * 
 * @class
 */
export
class Alert {
    constructor (
        /**
         * @summary `level`.
         * @public
         * @readonly
         */
        readonly level: AlertLevel,
        /**
         * @summary `description`.
         * @public
         * @readonly
         */
        readonly description: AlertDescription
    ) {}

    /**
     * @summary Restructures an object into a Alert
     * @description
     * 
     * This takes an `object` and converts it to a `Alert`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Alert`.
     * @returns {Alert}
     */
    public static _from_object (_o: { [_K in keyof (Alert)]: (Alert)[_K] }): Alert {
        return new Alert(_o.level, _o.description);
    }

        /**
         * @summary The enum used as the type of the component `level`
         * @public
         * @static
         */

    public static _enum_for_level = _enum_for_AlertLevel;        /**
         * @summary The enum used as the type of the component `description`
         * @public
         * @static
         */

    public static _enum_for_description = _enum_for_AlertDescription;
}

/**
 * @summary The Leading Root Component Types of Alert
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Alert: $.ComponentSpec[] = [
    new $.ComponentSpec("level", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("description", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of Alert
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Alert: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Alert
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Alert: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Alert: $.ASN1Decoder<Alert> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Alert
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Alert (el: _Element): Alert {
    if (!_cached_decoder_for_Alert) { _cached_decoder_for_Alert = function (el: _Element): Alert {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("Alert contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "level";
    sequence[1].name = "description";
    let level!: AlertLevel;
    let description!: AlertDescription;
    level = _decode_AlertLevel(sequence[0]);
    description = _decode_AlertDescription(sequence[1]);
    return new Alert(
        level,
        description,

    );
}; }
    return _cached_decoder_for_Alert(el);
}

let _cached_encoder_for_Alert: $.ASN1Encoder<Alert> | null = null;

/**
 * @summary Encodes a(n) Alert into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Alert, encoded as an ASN.1 Element.
 */
export
function _encode_Alert (value: Alert, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Alert) { _cached_encoder_for_Alert = function (value: Alert): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_AlertLevel(value.level, $.BER),
            /* REQUIRED   */ _encode_AlertDescription(value.description, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Alert(value, elGetter);
}


/* eslint-enable */
