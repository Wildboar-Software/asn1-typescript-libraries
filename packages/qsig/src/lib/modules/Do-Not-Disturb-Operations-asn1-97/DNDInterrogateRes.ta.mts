/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DNDInterrogateRes_status_Item, _decode_DNDInterrogateRes_status_Item, _encode_DNDInterrogateRes_status_Item } from "../Do-Not-Disturb-Operations-asn1-97/DNDInterrogateRes-status-Item.ta.mjs";
// export { DNDInterrogateRes_status_Item, _decode_DNDInterrogateRes_status_Item, _encode_DNDInterrogateRes_status_Item } from "../Do-Not-Disturb-Operations-asn1-97/DNDInterrogateRes-status-Item.ta.mjs";
import { DNDInterrogateRes_resultExtension, _decode_DNDInterrogateRes_resultExtension, _encode_DNDInterrogateRes_resultExtension } from "../Do-Not-Disturb-Operations-asn1-97/DNDInterrogateRes-resultExtension.ta.mjs";
// export { DNDInterrogateRes_resultExtension, _decode_DNDInterrogateRes_resultExtension, _encode_DNDInterrogateRes_resultExtension } from "../Do-Not-Disturb-Operations-asn1-97/DNDInterrogateRes-resultExtension.ta.mjs";


/**
 * @summary DNDInterrogateRes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DNDInterrogateRes ::= SEQUENCE {
 *     status SET OF SEQUENCE {
 *         basicService BasicService,
 *         dndProtectionLevel DNDProtectionLevel OPTIONAL
 *     } OPTIONAL,
 *     resultExtension CHOICE {
 *         extension [1] IMPLICIT Extension {{DNDExtSet}},
 *         sequenceOfExtn [2] IMPLICIT SEQUENCE OF Extension {{DNDExtSet}}
 *     } OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class DNDInterrogateRes {
    /**
     * @summary `status`.
     * @public
     * @readonly
     */
    readonly status: OPTIONAL<DNDInterrogateRes_status_Item[]>;
    /**
     * @summary `resultExtension`.
     * @public
     * @readonly
     */
    readonly resultExtension: OPTIONAL<DNDInterrogateRes_resultExtension>;

    constructor (
        status: OPTIONAL<DNDInterrogateRes_status_Item[]>,
        resultExtension: OPTIONAL<DNDInterrogateRes_resultExtension>
    ) {
        this.status = status;
        this.resultExtension = resultExtension;
    }

    /**
     * @summary Restructures an object into a DNDInterrogateRes
     * @description
     * 
     * This takes an `object` and converts it to a `DNDInterrogateRes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DNDInterrogateRes`.
     * @returns {DNDInterrogateRes}
     */
    public static _from_object (_o: { [_K in keyof (DNDInterrogateRes)]: (DNDInterrogateRes)[_K] }): DNDInterrogateRes {
        return new DNDInterrogateRes(_o.status, _o.resultExtension);
    }


}

/**
 * @summary The Leading Root Component Types of DNDInterrogateRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DNDInterrogateRes: $.ComponentSpec[] = [
    new $.ComponentSpec("status", true, $.hasTag(_TagClass.universal, 17)),
    new $.ComponentSpec("resultExtension", true, $.or($.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 2)))
];

/**
 * @summary The Trailing Root Component Types of DNDInterrogateRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DNDInterrogateRes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DNDInterrogateRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DNDInterrogateRes: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DNDInterrogateRes: $.ASN1Decoder<DNDInterrogateRes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DNDInterrogateRes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DNDInterrogateRes (el: _Element): DNDInterrogateRes {
    if (!_cached_decoder_for_DNDInterrogateRes) { _cached_decoder_for_DNDInterrogateRes = function (el: _Element): DNDInterrogateRes {
    let status: OPTIONAL<DNDInterrogateRes_status_Item[]>;
    let resultExtension: OPTIONAL<DNDInterrogateRes_resultExtension>;
    const callbacks: $.DecodingMap = {
        "status": (_el: _Element): void => { status = $._decodeSetOf<DNDInterrogateRes_status_Item>(() => _decode_DNDInterrogateRes_status_Item)(_el); },
        "resultExtension": (_el: _Element): void => { resultExtension = _decode_DNDInterrogateRes_resultExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DNDInterrogateRes,
        _extension_additions_list_spec_for_DNDInterrogateRes,
        _root_component_type_list_2_spec_for_DNDInterrogateRes,
        undefined,
    );
    return new DNDInterrogateRes(
        status,
        resultExtension
    );
}; }
    return _cached_decoder_for_DNDInterrogateRes(el);
}

let _cached_encoder_for_DNDInterrogateRes: $.ASN1Encoder<DNDInterrogateRes> | null = null;

/**
 * @summary Encodes a(n) DNDInterrogateRes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DNDInterrogateRes, encoded as an ASN.1 Element.
 */
export
function _encode_DNDInterrogateRes (value: DNDInterrogateRes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DNDInterrogateRes) { _cached_encoder_for_DNDInterrogateRes = function (value: DNDInterrogateRes, elGetter: $.ASN1Encoder<DNDInterrogateRes>): _Element {
    const _components: _Element[] = [];
    if (value.status !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encodeSetOf<DNDInterrogateRes_status_Item>(() => _encode_DNDInterrogateRes_status_Item, $.BER)(value.status, $.BER));
    }
    if (value.resultExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_DNDInterrogateRes_resultExtension(value.resultExtension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_DNDInterrogateRes(value, elGetter);
}


/* eslint-enable */
