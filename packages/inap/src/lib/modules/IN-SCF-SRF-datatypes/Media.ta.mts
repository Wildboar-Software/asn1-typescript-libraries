/* eslint-disable */
import { ASN1Element as _Element, ASN1ConstructionError as _ConstructionError } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Media
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Media  ::=  ENUMERATED {voiceMail(0), faxGroup3(1), faxGroup4(2)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_Media {
    voiceMail = 0,
    faxGroup3 = 1,
    faxGroup4 = 2,
}

/**
 * @summary Media
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Media  ::=  ENUMERATED {voiceMail(0), faxGroup3(1), faxGroup4(2)}
 * ```
 * 
 * @enum {number}
 */
export
type Media = _enum_for_Media;

/**
 * @summary Media
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Media  ::=  ENUMERATED {voiceMail(0), faxGroup3(1), faxGroup4(2)}
 * ```
 * 
 * @enum {number}
 */
export
const Media: typeof _enum_for_Media = _enum_for_Media;

/**
 * @summary Media_voiceMail
 * @constant
 * @type {number}
 */
export
const Media_voiceMail: _enum_for_Media.voiceMail = Media.voiceMail; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary voiceMail
 * @constant
 * @type {number}
 */
export
const voiceMail: _enum_for_Media.voiceMail = Media.voiceMail; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Media_faxGroup3
 * @constant
 * @type {number}
 */
export
const Media_faxGroup3: _enum_for_Media.faxGroup3 = Media.faxGroup3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary faxGroup3
 * @constant
 * @type {number}
 */
export
const faxGroup3: _enum_for_Media.faxGroup3 = Media.faxGroup3; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Media_faxGroup4
 * @constant
 * @type {number}
 */
export
const Media_faxGroup4: _enum_for_Media.faxGroup4 = Media.faxGroup4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary faxGroup4
 * @constant
 * @type {number}
 */
export
const faxGroup4: _enum_for_Media.faxGroup4 = Media.faxGroup4; /* SHORT_NAMED_ENUMERATED_VALUE */

export
function _decode_Media(el: _Element): Media {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case Media.voiceMail: return Media.voiceMail;
        case Media.faxGroup3: return Media.faxGroup3;
        case Media.faxGroup4: return Media.faxGroup4;
        default:
            throw new _ConstructionError(
                "Invalid ENUMERATED value " + enumerated + " for Media.",
                el,
            );
    }
}

export
const _encode_Media: $.ASN1Encoder<Media> = $._encodeEnumerated as $.ASN1Encoder<Media>;

/* eslint-enable */
