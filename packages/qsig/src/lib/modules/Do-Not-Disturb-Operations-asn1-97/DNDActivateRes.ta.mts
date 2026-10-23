/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DNDActivateRes_status_Item, _decode_DNDActivateRes_status_Item, _encode_DNDActivateRes_status_Item } from "../Do-Not-Disturb-Operations-asn1-97/DNDActivateRes-status-Item.ta.mjs";
import { DNDActivateRes_resultExtension, _decode_DNDActivateRes_resultExtension, _encode_DNDActivateRes_resultExtension } from "../Do-Not-Disturb-Operations-asn1-97/DNDActivateRes-resultExtension.ta.mjs";

/**
 * @summary DNDActivateRes
 * @description
 *
 * Acceptance of remote SS-DND activation (ECMA-194 §6.5.6.1.1;
 * ECMA-193 §8.2.1.6). Returned only when the request is accepted;
 * rejection is a return error. `status` lists the basic services
 * activated and, optionally, each DNDPL (NOTE 20, NOTE 24).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-194/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-193/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DNDActivateRes ::= SEQUENCE {
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
class DNDActivateRes {
    /**
     * @summary `status`.
     * @description
     *
     * Basic services for which SS-DND has been activated, each with
     * an optional DNDPL (ECMA-193 §8.2.1.6 NOTE 20, NOTE 24).
     * ECMA-194 does not say when this element is omitted.
     * @public
     * @readonly
     */
    readonly status: OPTIONAL<DNDActivateRes_status_Item[]>;
    /**
     * @summary `resultExtension`.
     * @description
     *
     * Manufacturer-specific extension. ECMA-194 §6.3.1 defines the
     * CHOICE and leaves `DNDExtSet` empty.
     * @public
     * @readonly
     */
    readonly resultExtension: OPTIONAL<DNDActivateRes_resultExtension>;

    constructor (
        status?: OPTIONAL<DNDActivateRes_status_Item[]>,
        resultExtension?: OPTIONAL<DNDActivateRes_resultExtension>
    ) {
        this.status = status;
        this.resultExtension = resultExtension;
    }

    /**
     * @summary Restructures an object into a DNDActivateRes
     * @description
     * 
     * This takes an `object` and converts it to a `DNDActivateRes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DNDActivateRes`.
     * @returns {DNDActivateRes}
     */
    public static _from_object (_o: { [_K in keyof (DNDActivateRes)]: (DNDActivateRes)[_K] }): DNDActivateRes {
        return new DNDActivateRes(_o.status, _o.resultExtension);
    }

}

/**
 * @summary The Leading Root Component Types of DNDActivateRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DNDActivateRes: $.ComponentSpec[] = [
    new $.ComponentSpec("status", true, $.hasTag(_TagClass.universal, 17)),
    new $.ComponentSpec("resultExtension", true, $.or($.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 2)))
];

/**
 * @summary The Trailing Root Component Types of DNDActivateRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DNDActivateRes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DNDActivateRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DNDActivateRes: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DNDActivateRes: $.ASN1Decoder<DNDActivateRes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DNDActivateRes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DNDActivateRes (el: _Element): DNDActivateRes {
    if (!_cached_decoder_for_DNDActivateRes) { _cached_decoder_for_DNDActivateRes = function (el: _Element): DNDActivateRes {
    let status: OPTIONAL<DNDActivateRes_status_Item[]>;
    let resultExtension: OPTIONAL<DNDActivateRes_resultExtension>;
    const callbacks: $.DecodingMap = {
        "status": (_el: _Element): void => { status = $._decodeSetOf<DNDActivateRes_status_Item>(() => _decode_DNDActivateRes_status_Item)(_el); },
        "resultExtension": (_el: _Element): void => { resultExtension = _decode_DNDActivateRes_resultExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DNDActivateRes,
        _extension_additions_list_spec_for_DNDActivateRes,
        _root_component_type_list_2_spec_for_DNDActivateRes,
        undefined,
    );
    return new DNDActivateRes(
        status,
        resultExtension
    );
}; }
    return _cached_decoder_for_DNDActivateRes(el);
}

let _cached_encoder_for_DNDActivateRes: $.ASN1Encoder<DNDActivateRes> | null = null;

/**
 * @summary Encodes a(n) DNDActivateRes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DNDActivateRes, encoded as an ASN.1 Element.
 */
export
function _encode_DNDActivateRes (value: DNDActivateRes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DNDActivateRes) { _cached_encoder_for_DNDActivateRes = function (value: DNDActivateRes, _elGetter: $.ASN1Encoder<DNDActivateRes>): _Element {
    const _components: _Element[] = [];
    if (value.status !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encodeSetOf<DNDActivateRes_status_Item>(() => _encode_DNDActivateRes_status_Item, $.BER)(value.status, $.BER));
    }
    if (value.resultExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_DNDActivateRes_resultExtension(value.resultExtension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_DNDActivateRes(value, elGetter);
}

/* eslint-enable */
